import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { PostJobPage } from '../../../PageObject/PageObject_Recruiter/PostJobPage';


test('Login Successfully and post job keep titlw empty',
    async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com', '12345678');
    await page.waitForTimeout(5000);

    const Postjob = new PostJobPage(page);
    await Postjob.PostJob("Senior QA Engineer",
        ""
        ,"2","4","Dhaka,Bangladesh","UTC+6","2024-07-05");

        await page.waitForTimeout(5000);

        // const errorMessage = page.locator('id=__error');
        // const erroractual = await errorMessage.textContent();
        // console.log('Failed to Post Job: ', erroractual);
        

    await page.pause();
});