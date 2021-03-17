import { Selector } from 'testcafe'

class CheckoutPage {
    constructor(){
        this.nameField = Selector('#first-name')
        this.lastnameField = Selector('#last-name')
        this.zipcodeField = Selector('#postal-code')
        this.continueButton = Selector('input.btn_primary.cart_button')
        this.errorMessage = Selector('h3')
       

    }
}

export default new CheckoutPage()