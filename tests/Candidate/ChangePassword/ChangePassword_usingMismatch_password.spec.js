import { test, expect } from '@playwright/test';

import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { CanChangePassPage } from '../../../PageObject/PageObject_Candidate/ChangePassword';

test('Change password with mismatch password', async ({ page }) => {
    const login = new LoginPageCan(page);
await login.gotoCanLoginPage();
await login.loginCred('demo@yopmail.com','12345678');

    const PassChange = new CanChangePassPage(page);
    await PassChange.PassChange('12345678','7654321');
    
    console.log("Both passwords are not same");
   
    

});

