import { Page, expect } from '@playwright/test';
export class SettingsPage {

    constructor(private page: Page) {}

    settingsLink = this.page.getByRole('link', {
        name: 'Settings'
    });

    async openSettings() {
        await this.settingsLink.click();
    }
}