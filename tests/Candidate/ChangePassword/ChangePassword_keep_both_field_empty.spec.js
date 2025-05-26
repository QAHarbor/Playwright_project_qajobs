import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { CanChangePassPage } from '../../../PageObject/PageObject_Candidate/ChangePassword';

test('Change password keep both fields empty', async ({ page }) => {
    const login = new LoginPageCan(page);
    await login.gotoCanLoginPage();
    await login.loginCred('demo@yopmail.com','12345678');

    const PassChange = new CanChangePassPage(page);
    await PassChange.PassChange('','');
    
    console.log("Fill up both of the field");
 

});

