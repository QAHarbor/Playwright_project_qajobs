import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Successfully Register with valid credentials', async ({ page }) => {

    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexa-12','te12@yopmail.com','01935239986','12345678','12345678');



console.log('The email address already taken');

await page.pause();
});