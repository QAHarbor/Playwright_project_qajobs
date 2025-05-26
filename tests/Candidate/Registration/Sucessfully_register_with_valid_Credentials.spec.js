// File: tests/candidate/register.spec.js

import { test, expect } from '@playwright/test';
import { RegisterPageCan } from '../../../PageObject/PageObject_Candidate/Registration';
import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

test('Register a new candidate with unique data', async ({ page }) => {
    const Register = new RegisterPageCan(page);

    // Generate unique test data
    const fakeName = faker.person.fullName();
    const fakeEmail = faker.internet.email({ firstName: fakeName });
    const fakePassword = faker.internet.password({ length: 12 });

    // Go to registration page and register
    await Register.gotoCanRegisterPage();
    await Register.RegisterCred(fakeName, fakeEmail, fakePassword, fakePassword);

    // Save credentials to file
    const dataPath = path.resolve('test-data');
    if (!fs.existsSync(dataPath)) {
        fs.mkdirSync(dataPath);
    }
    fs.writeFileSync(
        path.join(dataPath, 'candidateCredentials.json'),
        JSON.stringify({ email: fakeEmail, password: fakePassword }, null, 2)
    );

    console.log(`✅ Registered: ${fakeName} | ${fakeEmail}`);
});
