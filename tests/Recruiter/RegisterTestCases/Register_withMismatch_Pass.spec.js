import {test,expect} from '@playwright/test';
import { RegisterPage } from '../../../PageObject/PageObject_Recruiter/RegisterPage';

test('Register with mismatch password', async ({ page }) => {
    const register = new RegisterPage(page);
await register.gotoRegisterPage();
await register.registerCred('Hexa0','t0654@yopmail.com','01935698985','12345678','87654321 ');

console.log("Passwords don't match.");



})