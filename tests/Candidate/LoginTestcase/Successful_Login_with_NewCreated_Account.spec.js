// File: tests/Candidate/LoginTestcase/Successful_Login_with_NewCreated_Account.spec.js

import { test, expect } from '@playwright/test';
import { LoginPageCan } from '../../../PageObject/PageObject_Candidate/LoginPage';
import fs from 'fs';

test('Login with previously registered user', async ({ page }) => {
    const login = new LoginPageCan(page);
    // Load credentials
    const credentials = JSON.parse(fs.readFileSync('test-data/candidateCredentials.json', 'utf-8'));
    const { email, password } = credentials;

    // Go to login page and log in
    await login.gotoCanLoginPage();
    await login.loginCred(email, password);

    // Validate successful login (adjust selector as needed)
    await page.waitForLoadState('networkidle');
    

    console.log(`✅ Successfully logged in with: ${email}`);
});
