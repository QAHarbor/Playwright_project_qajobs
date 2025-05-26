import {test,expect} from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';


test('Login with valid mail and invalid password', async ({ page }) => {
    const login = new LoginPageCan(page);
await login.gotoCanLoginPage();
await login.loginCred('demo@yopmail.com','123453456');

//To display the error for mail address

console.log("Enter valid password");


})