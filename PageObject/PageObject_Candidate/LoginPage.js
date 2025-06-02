
exports.LoginPageCan = class LoginPageCan {
    constructor(page) {
        this.page = page;
        this.loginLink = "(//span[@class='jet-auth-links__item-text'])[1]";
        this.mailAddressInput = '#email';
        this.passwordInput = '#password';
        this.loginButton = "//button[@type='submit' and text()='Login']";
    }

    async gotoCanLoginPage() {
        await this.page.goto('https://labsqajobs.qaharbor.com/');
        
    }

    async loginCred(email, password) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.mailAddressInput).fill(email);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
};
