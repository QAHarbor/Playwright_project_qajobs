
import {test,expect} from '@playwright/test';
import { RegisterPageCan } from '../../../PageObject/PageObject_Candidate/Registration';


test('Successfully login with valid credentials', async ({ page }) => {
    const Register = new RegisterPageCan(page);

await Register.gotoCanRegisterPage();
await Register.RegisterCred('Maria','mariail.com','123','12345678');

const errorMessage = page.getByText('Please use a different');
await expect(errorMessage).toBeVisible();

console.log(errorMessage);

});


