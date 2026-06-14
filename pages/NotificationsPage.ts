import { Page, expect } from '@playwright/test';

export class NotificationsPage {

    constructor(private page: Page) {}

    notificationsLink = this.page.getByRole('link', {
        name: 'Notifications'
    });

    async openNotifications() {
        await this.notificationsLink.click();
    }
}