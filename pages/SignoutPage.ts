import { Page } from '@playwright/test';

export class SignoutPage {

    constructor(private page: Page) {}

    async logout() {
        await this.page.locator('span').first().click();

        await this.page.getByRole('button', {
            name: 'Sign out'
        }).click();
    }
}