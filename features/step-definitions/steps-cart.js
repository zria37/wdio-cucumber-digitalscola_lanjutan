// import { Given, When, Then } from '@wdio/cucumber-framework';
// import { expect, $, browser } from '@wdio/globals'
// Given(/^user is on sauce-demo Page$/, async () => {
//     await browser.url('https://www.saucedemo.com/');
// });

// When(/^user input username with "([^"]*)"$/, async (username) => {
//     await browser.$('//*[@id="user-name"]').setValue(username);
// });

// When(/^user input password with "([^"]*)"$/, async (password) => {
//     await browser.$('//*[@id="password"]').setValue(password);
// });

// When(/^user click login button$/, async () => {
//     await browser.$('//*[@id="login-button"]').click();
// });

// Then(/^user should be redirected to Dashboard page$/, async () => {
//     const body = await browser.$('body')
//     await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
//     expect(body).toHaveTextContaining("Sauce Labs Backpack")
// });

// When(/^user clicks on product to add to cart$/, async () => {
//     const btn_check_out = await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]')
//     await btn_check_out.click()
//         if (await btn_check_out.isExisting() == false) {
//             await browser.$('//*[@id="shopping_cart_container"]/a').click()
//         }else{
//             await btn_check_out.click()
//         }
// });

// Then(/^user should be redirected to Cart page$/, async () => {
//     const url_cart = "https://www.saucedemo.com/cart.html"
//     await expect(browser).toHaveUrl(url_cart)
//     await browser.pause(10000)
// });