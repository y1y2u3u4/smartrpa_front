var puppeteer = require('puppeteer');

const fs = require('fs')
const path = require('path');

async function saveCookies(cookies) {
    const path = require('path');
    const cookiesPath = path.join(process.cwd(), 'pages', 'api', 'cookies.json');
    fs.writeFileSync(cookiesPath, JSON.stringify(cookies, null, 2));
}

// async function saveCookies(cookies) {
//     localStorage.setItem('cookies', JSON.stringify(cookies));
// }

async function getCookies() {
    const cookies = localStorage.getItem('cookies');
    return cookies ? JSON.parse(cookies) : {};
}

// function checkIfLoggedIn() {
//     try {
//         if (fs.existsSync('cookies.json')) {
//             const cookiesString = fs.readFileSync('cookies.json');
//             const cookies = JSON.parse(cookiesString);
//             // 可以添加更多的检查逻辑来确定cookies是否有效
//             return cookies.length > 0;
//         }
//     } catch (err) {
//         console.error(err);
//     }
//     return false;
// }

async function manualLoginAndSaveSession(url) {

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
    // 新建页面
    var page = await browser.newPage();
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
    // 设定浏览器UserAgent
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');
    // 跳转淘宝登录页
    await page.setDefaultNavigationTimeout(180000); // 设置超时时间为 60 秒
    // await page.goto('https://www.amap.com');
    await page.goto('https://www.dianping.com/');
    
    // 这一步十分重要，因为大部分大型网站都会对selenium机制进行检测，例如navigator.webdriver，navigator.languages等等。
    // 这一步就是把navigator的一些属性方法等等注入到浏览器中，绕过这些检测机制。
    await page.evaluate(async () => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false })
    })

    await Promise.race([
        page.waitForSelector('div.user-container', { timeout: 10 * 60 * 1000 }),
        page.waitForSelector('.userinfo-container .username', { timeout: 10 * 60 * 1000 }),
        page.waitForSelector('.userinfo-container', { timeout: 10 * 60 * 1000 })
    ]);

    console.log('登录成功.');
    // 登录成功后，保存登录状态
    // 获取cookies
    const cookies = await page.cookies();
    // 保存cookies到文件
    await saveCookies(cookies);
    // await page.evaluate((cookies) => {
    //     localStorage.setItem('cookies', JSON.stringify(cookies));
    // }, cookies); // 将 cookies 作为参数传递给 page.evaluate()

    await new Promise(resolve => setTimeout(resolve, 2000));
    await browser.close(); // 关闭浏览器

    return cookies;
}


export default async function handler(req, res) {
    await manualLoginAndSaveSession('https://www.dianping.com/').then(cookies => {
        console.log('登录成功，会话已保存。');
    });

    // 定义浏览器无头模式、分辨率以及关闭沙盒模式等等。
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
    // 新建页面
    var page = await browser.newPage();
    // 从文件中读取 cookies
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
    // 设定浏览器UserAgent
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');
    // 跳转淘宝登录页
    await page.goto('https://www.dianping.com/', { timeout: 60000 });
    await page.evaluate(async () => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false })
    })
    console.log('采集开始...');
    res.json({ message: 'cookies save successfully' });
};
