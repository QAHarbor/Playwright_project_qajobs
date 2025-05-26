import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { MyProfilePageCan } from '../../../PageObject/PageObject_Candidate/MyProfile';

test('Login and Successfully Update Contact Info', async ({ page }) => {
    const login = new LoginPageCan(page);
    await login.gotoCanLoginPage();
    await login.loginCred('demo@yopmail.com', '12345678');
    await page.waitForTimeout(500);

    const Upcontact = new MyProfilePageCan(page);
    await Upcontact.updateCanContact('demo@yopmail.com', '0133345678');


    console.log('Successfully Updated contact information');
});
