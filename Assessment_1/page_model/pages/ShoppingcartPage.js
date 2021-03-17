import { Selector } from 'testcafe'

class ShoppingcartPage {
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.item1Added = Selector('.inventory_item_name').nth(0)
        this.item2Added = Selector('.inventory_item_name').nth(1)
        this.item3Added = Selector('.inventory_item_name').nth(2)
        this.item4Added = Selector('.inventory_item_name').nth(3)
        this.itemQuantity = Selector('.cart_quantity')

    }

    async itemsTotalinCart() {
        return await this.itemQuantity.count;
    }
}    
export default new ShoppingcartPage()