import {test,expect} from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';


test('Login with mail and password empty', async ({ page }) => {
    const login = new LoginPageCan(page);
await login.gotoCanLoginPage();
await login.loginCred('','');

//To display the error for mail address
console.log("Please enter mail and password");


})