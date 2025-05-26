exports.CanChangePassPage = class CanChangePassPage{

    constructor(page)
    {
        this.page = page;
        this.ChangePassBtn = '//a[@href="https://labsqajobs.qaharbor.com/account/change-password/"]';
        this.NewpassInput = '#new_password';
        this.ConfPassInput = '#confirm_password';
        this.SaveButton = "//button[normalize-space()='Save Changes']";
    }

    async PassChange(NewPass,ConfPass)
    {
        await this.page.locator(this.ChangePassBtn).click();
        await this.page.locator(this.NewpassInput).fill(NewPass);
        await this.page.locator(this.ConfPassInput).fill(ConfPass);
        await this.page.locator(this.SaveButton).click();
    }}

   