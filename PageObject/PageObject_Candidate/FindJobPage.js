exports.CanFindJobPage = class CanFindJobPage {

  constructor(page) {
      this.page = page;
      this.joblink = "//span[normalize-space()='Jobs']";
      this.VacancyCategoryBtn = "//select[@name='vacancy-category']";  
      this.VacancyTypeBtn = "//span[@class='jet-checkboxes-list__label' and text()='On Site']";
      this.VacancyStatusBtn = "//span[@class='jet-checkboxes-list__label' and text()='Full Time']";
      this.locationBtn = "//select[@name='vacancy-country']"; // Location dropdown
      this.searchInput = "//input[@name='query']"; // Search input field
  }
  
  async VacancyCategory() {
      await this.page.locator(this.joblink).click();
      await this.page.evaluate(() => {
          window.scrollTo(0, 300); 
      });
      await this.page.waitForTimeout(5000);
      await this.page.waitForSelector(this.VacancyCategoryBtn);
      await this.page.locator(this.VacancyCategoryBtn).selectOption({ label: 'Manual Tester' });
  }

  
  async VacancyType() {
      await this.page.locator(this.joblink).click();
      await this.page.evaluate(() => {
          window.scrollTo(0, 800); 
      });
      await this.page.waitForTimeout(5000);
      await this.page.locator(this.VacancyTypeBtn).click();
  }

  async VacancyStatus() {
      await this.page.locator(this.joblink).click();
      await this.page.evaluate(() => {
          window.scrollTo(0, 800);
      });
      await this.page.waitForTimeout(5000);
      await this.page.locator(this.VacancyStatusBtn).click();
  }

  async LocationSelection() {
      await this.page.locator(this.joblink).click();
      await this.page.locator(this.locationBtn).click(); // Click dropdown
      await this.page.locator(this.locationBtn).selectOption({ label: 'Bangladesh' }); // Select option
      await this.page.waitForTimeout(5000); 
  }

  async searchJobByTitle(jobTitle) {
      await this.page.locator(this.joblink).click();
      await this.page.locator(this.searchInput).click(); // Click search box
      await this.page.locator(this.searchInput).fill(jobTitle); // Enter job title
      await this.page.waitForTimeout(2000);



  }
};
