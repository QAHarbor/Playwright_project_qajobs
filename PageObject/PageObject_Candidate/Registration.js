// File: PageObject_Candidate/Registration.js

exports.RegisterPageCan = class RegisterPageCan {

    constructor(page) {
        this.page = page;
        this.UserName = '#username';
        this.mailaddressInput = '#email';
        this.passwordInput = '#password';
        this.confpass = '#conf-pass';
        this.RegisterButton = "(//button[normalize-space()='REGISTER NOW'])[1]";
        this.successMessage = '.message-success'; // update this selector based on your app
    }

    async gotoCanRegisterPage() {
        await this.page.goto('https://labsqajobs.qaharbor.com/candidate-registration/');
    }

    async RegisterCred(Username, mail, password, confPassword) {
        await this.page.locator(this.UserName).fill(Username);
        await this.page.locator(this.mailaddressInput).fill(mail);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.confpass).fill(confPassword);
        await this.page.locator(this.RegisterButton).click();
    }

    
};
