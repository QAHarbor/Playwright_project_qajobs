import { test, expect } from '@playwright/test';

import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { CanChangePassPage } from '../../../PageObject/PageObject_Candidate/ChangePassword';

test('Change password keep confirm password field empty', async ({ page }) => {
    const login = new LoginPageCan(page);
    await login.gotoCanLoginPage();
    await login.loginCred('demo@yopmail.com','12345678');

    const PassChange = new CanChangePassPage(page);
    await PassChange.PassChange('12345678','');
    
    console.log("Fill up confirm password");

});

