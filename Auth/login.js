const { Builder, By, Key } = require('selenium-webdriver');

async function login() {
    let driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://handle.dev.jimu.io/auth/signin');
        await driver.sleep(1000);
        await driver.findElement(By.id('login-username-input')).sendKeys('jm2019');
        await driver.findElement(By.id('login-password-input')).sendKeys('12345678', Key.RETURN);
        // await driver.findElement(By.id('login_submit_btn')).click();
        await driver.sleep(1000)
    } finally {
        console.log('登录成功');
        await driver.quit();

    }
}

module.exports = login()