import { Selector } from 'testcafe'

class FinishPage {
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.thankyouMessage = Selector('h2')
        this.confirmationMessage = Selector('.complete-text')
        this.ponyImage = Selector('img.pony_express')
     
       

    }
}

export default new FinishPage()