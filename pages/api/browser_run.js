import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
const { Workbook } = require('exceljs');

export default async function handler(req, res) {
    const sortedData = req.body.sortedData;
    const row = req.body.row;
    console.log('sortedData_run:', sortedData);
    console.log('row_run:', row);

    const matchAndReplace = (arr1, arr2) => {
        let isNavigationAfterEnterOrClick = false;
        const filteredData = [];

        for (const item of arr1) {
            const { type, key, value, label, element, url } = item;

            // console.log('Processing item:', item);

            if ((type === 'keydown' && key === 'Enter')) {
                isNavigationAfterEnterOrClick = true;
                filteredData.push(item);
                // console.log('Trigger event detected, adding to filteredData:', item);
            } else if (isNavigationAfterEnterOrClick && type !== 'navigation') {
                if (type === 'input' && arr2.hasOwnProperty(value)) {
                    filteredData.push({ ...item, value: arr2[value] });
                    // console.log('Input after trigger event, replacing value and adding to filteredData:', { ...item, value: arr2[value] });
                } else if (type === 'click' && element && element.innerText && arr2.hasOwnProperty(value)) {
                    // console.log('check_111:', element);
                    filteredData.push({ ...item, element: { ...element, innerText: arr2[value] } });
                    // console.log('Click after trigger event, replacing innerText and adding to filteredData:', { ...item, element: { ...element, innerText: arr2[value] } });
                } else if (type === 'click' && arr2.hasOwnProperty(label)) {
                    filteredData.push({ ...item, label: arr2[label] });
                    // console.log('Click after trigger event, replacing label and adding to filteredData:', { ...item, label: arr2[label] });
                } else {
                    filteredData.push(item);
                    // console.log('After trigger event, adding to filteredData without changes:', item);
                }
            } else if (isNavigationAfterEnterOrClick && type === 'navigation') {
                // 不添加 navigation 事件到 filteredData
                isNavigationAfterEnterOrClick = false;
                // console.log('Navigation event after trigger, reset isNavigationAfterEnterOrClick.');
            } else if (!isNavigationAfterEnterOrClick) {
                if (type === 'navigation' && arr2.hasOwnProperty(url)) {
                    filteredData.push({ ...item, url: arr2[url] });
                    // console.log('Navigation event, replacing url and adding to filteredData:', { ...item, url: arr2[url] });
                } else if (type === 'input' && arr2.hasOwnProperty(value)) {
                    filteredData.push({ ...item, value: arr2[value] });
                    // console.log('Input event, replacing value and adding to filteredData:', { ...item, value: arr2[value] });
                } else if (type === 'click' && element && arr2.hasOwnProperty(value)) {
                    filteredData.push({ ...item, element: { ...element, innerText: arr2[value] } });
                    // console.log('Click event, replacing innerText and adding to filteredData:', { ...item, element: { ...element, innerText: arr2[value] } });
                } else {
                    filteredData.push(item);
                    // console.log('Adding to filteredData without changes:', item);
                }
            }
        }

        return filteredData;
    };

    const sortedData_new = matchAndReplace(sortedData, row);
    console.log('sortedData_new_run:', sortedData_new);


    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1300,
            height: 900
        },
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-blink-features=AutomationControlled'
        ]
    });
    let page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    const path = require('path');
    const cookiesPath = path.join(process.cwd(), 'pages', 'api', 'cookies.json');
    const cookiesString = fs.readFileSync(cookiesPath, 'utf8');
    const cookies = JSON.parse(cookiesString);

    // 在页面中设置 cookies
    await page.setCookie(...cookies);
    await page.evaluateOnNewDocument(() => {
        delete navigator.__proto__.webdriver;
        window.navigator.chrome = {
            runtime: {},
        };
        const originalQuery = window.navigator.permissions.query;
        window.navigator.permissions.query = (parameters) => (
            parameters.name === 'notifications' ?
                Promise.resolve({ state: Notification.permission }) :
                originalQuery(parameters)
        );
    });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');
    await page.evaluate(async () => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false })
    })

    const monitorResults = {
        clicks: [],
        navigations: [],
        inputs: [],
        scrolls: [], // 新增滚动信息
        keydowns: [],
    };
    // 监听页面的键盘事件
    await page.exposeFunction('onKeydown', (e) => {
        console.log('Keydown event:', e);
        monitorResults.keydowns.push({ ...e, time: new Date() });
    });
    // 监听页面的滚动事件
    await page.exposeFunction('onScroll', (e) => {
        console.log('Scroll event:', e);
        monitorResults.scrolls.push({ ...e, time: new Date() });
    });
    // 监听页面的点击事件
    await page.exposeFunction('onPageClick', (e, tagName) => {
        console.log('Click event:', e, 'on element:', tagName);
        monitorResults.clicks.push({ event: e, element: tagName, time: new Date() });
    });

    // 监听页面的输入事件
    await page.exposeFunction('onInput', (e) => {
        console.log('Input event:', e);
        monitorResults.inputs.push({ ...e, time: new Date() });
    });

    // 监听页面的导航事件
    page.on('framenavigated', async () => {
        const url = page.url();
        console.log('Navigation event', url);
        monitorResults.navigations.push({ url: url, time: new Date() });
    });



    // 在每次页面导航后重新设置事件监听器
    page.on('framenavigated', async () => {
        await page.evaluate(() => {
            document.addEventListener('click', (e) => {
                const tagName = e.target.tagName;
                window.onPageClick({ x: e.x, y: e.y }, tagName);
            });
            document.addEventListener('input', (e) => {
                const element = e.target;
                const elementInfo = {
                    tagName: element.tagName,
                    id: element.id,
                    className: element.className,
                    name: element.name,
                    value: element.value,
                };
                window.onInput({ element: elementInfo, value: e.target.value });
            });
            document.addEventListener('keydown', (e) => { // 新增键盘事件监听器
                window.onKeydown({ key: e.key, code: e.code });
            });
            let lastScrollTop = 0;
            const threshold = 100; // 设置滚动阈值
            document.addEventListener('scroll', () => {
                const scrollTop = document.documentElement.scrollTop;
                if (Math.abs(scrollTop - lastScrollTop) > threshold) {
                    const direction = scrollTop > lastScrollTop ? 'down' : 'up';
                    lastScrollTop = scrollTop;
                    window.onScroll({ action: 'scroll', direction: direction });
                }
            });
        });
    });

    res.writeHead(200, {
        'Content-Type': 'application/json',
    });

    // 获取浏览器实例的 WebSocket 端点
    const wsEndpoint = browser.wsEndpoint();

    // 将 wsEndpoint 返回给客户端，但不结束响应
    res.write(JSON.stringify({ wsEndpoint }));



    let enterPressed = false;
    function isUniqueAttribute(attribute, event, events) {
        if (!event) {
            console.log('event is null or undefined');
            return false;
        }
        const inputs = events.filter(e => e.type === 'input');
        const values = inputs.map(e => e.element[attribute]).filter(value => value !== '');
        console.log('values:', values);
        const count = values.filter(value => value === event.element[attribute]).length;
        return count === 1;
    }
    let count = 0;
    let jsonData_0;
    let jsonData_2;
    let data = [];


    async function handleEvent(event) {
        const { type, time } = event;
        console.log('event:', event);
        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            switch (type) {
                case 'click':
                    let clickSelector;
                    let isXPath_click = false;
                    if (event.element.id) {
                        clickSelector = `#${event.element.id}`;
                    }
                    else if (event.element.tagName && event.element.innerText) {
                        if (event.element.innerText.includes('保存当前页') || event.element.innerText.includes('同步至未推送站点') ||
                            event.element.innerText.includes('翻译') || event.element.innerText.includes('保存所有站点') || event.element.innerText.includes('保存并提交所有站点')
                        ) {
                            clickSelector = `//button[contains(., '${event.element.innerText}')]`;
                        } else if (event.element.innerText.includes('确定')) {
                            clickSelector = `//div[@data-v-3e50dd5e]//button[contains(@class, 'ivu-btn-primary') and span[text() ='${event.element.innerText}']]`;
                        }
                        else {
                            clickSelector = `//${event.element.tagName.toLowerCase()}[text()='${event.element.innerText}'] | //${event.element.tagName.toLowerCase()}/span[text()='${event.element.innerText}']`;
                        }
                        isXPath_click = true;
                    }
                    else if (event.element.className) {
                        if (event.element.className === "a[data-click-name='shop_title_click']") {
                            clickSelector = `${event.element.className.split(' ').join('.')}`;;
                        } else if (event.element.className.includes('确定')) {
                            clickSelector = `//div[@data-v-3e50dd5e]//button[contains(@class, 'ivu-btn-primary') and span[text() ='${event.element.innerText}']]`;
                        }
                        else {
                            clickSelector = `.${event.element.className.split(' ').join('.')}`;
                        }
                    }
                    console.log('clickSelector:', clickSelector);
                    console.log('isXPath_click:', isXPath_click);
                    console.log('leixing:', event.element.leixing);
                    const cliclValue = event.value;



                    if (!event.element.leixing) {
                        if (isXPath_click) {
                            if (event.element.innerText.includes('确定')) {
                                console.log('点击“确定”按钮');
                                await page.evaluate((selector) => {
                                    const xpathResult = document.evaluate(selector, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                                    console.log('xpathResult:', xpathResult);
                                    const element = xpathResult.snapshotItem(2);
                                    console.log('element:', element);
                                    element.click();
                                }, clickSelector);
                                console.log('点击“确定”按钮_2');
                            }
                            else {
                                await page.evaluate((selector) => {
                                    const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                    console.log('xpathResult:', xpathResult);
                                    const element = xpathResult.singleNodeValue;
                                    console.log('element:', element);
                                    element.click();
                                }, clickSelector);
                            }
                            // await page.waitForSelector(clickSelector, { visible: true, timeout: 5000 });

                        } else {
                            // const url = await page.url();
                            // console.log('Current URL:', url);
                            // await page.waitForSelector(clickSelector, { visible: true, timeout: 5000 });
                            await page.click(clickSelector);
                        }
                    } else if (event.element.leixing === '自定义1') {
                        console.log('点击“刊登管理”菜单项以展开子菜单');

                        await page.evaluate(async () => {
                            const menuTitle = document.querySelector('.ivu-menu-submenu-title');
                            console.log('menuTitle', menuTitle);
                            if (menuTitle) {
                                console.log('Found the menu title, clicking to expand...');
                                menuTitle.click();
                                console.log('menuTitle_1');
                                // 等待子菜单加载完毕并点击“产品列表”菜单项
                                await new Promise(resolve => setTimeout(resolve, 1000));
                                const productListItem = document.evaluate("//li[contains(@class, 'ivu-menu-item') and .//span[text()='产品列表']]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                                // console.log('productListItem', productListItem);
                                if (productListItem) {
                                    console.log('Found the product list item, clicking...');
                                    productListItem.click();
                                    console.log('productListItem_1');
                                } else {
                                    console.error("无法找到“产品列表”菜单项");
                                }
                            }
                        });
                    } else if (event.element.leixing === '自定义2') {
                        try {
                            await page.evaluate(async (cliclValue) => {
                                // 查找所有具有特定样式的标签元素
                                const labels = document.querySelectorAll('.ivu-form-item-label[style="width: 60px;"]');

                                // 迭代这些标签以找到包含 "店铺" 文本的标签
                                let storeFormItem = null;
                                labels.forEach(label => {
                                    if (label.textContent.trim() === "店铺") {
                                        storeFormItem = label.parentElement;
                                    }
                                });

                                if (storeFormItem) {
                                    const selectButton = storeFormItem.querySelector('.ivu-select-selection');
                                    if (selectButton) {
                                        console.log('Found the select button:', selectButton);

                                        // 确保元素在视图中
                                        selectButton.scrollIntoView();

                                        // 手动创建并触发点击事件
                                        const clickEvent = new MouseEvent('click', {
                                            view: window,
                                            bubbles: true,
                                            cancelable: true
                                        });

                                        selectButton.dispatchEvent(clickEvent);
                                        console.log('Click event dispatched on select button');

                                        // 设置适当的延时，确保下拉菜单有时间加载
                                        await new Promise(resolve => setTimeout(resolve, 1000));

                                        // 使用XPath选择包含“Sadong”文本的下拉项
                                        console.log("cliclValue", cliclValue)
                                        const item = document.evaluate(`//li[contains(@class, 'ivu-select-item') and text()="${cliclValue}"]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                                        if (item) {
                                            console.log('Found the Sadong item:', item);
                                            item.scrollIntoView();

                                            // 手动创建并触发点击事件
                                            const itemClickEvent = new MouseEvent('click', {
                                                view: window,
                                                bubbles: true,
                                                cancelable: true
                                            });

                                            item.dispatchEvent(itemClickEvent);
                                            console.log('Click event dispatched on Sadong item');
                                        } else {
                                            console.error("无法找到包含“Sadong”的下拉项");
                                        }
                                    } else {
                                        console.error("无法找到选择器 .ivu-select-selection 对应的元素");
                                    }
                                } else {
                                    console.error("无法找到包含 '店铺' 标签的 .ivu-form-item 元素");
                                }
                            }, cliclValue);
                            await new Promise(resolve => setTimeout(resolve, 10000));
                            console.log('自定义2_done');
                        } catch (error) {
                            console.error('An error occurred:', error);
                        }
                    } else if (event.element.leixing === '自定义3') {
                        try {
                            await page.evaluate(async (clickSelector) => {
                                const selectButton = document.querySelector(clickSelector);

                                if (selectButton) {
                                    console.log('Found the select button, clicking to expand...');
                                    selectButton.click();
                                } else {
                                    console.error("无法找到选择器 .ivu-select-selection 对应的元素");
                                }
                            }, clickSelector);
                            const input = await page.$(clickSelector);
                            await input.uploadFile(cliclValue);
                            // 如果需要手动触发上传操作（可选）
                            // 假设有一个上传按钮需要点击来完成上传
                            const uploadButtonSelector = '.btn';  // 替换为实际的上传按钮选择器
                            await page.waitForSelector(uploadButtonSelector, { visible: true });
                            await page.click(uploadButtonSelector);

                            console.log('自定义3_done');
                        } catch (error) {
                            console.error('An error occurred:', error);
                        }
                    }


                    console.log('check_1');
                    const newPagePromise = new Promise((resolve, reject) => {
                        const timeoutId = setTimeout(() => {
                            reject(new Error('Timeout waiting for new page'));
                        }, 2000); // 设置超时时间为 5 秒
                        browser.once('targetcreated', async target => {
                            clearTimeout(timeoutId); // 如果 'targetcreated' 事件被触发，那么清除超时
                            if (target.type() === 'page') {
                                resolve(await target.page());
                            }
                        });
                    });
                    console.log('check_2');
                    const newPage = await newPagePromise.catch(() => null);
                    console.log('check_3');
                    console.log('newPage:', newPage);
                    if (newPage !== null) {
                        console.log('newPage:');
                        await newPage.setViewport({ width: 1280, height: 720 });
                        page = newPage;
                        await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 10000 }).catch(() => {
                            console.log('Navigation timeout after 10 seconds');
                        });
                    }

                    console.log('check_4');
                    break;

                case 'input':
                    let inputSelector;
                    let isXPath = false;
                    if (event.element.label && isUniqueAttribute('label', event, sortedData_new)) {
                        if (event.element.label === '要点说明1') {
                            inputSelector = `//label[normalize-space(text())='要点说明']/following-sibling::div//textarea`;
                        } else if (event.element.label === '要点说明2') {
                            inputSelector = `//label[normalize-space(text())='要点说明']/following-sibling::div//textarea`;
                        }
                        else if (event.element.label === '要点说明3') {
                            inputSelector = `//label[normalize-space(text())='要点说明']/following-sibling::div//textarea`;
                        }
                        else if (event.element.label === '要点说明4') {
                            inputSelector = `//label[normalize-space(text())='要点说明']/following-sibling::div//textarea`;
                        }
                        else if (event.element.label === '要点说明5') {
                            inputSelector = `//label[normalize-space(text())='要点说明']/following-sibling::div//textarea`;
                        }
                        else if (event.element.label === '产品描述') {
                            inputSelector = `//label[normalize-space(text())='要点说明']/following-sibling::div//textarea`;
                        }
                        else {
                            inputSelector = `//label[normalize-space(text())='${event.element.label}']/following-sibling::input | //label[normalize-space(text())='${event.element.label}']/following-sibling::div//textarea`;
                        }
                        isXPath = true;
                    }
                    else if (event.element.id && isUniqueAttribute('id', event, sortedData_new)) {
                        inputSelector = `#${event.element.id}`;
                    } else if (event.element.className && isUniqueAttribute('className', event, sortedData_new)) {
                        inputSelector = `.${event.element.className.split(' ').join('.')}`;
                    } else if (event.element.tagName && isUniqueAttribute('tagName', event, sortedData_new)) {
                        inputSelector = event.element.tagName.toLowerCase();
                    } else if (event.element.innerText && isUniqueAttribute('innerText', event, sortedData_new)) {
                        inputSelector = `//*[text()='${event.element.innerText}']`;
                        isXPath = true;
                    } else if (event.element.placeholder && isUniqueAttribute('placeholder', event, sortedData_new)) {
                        inputSelector = `//*[@placeholder='${event.element.placeholder}']`;
                        isXPath = true;
                    }
                    const inputValue = event.value;
                    const inputlable = event.element.label;

                    console.log('inputSelector:', inputSelector);
                    console.log('isXPath:', isXPath);
                    // if (!event.element.leixing) {
                    if (isXPath) {
                        await page.evaluate(async (selector, value, lable) => {
                            value = String(value);
                            let element;
                            if (lable === '要点说明2') {
                                const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                console.log('xpathResult:', xpathResult);
                                element = xpathResult.singleNodeValue.parentNode.parentNode.parentNode.nextElementSibling.children[0].children[0].children[0];
                                console.log('element:', element);
                            }
                            else if (lable === '要点说明3') {
                                const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                console.log('xpathResult:', xpathResult);
                                const element_0 = xpathResult.singleNodeValue;
                                const element_1 = element_0.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling;
                                element = element_1.children[0].children[0].children[0]
                                console.log('element:', element);
                            }
                            else if (lable === '要点说明4') {
                                const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                console.log('xpathResult:', xpathResult);
                                const element_0 = xpathResult.singleNodeValue;
                                const element_1 = element_0.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
                                element = element_1.children[0].children[0].children[0]
                                console.log('element:', element);
                            }
                            else if (lable === '要点说明5') {
                                const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                console.log('xpathResult:', xpathResult);
                                const element_0 = xpathResult.singleNodeValue;
                                const element_1 = element_0.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
                                element = element_1.children[0].children[0].children[0]
                                console.log('element:', element);
                            }
                            else if (lable === '产品描述') {
                                const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                console.log('xpathResult:', xpathResult);
                                const element_0 = xpathResult.singleNodeValue;
                                const element_1 = element_0.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
                                element = element_1.children[1].children[0].children[0].children[0].children[1].children[0]
                                console.log('element:', element);
                            }
                            else {
                                const xpathResult = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                console.log('xpathResult:', xpathResult);
                                element = xpathResult.singleNodeValue;
                                console.log('element:', element);
                            }

                            // 模拟用户输入
                            const inputEvent = new Event('input', { bubbles: true });
                            const changeEvent = new Event('change', { bubbles: true });
                            const blurEvent = new Event('blur', { bubbles: true });

                            // 检查元素是否是 contenteditable
                            if (element.contentEditable === 'true') {
                                // 清空输入框并输入新的值
                                element.innerText = '';
                                element.dispatchEvent(inputEvent);

                                for (let i = 0; i < value.length; i++) {
                                    element.innerText += value[i];
                                    element.dispatchEvent(inputEvent);
                                    await new Promise(resolve => setTimeout(resolve, 20)); // 模拟用户输入间隔
                                }

                                element.dispatchEvent(blurEvent);
                            } else {
                                // 清空输入框并输入新的值
                                element.value = '';
                                element.dispatchEvent(inputEvent);

                                for (let i = 0; i < value.length; i++) {
                                    element.value += value[i];
                                    element.dispatchEvent(inputEvent);
                                    await new Promise(resolve => setTimeout(resolve, 20)); // 模拟用户输入间隔
                                }

                                element.dispatchEvent(changeEvent);
                            }
                        }, inputSelector, inputValue, inputlable);
                    } else {
                        await page.evaluate(async (selector, value) => {
                            value = String(value);
                            const element = document.querySelector(selector);
                            console.log('element:', element);

                            // 模拟用户输入
                            const inputEvent = new Event('input', { bubbles: true });
                            const changeEvent = new Event('change', { bubbles: true });

                            // 清空输入框并输入新的值
                            element.value = '';
                            element.dispatchEvent(inputEvent);

                            for (let i = 0; i < value.length; i++) {
                                element.value += value[i];
                                element.dispatchEvent(inputEvent);
                                await new Promise(resolve => setTimeout(resolve, 100)); // 模拟用户输入间隔
                            }

                            element.dispatchEvent(changeEvent);
                        }, inputSelector, inputValue, inputlable);
                    }
                    // } 
                    break;

                case 'output':
                    if (event.element.leixing === '自定义1') {
                        const newData = await page.evaluate(() => {
                            return new Promise((resolve) => {
                                setTimeout(() => {
                                    const shopListContainer = document.querySelector('#shop-all-list');
                                    const shops = [];
                                    const shopList = shopListContainer.querySelectorAll('li');
                                    shopList.forEach(shop => {
                                        const nameElement = shop.querySelector('.tit h4');
                                        const linkElement = shop.querySelector('.tit a');
                                        const imgElement = shop.querySelector('.pic img');
                                        const reviewElement = shop.querySelector('.review-num b');
                                        const priceElement = shop.querySelector('.mean-price b');
                                        const tagElements = shop.querySelectorAll('.tag-addr .tag');
                                        const dealElements = shop.querySelectorAll('.si-deal a');

                                        const name = nameElement ? nameElement.innerText.trim() : '';
                                        const link = linkElement ? linkElement.href : '';
                                        const image = imgElement ? imgElement.src : '';
                                        const reviewCount = reviewElement ? reviewElement.innerText.trim() : '';
                                        const price = priceElement ? priceElement.innerText.trim() : '';

                                        const tags = [];
                                        tagElements.forEach(tagElement => {
                                            tags.push(tagElement.innerText.trim());
                                        });

                                        const deals = [];
                                        dealElements.forEach(dealElement => {
                                            deals.push({
                                                title: dealElement.title,
                                                link: dealElement.href
                                            });
                                        });

                                        shops.push({
                                            name,
                                            link,
                                            image,
                                            review_count: reviewCount,
                                            price,
                                            tags,
                                            deals
                                        });
                                    });

                                    resolve(shops);
                                }, 5000);
                            });
                        });

                        // 将数据转换为 JSON 格式
                        console.log('newData:', newData);
                        data.push(newData);
                        // console.log('data:', data);

                    }
                    else if (event.element.leixing === '自定义2') {
                        const data = await page.evaluate(() => {
                            const shops = [];
                            const shopElements = document.querySelectorAll('.J_content_list');

                            shopElements.forEach(shop => {
                                const address = shop.querySelector('.shopdetail p:nth-of-type(2)').innerText.replace('地址：', '').trim();
                                const phone = shop.querySelector('.shopdetail p:nth-of-type(3)').innerText.replace('电话：', '').trim();
                                const hours = shop.querySelector('.shopdetail p:nth-of-type(4)').innerText.replace('营业时间：', '').trim();

                                shops.push({
                                    address: address,
                                    phone: phone,
                                    hours: hours
                                });
                            });

                            return shops;
                        });

                        // 将数据转换为 JSON 格式
                        jsonData_2 = data;
                        console.log('jsonData_2:', jsonData_2);

                    }

                    else if (event.element.leixing === '自定义0') {
                        const data = await page.evaluate(() => {
                            const shops = [];
                            const links = document.querySelectorAll('#region-nav a');
                            let texts = Array.from(links).map(link => link.innerText);
                            // 将数据转换为 JSON 格
                            return texts;
                        });

                        // 将数据转换为 JSON 格式
                        jsonData_0 = data;
                        console.log('jsonData_0:', jsonData_0);


                    }
                    break;



                case 'keydown':
                    const key = event.key;
                    await page.keyboard.press(key);
                    if (key === 'Enter') {
                        enterPressed = true;
                    }
                    break;
                case 'navigation':
                    if (enterPressed) {
                        // 已经按下 Enter 键，页面会自动跳转，等待3秒钟
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        enterPressed = false; // 重置标记
                    } else {
                        // 正常的导航操作
                        const url = event.url;
                        await page.goto(url);
                        await new Promise(resolve => setTimeout(resolve, 3000)); // 等待3秒钟
                    }
                    break;
                case 'scroll':
                    const direction = event.direction;
                    const distance = event.distance;
                    if (direction === 'down') {
                        await page.evaluate((distance) => window.scrollBy(0, distance), distance);
                    } else {
                        await page.evaluate((distance) => window.scrollBy(0, -distance), distance);
                    }
                    await new Promise(resolve => setTimeout(resolve, 5000));
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error(`An error occurred in the ${type} case:`, error);
        }
    }

    function getRandomInterval(min = 2000, max = 8000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (const event of sortedData_new) {
        const { type, time } = event;
        console.log('event:', event);
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            if (type === 'loop') {
                for (let text of jsonData_0) {
                    if (text === '西城区') {
                        continue;
                    }
                    console.log('Processing text:', text);

                    try {
                        // 确保页面完全加载
                        await page.goto(page.url(), { waitUntil: 'load', timeout: 60000 });
                        console.log('Page loaded.');
                        await new Promise(resolve => setTimeout(resolve, 2000));

                        // 查找元素并捕获错误
                        const foundLink_0 = await page.evaluate((text) => {
                            try {
                                let xpath = `//a/span[text()='行政区'] | //a[text()='行政区']`;
                                let xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                let linkElement = xpathResult.singleNodeValue;
                                return linkElement !== null; // 返回是否找到链接
                            } catch (error) {
                                console.error('Error in evaluate for finding link:', error);
                                return false;
                            }
                        }, text);

                        if (foundLink_0) {
                            console.log('Link found for text:', text);

                            // 点击链接并等待导航完成，最多等待3秒钟
                            await Promise.race([
                                page.waitForNavigation({ waitUntil: 'networkidle0' }),
                                page.evaluate((text) => {
                                    let xpath = `//a/span[text()='行政区'] | //a[text()='行政区']`;
                                    let xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                    let linkElement = xpathResult.singleNodeValue;
                                    if (linkElement) {
                                        linkElement.click();
                                    }
                                }, text),
                                new Promise(resolve => setTimeout(resolve, 3000))
                            ]);

                            console.log('Navigation completed or timeout for text:', text);

                            // 获取总页数

                        } else {
                            console.log(`没有找到文本为 "${text}" 的链接`);
                        }

                        // 等待一定时间确保页面渲染完成
                        await new Promise(resolve => setTimeout(resolve, 2000));

                        // 查找元素并捕获错误
                        const foundLink = await page.evaluate((text) => {
                            try {
                                let xpath = `//a/span[text()='${text}'] | //a[text()='${text}']`;
                                let xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                let linkElement = xpathResult.singleNodeValue;
                                return linkElement !== null; // 返回是否找到链接
                            } catch (error) {
                                console.error('Error in evaluate for finding link:', error);
                                return false;
                            }
                        }, text);

                        if (foundLink) {
                            console.log('Link found for text:', text);

                            // 点击链接并等待导航完成，最多等待3秒钟
                            await Promise.race([
                                page.waitForNavigation({ waitUntil: 'networkidle0' }),
                                page.evaluate((text) => {
                                    let xpath = `//a/span[text()='${text}'] | //a[text()='${text}']`;
                                    let xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                                    let linkElement = xpathResult.singleNodeValue;
                                    if (linkElement) {
                                        linkElement.click();
                                    }
                                }, text),
                                new Promise(resolve => setTimeout(resolve, 3000))
                            ]);

                            console.log('Navigation completed or timeout for text:', text);

                            // 获取总页数
                            const totalPageNumber = await page.evaluate(() => {
                                let pageLinks = document.querySelectorAll('.page a');
                                return pageLinks.length > 0 ? parseInt(pageLinks[pageLinks.length - 2].innerText) : 1;
                            });

                            console.log('Total page number:', totalPageNumber);

                            const loopCount = totalPageNumber || 1;
                            const loopEvents = event.loopEvents || [];
                            const date = new Date();
                            const dateString = date.toISOString().replace(/:/g, '-'); // 将时间中的冒号替换为短横线，因为冒号在文件名中是非法的
                            const filename = `output_${dateString}.xlsx`;

                            for (let i = 0; i < loopCount; i++) {
                                for (const loopEvent of loopEvents) {
                                    try {
                                        await handleEvent(loopEvent);
                                    } catch (error) {
                                        console.error(`An error occurred in the loop event:`, error);
                                    }
                                }
                                const allHeaders = new Set();
                                function collectHeaders(data, prefix = '') {
                                    Object.keys(data).forEach(key => {
                                        const fullKey = prefix ? `${prefix}_${key}` : key;
                                        if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
                                            collectHeaders(data[key], fullKey);
                                        } else {
                                            allHeaders.add(fullKey);
                                        }
                                    });
                                }
                                // 遍历每个对象，收集所有可能的列名称
                                data.forEach(dataArray => {
                                    dataArray.forEach(data => {
                                        collectHeaders(data);
                                    });
                                });

                                // 将所有列名称转换为数组
                                const allHeadersArray = Array.from(allHeaders);

                                // 创建一个新的工作簿和工作表
                                const workbook = new Workbook();
                                const worksheet = workbook.addWorksheet('Sheet1');

                                // 添加标题行
                                worksheet.addRow(allHeadersArray);


                                // 增加随机时间间隔

                                // 遍历每个对象，并构建数据行
                                data.forEach(dataArray => {
                                    dataArray.forEach(data => {
                                        const rowData = {};

                                        function populateRowData(data, prefix = '') {
                                            Object.keys(data).forEach(key => {
                                                const fullKey = prefix ? `${prefix}_${key}` : key;
                                                if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
                                                    populateRowData(data[key], fullKey);
                                                } else {
                                                    rowData[fullKey] = data[key];
                                                }
                                            });
                                        }

                                        populateRowData(data);

                                        // 添加数据行
                                        const row = allHeadersArray.map(header => rowData[header] || '');
                                        worksheet.addRow(row);
                                    });
                                });
                                // 写入 Excel 文件
                                await workbook.xlsx.writeFile(filename)
                                    .then(() => {
                                        console.log('Excel 文件已成功创建！');
                                    })
                                    .catch(error => {
                                        console.error('创建 Excel 文件时出错：', error);
                                    });
                                console.log('保存成功');

                                const randomInterval = getRandomInterval();
                                console.log(`Waiting for ${randomInterval} milliseconds before next loop iteration`);
                                await new Promise(resolve => setTimeout(resolve, randomInterval));

                            }
                        } else {
                            console.log(`没有找到文本为 "${text}" 的链接`);
                        }
                    } catch (error) {
                        console.error(`An error occurred while processing text "${text}":`, error);
                    }
                }
            } else {
                await handleEvent(event);
            }
        } catch (error) {
            console.error(`An error occurred in the main loop:`, error);
        }

        // 等待下一事件的时间间隔
        const currentTime = new Date(time).getTime();
        const nextTime = sortedData[sortedData.indexOf(event) + 1] ? new Date(sortedData[sortedData.indexOf(event) + 1].time).getTime() : currentTime;
        const waitTime = Math.min(nextTime - currentTime, 2000);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        console.log('check_5');
    }

    const runresult = count === sortedData_new.length ? '成功执行' : `执行到第 ${count} 个 event 跳出了`;
    console.log('data:', data);

    res.write(`\n${JSON.stringify({ monitorResults })}\n`);
    res.write(JSON.stringify({ runresult }));
    console.log('monitorResults_done');
    res.end()
    await browser.close();

}