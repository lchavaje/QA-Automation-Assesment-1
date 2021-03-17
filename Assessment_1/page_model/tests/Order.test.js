import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingcartPage from '../pages/ShoppingcartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'

import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com`

test('Test 9 - Items added to cart match the items in Overview page ', async t => {
    await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addItem1)
    await t.click(ProductsPage.addItem2)
    await t.click(ProductsPage.shoppingcartButton)
    const cartItems = await ShoppingcartPage.itemsTotalinCart()
    await t.click(ShoppingcartPage.checkoutButton)
    await t
        .typeText(CheckoutPage.nameField, CREDENTIALS.USER_INFO.NAME)
        .typeText(CheckoutPage.lastnameField, CREDENTIALS.USER_INFO.LASTNAME)
        .typeText(CheckoutPage.zipcodeField, CREDENTIALS.USER_INFO.ZIPCODE)
        .click(CheckoutPage.continueButton)
    await t
        .expect(OverviewPage.item1Added.exists).ok()
        .expect(OverviewPage.item2Added.exists).ok()
    const totalItems = await OverviewPage.itemsOverview()
    await t.expect(totalItems).eql(cartItems)
    
})

test('Test 10 - User can complete a purchase', async t => {
await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
await t
    .click(ProductsPage.addItem4)
    .click(ProductsPage.addItem5)
    .click(ProductsPage.addItem6)
    .click(ProductsPage.shoppingcartButton)

await t.click(ShoppingcartPage.checkoutButton)
await t
    .typeText(CheckoutPage.nameField, CREDENTIALS.USER_INFO.NAME)
    .typeText(CheckoutPage.lastnameField, CREDENTIALS.USER_INFO.LASTNAME)
    .typeText(CheckoutPage.zipcodeField, CREDENTIALS.USER_INFO.ZIPCODE)
    .click(CheckoutPage.continueButton)
await t
    .expect(OverviewPage.finishButton.exists).ok()
    .click(OverviewPage.finishButton)

await t
    .expect(FinishPage.pageTitle.exists).ok()
    .expect(FinishPage.confirmationMessage.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})