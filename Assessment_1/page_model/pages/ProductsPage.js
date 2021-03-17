import { Selector } from 'testcafe'

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.sideMenu = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shoppingcartButton = Selector('#shopping_cart_container') 
        this.addItem1= Selector('.btn_inventory').nth(0)
        this.addItem2= Selector('.btn_inventory').nth(1)
        this.addItem3= Selector('.btn_inventory').nth(2) 
        this.addItem4= Selector('.btn_inventory').nth(3)
        this.addItem5= Selector('.btn_inventory').nth(4)
        this.addItem6= Selector('.btn_inventory').nth(5)

    }
}

export default new ProductsPage()