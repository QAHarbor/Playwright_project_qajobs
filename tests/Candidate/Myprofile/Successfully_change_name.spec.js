import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { MyProfilePageCan } from '../../../PageObject/PageObject_Candidate/MyProfile';

test('Login and Successfully Update Name', async ({ page }) => {
  const login = new LoginPageCan(page);
  await login.gotoCanLoginPage();
  await login.loginCred('demo@yopmail.com', '12345678');
  

  const myProfile = new MyProfilePageCan(page);
  await myProfile.updateName('Shanjida', 'Islam', 'OnnoTa');



  // Optionally, add an assertion to verify the update succeeded
 
});
