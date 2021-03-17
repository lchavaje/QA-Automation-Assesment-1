import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingcartPage from '../pages/ShoppingcartPage'

import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com`

test('Test 4 - Users can get to the Shopping Cart page', async t => {
    await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.shoppingcartButton)
    await t.expect(ShoppingcartPage.pageTitle.exists).ok()
})

test('Test 5 - Users can add an item to the shopping cart', async t => {
    await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addItem1)
    await t.click(ProductsPage.shoppingcartButton)
    await t.expect(ShoppingcartPage.item1Added.exists).ok()
})

test('Test 6 - Users can add multiple items to the shopping cart', async t => {
    await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addItem2)
    await t.click(ProductsPage.addItem3)
    await t.click(ProductsPage.addItem4)
    await t.expect(ShoppingcartPage.item2Added.exists).ok()
    await t.expect(ShoppingcartPage.item3Added.exists).ok()
    await t.expect(ShoppingcartPage.item4Added.exists).ok()
})

