import {test,expect} from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';


test('Login with mail field empty', async ({ page }) => {
    const login = new LoginPageCan(page);
await login.gotoCanLoginPage();
await login.loginCred('','12345678');

//To display the error for mail address
console.log("Enter valid email");


})