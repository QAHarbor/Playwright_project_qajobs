class MyProfilePageCan {
    constructor(page) {
        this.page = page;
        
        this.contactEditBtn = "(//span[@class='jet-button__icon jet-elements-icon'])[5]";
        this.CandidateEmail = '#_candidate-email';
        this.CandidatePhone = '#_candidate_phone';
        this.PortfolioInput = '#_candidate-portfolio-link';
        this.UpdateBtn = "(//button[@type='submit'][normalize-space()='Update'])[3]";

        // candidate name
        this.UpdateNameBtn = "(//span[@class='jet-button__icon jet-elements-icon'])[1]";
        this.FirstNameInput = '#_candidate-first-name';
        this.lastNameInput = '#_candidate-last-name';
        this.DisplayNameInput = '#_candidate-display-name';
        this.UpdateSubmitBtn = "(//button[@type='submit'][normalize-space()='Update'])[2]";

        // Resume download
        this.DownloadBtn = "//span[@class='jet-download__label']";

        // update experience
        this.ExpUpdateBtn = "(//*[name()='circle'])[4]";
        this.ExpInput = "(//input[@id='_candidate-experience'])[1]";
        this.SaveBtn = "(//button[normalize-space()='Save'])[1]";
    }

    async updateCanContact(email, PhoneNumber) {
        
        await this.page.locator(this.contactEditBtn).waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.contactEditBtn).click({ force: true });
        await this.page.locator(this.CandidateEmail).fill(email, { force: true });

        await this.page.locator(this.CandidatePhone).click({ force: true });
        await this.page.locator(this.CandidatePhone).fill(PhoneNumber);

        await this.page.locator(this.UpdateBtn).click();
    }

    async updateName(FirstName, LastName, DisplayName) {
       await this.page.locator(this.UpdateNameBtn).waitFor({ state: 'visible' });
        await this.page.locator(this.UpdateNameBtn).click();
        await this.page.locator(this.FirstNameInput).fill(FirstName);
        await this.page.locator(this.lastNameInput).fill(LastName);
        await this.page.locator(this.DisplayNameInput).fill(DisplayName);
        await this.page.locator(this.UpdateSubmitBtn).click();
    }

    async DownloadResume() {
        await this.page.locator(this.DownloadBtn).click();
    }

    async updateExp(Exp) {
        await this.page.locator(this.ExpUpdateBtn).waitFor({ state: 'visible' });
        await this.page.locator(this.ExpUpdateBtn).click();
        await this.page.locator(this.ExpInput).fill(Exp);
        await this.page.locator(this.SaveBtn).click();
    }
}

export { MyProfilePageCan };
