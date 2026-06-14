import { Page, expect } from '@playwright/test';

export class MyActivityPage {

    constructor(private page: Page) {}

    myActivityLink = this.page.getByRole('link', {
        name: 'My Activity'
    });

    async openMyActivity() {
        await this.myActivityLink.click();
    }
}