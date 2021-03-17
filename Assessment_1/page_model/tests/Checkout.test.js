import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingcartPage from '../pages/ShoppingcartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'

import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com`

test('Test 7 - Users cannot checkout without filling information form', async t => {
    await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addItem1)
    await t.click(ProductsPage.addItem2)
    await t.click(ProductsPage.shoppingcartButton)
    await t.click(ShoppingcartPage.checkoutButton)
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.errorMessage.exists).ok()
    await t.expect(CheckoutPage.errorMessage.innerText).eql('Error: First Name is required')
})

test('Test 8 - Users can continue to Overview page after filling information form', async t => {
    await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addItem1)
    await t.click(ProductsPage.addItem2)
    await t.click(ProductsPage.shoppingcartButton)
    await t.click(ShoppingcartPage.checkoutButton)
    await t
        .typeText(CheckoutPage.nameField, CREDENTIALS.USER_INFO.NAME)
        .typeText(CheckoutPage.lastnameField, CREDENTIALS.USER_INFO.LASTNAME)
        .typeText(CheckoutPage.zipcodeField, CREDENTIALS.USER_INFO.ZIPCODE)
        .click(CheckoutPage.continueButton)
    await t
        .expect(OverviewPage.pageTitle.exists).ok()
        .expect(OverviewPage.pageTitle.innerText).eql('Checkout: Overview')
    
})