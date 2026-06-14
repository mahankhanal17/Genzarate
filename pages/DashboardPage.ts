import { Page, expect } from '@playwright/test';

export class DashboardPage {

    constructor(private page: Page) {}

    async verifyDashboardLoaded() {
        await expect(this.page).toHaveURL(/dashboard/i);
    }
}