import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Register with invalid mail', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hex_34','12@.com','01935698985','98765432','98765432');


console.log('Please enter a valid email');

await page.pause();
})