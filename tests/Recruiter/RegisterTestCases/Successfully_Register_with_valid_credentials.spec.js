import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

    test('Navigate and Check Title', async ({ page }) => {
const register = new RegisterPage(page);
await register.gotoRegisterPage();


})
test('Successfully Register with valid credentials', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexa ','te12@yopmail.com','01935239986','12345678','12345678');

console.log('Sucessfully registered as Recruiter');


})