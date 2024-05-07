import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import login_page from '../pageobjects/login.js'
import home from '../pageobjects/HomePage .js'
import cart from '../pageobjects/cart.js'

Given(/^user is on sauce-demo Page$/, async () => {
    await browser.url('https://www.saucedemo.com/');
});

When(/^user login using username "(.*)" and password "(.*)"$/, async (username, password) => {
    await login_page.login(username, password);
});

Then('user should be redirected to Dashboard page', async () => {
    await home.utama();
})

When('user click cart buttons', async () => {
  await cart.cart_button();
})

Then('user should see empty Cart', async () => {
    cart.validation_cart()
})

When(/^user add "([^"]*)" to cart$/, async (product) => {
    const product = await home.getProductByName(product);
    await product.addToCart();
});

When('user click add to cart buttons', async () => {
    await browser.$('//*[@id="shopping_cart_containerssss"]/a').click();
  })