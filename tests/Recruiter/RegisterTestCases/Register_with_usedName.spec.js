import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Register with used comapany name', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexagone-78','sd@qw.com','01935239986','12345678','12345678');

console.log('The company is already taken');

await page.pause();

})