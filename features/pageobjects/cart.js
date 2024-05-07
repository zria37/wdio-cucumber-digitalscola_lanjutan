import { browser } from '@wdio/globals'
// import { browser } from '@wdio/globals'

class CartPage {
    async cart_button(){
        await browser.$('//*[@id="shopping_cart_container"]/a').click();
    }
//*[@id="shopping_cart_container"]/a/span
    async validation_cart(){
        return !(await this.browser.$('.shopping_cart_badge').isExisting());
    }

    constructor(element) {
        this.element = element;
    }

    async addToCart() {
        const addToCartButton = await this.element.$('.btn_inventory');
        await addToCartButton.click();
    }
}
export default new CartPage();