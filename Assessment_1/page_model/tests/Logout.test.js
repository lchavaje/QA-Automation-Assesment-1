import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com`

test('Test 3 - Users can logout correctly', async t => {
    await LoginPage.loginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.sideMenu)
    await t.click(ProductsPage.logoutButton)
    
    await t.expect(LoginPage.botImage.exists).ok()
})