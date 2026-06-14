import { Page } from '@playwright/test';

export class SettingsPage {

    constructor(private page: Page) {}

    async openSettings() {
        await this.page.getByRole('link', {
            name: 'Settings'
        }).click();
    }

    async viewProfile() {
        await this.page
            .getByText('View Profile')
            .click();
    }

    async openRecoveryCodesMenu() {

        await this.page
            .getByRole('button')
            .nth(3)
            .click();
    }

    async resetRecoveryCodes() {

        await this.page
            .getByText(/Reset/i)
            .first()
            .click();

        await this.page
            .getByRole('button', {
                name: 'Reset'
            })
            .click();
    }

    async downloadRecoveryCodes() {

        const downloadPromise =
            this.page.waitForEvent('download');

        await this.page
            .getByRole('button', {
                name: 'Download recovery codes'
            })
            .click();

        return await downloadPromise;
    }

    async closeRecoveryCodesModal() {

        await this.page
            .getByRole('button', {
                name: 'Done'
            })
            .click();
    }
}