const { Builder, By, until } = require('selenium-webdriver');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const assert = require('assert');

describe('Sortir Produk Z to A', function() {
    let driver;

    it ('Coba fitur sortir produk saucedemo', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();

    console.log('Buka halaman saucedemo');
    await driver.get('https://www.saucedemo.com/');
    

    //  input username dan password
    let input_username = await driver.findElement(By.xpath('//*[@id="user-name"]'));
    let input_password = await driver.findElement(By.xpath('//*[@id="password"]'));
    let button_login = await driver.findElement(By.xpath('//*[@id="login-button"]'));

    console.log('Masukkan username dan password');
    await input_username.sendKeys('standard_user');
    await sleep(1000);
    await input_password.sendKeys('secret_sauce');
    await sleep(1000);


    // klik button login
    await button_login.click();
    console.log('Berhasil login')
    await sleep(3000);

    //validasi URL setelah login    
    let urlSekarang = await driver.getCurrentUrl();
    assert.strictEqual(urlSekarang, 'https://www.saucedemo.com/inventory.html', 'Tidak masuk ke halaman inventory setelah login!');
    console.log('Berhasil masuk ke halaman inventory.');
    
    // sortir produk Z to A
    let dropdown = await driver.findElement(By.className('product_sort_container'));
    await dropdown.click();
    await sleep(1000);

    let pilih_ZA = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'));
    await pilih_ZA.click();
    await sleep(2000);
    await driver.quit();
  
    });
});