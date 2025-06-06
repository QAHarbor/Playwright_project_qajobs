import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../PageObject/PageObject_Recruiter/LoginPage';
import { PostJobPage } from '../../../PageObject/PageObject_Recruiter/PostJobPage';


test('Login Successfully',
    async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginCred('tec@yopmail.com', '12345678');
    await page.waitForTimeout(5000);

    const Postjob = new PostJobPage(page);
    await Postjob.PostJob("Software Automation Playwright_1","Seeking a Software Engineer to design, develop, and maintain software applications. Must have experience in Java and Python, with strong problem-solving skills"
        ,"2","4","Dhaka,Bangladesh","UTC+6","2024-07-05");
    
    await page.waitForTimeout(5000);
    await page.pause();
});