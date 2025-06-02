import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import { CanFindJobPage } from '../../../PageObject/PageObject_Candidate/FindJobPage';

test('Login and Successfully Search job using Jobtitle', async ({ page }) => {
    const login = new LoginPageCan(page);
    await login.gotoCanLoginPage();
    await login.loginCred('demo@yopmail.com','12345678');

    const findjob = new CanFindJobPage(page);
    await findjob.searchJobByTitle('junior');

    console.log('Sucessfully find jobs using Searchbar');
    
});

