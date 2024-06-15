var puppeteer = require('puppeteer');

const fs = require('fs')

async function saveCookies(cookies) {
    fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
}

function checkIfLoggedIn() {
    try {
        if (fs.existsSync('cookies.json')) {
            const cookiesString = fs.readFileSync('cookies.json');
            const cookies = JSON.parse(cookiesString);
            // 可以添加更多的检查逻辑来确定cookies是否有效
            return cookies.length > 0;
        }
    } catch (err) {
        console.error(err);
    }
    return false;
}

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
    await page.setDefaultNavigationTimeout(60000); // 设置超时时间为 60 秒
    await page.goto('https://www.amap.com');
    // 这一步十分重要，因为大部分大型网站都会对selenium机制进行检测，例如navigator.webdriver，navigator.languages等等。
    // 这一步就是把navigator的一些属性方法等等注入到浏览器中，绕过这些检测机制。
    await page.evaluate(async () => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false })
    })
    await new Promise(resolve => setTimeout(resolve, 30000));

    console.log('登录成功.');
    // 登录成功后，保存登录状态
    // 获取cookies
    const cookies = await page.cookies();

    // 保存cookies到文件
    await saveCookies(cookies);

    await browser.close(); // 关闭浏览器

    return cookies;
}


const action = (async () => {
    if (!checkIfLoggedIn()) {
        console.log('未登录，需要手动登录。');
        await manualLoginAndSaveSession('https://www.amap.com').then(cookies => {
            console.log('登录成功，会话已保存。');
        });
    } else {
        console.log('已登录，使用现有会话。');
    }

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
    const cookiesString = fs.readFileSync('cookies.json');
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
    await page.goto('https://www.amap.com');
    // 这一步十分重要，因为大部分大型网站都会对selenium机制进行检测，例如navigator.webdriver，navigator.languages等等。
    // 这一步就是把navigator的一些属性方法等等注入到浏览器中，绕过这些检测机制。
    await page.evaluate(async () => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false })
    })
    // // 等待登录按钮加载完毕
    // await page.$('.password-login');
    // // 自动输入账号，间隔频率随机数300毫秒内
    // await page.type('input[id=fm-login-id]', '你的账号', { delay: (parseInt(Math.random() * 300)) });
    // // 自动输入密码，间隔频率随机数300毫秒内
    // await page.type('input[id=fm-login-password]', '你的密码)', { delay: (parseInt(Math.random() * 300)) })
    // // 点击登录按钮
    // await page.click('.password-login');

    // console.log('登录成功！')

    // 获取cookies
    // cookies = await page.evaluate(() => document.cookie);
    // console.log(cookies);

    // // 等待页面加载完毕
    // await page.waitForNavigation()

    // // 搜索关键字
    // var keyName = '连衣裙';
    // // 等待输入框加载完毕
    // await page.$('#q');
    // // 输入关键字
    // await page.type('input[id=q]', keyName, { delay: 300 });
    // // 点击搜索按钮
    // await page.click('.btn-search');

    // // 等待5秒后进入采集方法
    // await page.waitFor(5000);

    console.log('采集开始...');
    // gather(page);
})();