import { Page, expect, Download } from '@playwright/test';

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

    async openSecurityOptions() {

        // Use the exact button recorder identified
        await this.page
            .getByRole('button')
            .nth(3)
            .click();
    }

    async resendVerification() {

        await this.page
            .getByText('Resend', {
                exact: true
            })
            .click();
    }

    async resetRecoveryCodes() {

        await this.page
            .getByText(/Reset.*re-download.*recovery/i)
            .first()
            .click();

        await this.page
            .getByRole('button', {
                name: 'Reset'
            })
            .click();
    }

    async downloadRecoveryCodes(): Promise<Download> {

        const downloadPromise =
            this.page.waitForEvent('download');

        await this.page
            .getByRole('button', {
                name: 'Download recovery codes'
            })
            .click();

        return await downloadPromise;
    }

    async closeRecoveryModal() {

        await this.page
            .getByRole('button', {
                name: 'Done'
            })
            .click();
    }
}