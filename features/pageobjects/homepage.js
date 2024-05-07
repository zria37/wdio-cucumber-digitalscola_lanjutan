import { $ } from '@wdio/globals'
// import { browser } from '@wdio/globals'
import cart from '../pageobjects/cart.js'

class homepage {
    async utama(){
        const body = await browser.$('body')
        expect(body).toHaveTextContaining("Sauce Labs Backpack")
    }

    async getProductByName(productName) {
        const products = await $$('.inventory_item');
        for (const productElement of products) {
            const nameElement = await productElement.$('.inventory_item_name');
            const name = await nameElement.getText();
            if (name === productName) {
                return new cart(productElement);
            }
        }
        throw new Error(`Product "${productName}" not found on the dashboard page.`);
    }    
}
export default new homepage();