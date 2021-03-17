import { Selector } from 'testcafe'

class OverviewPage {
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.item1Added = Selector('.inventory_item_name').nth(0)
        this.item2Added = Selector('.inventory_item_name').nth(1)
        this.item3Added = Selector('.inventory_item_name').nth(2)
        this.item4Added = Selector('.inventory_item_name').nth(3)
        this.item5Added = Selector('.inventory_item_namey').nth(4)
        this.item6Added = Selector('.inventory_item_name').nth(5)
        this.itemQuantity = Selector('.summary_quantity')
        this.finishButton = Selector('.btn_action.cart_button')
       

    }

    async itemsOverview() {
        return await this.itemQuantity.count;
    }
}

export default new OverviewPage()