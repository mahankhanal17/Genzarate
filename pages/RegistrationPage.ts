import { Page, expect } from '@playwright/test';

export class RegistrationPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/account-type');
    }

    async clickJoinUs() {
        await this.page
            .getByRole('button', { name: 'Join us' })
            .click();
    }

    async enterCredentials(
        email: string,
        username: string,
        password: string
    ) {

        await this.page
            .getByRole('textbox', { name: 'you@example.com' })
            .fill(email);

        await this.page
            .getByRole('textbox', { name: 'Enter a username' })
            .fill(username);

        await this.page
            .getByRole('textbox', { name: 'Enter a password' })
            .fill(password);

        await this.page
            .getByRole('textbox', {
                name: 'Enter the password again'
            })
            .fill(password);
    }

    async acceptTerms() {

        const checkbox = this.page.locator(
            '.flex-shrink-0'
        );

        await checkbox.check();
    }

    async continueRegistration() {

        const continueBtn =
            this.page.getByRole('button', {
                name: 'Continue'
            });

        await expect(continueBtn).toBeEnabled();

        await continueBtn.click();
    }

    async selectStudent() {

        await this.page
            .getByRole('button', {
                name: 'Student'
            })
            .click();
    }

    async selectInstitute() {

        await this.page
            .getByRole('textbox', {
                name: 'Search Institute...'
            })
            .click();

        await this.page
            .getByRole('button', {
                name: 'ABC Private School'
            })
            .click();
    }

    async selectBirthDate() {

        await this.page
            .getByRole('button', {
                name: 'Month'
            })
            .click();

        await this.page
            .getByRole('button', {
                name: 'January'
            })
            .click();

        await this.page
            .getByRole('button', {
                name: 'Year'
            })
            .click();

        await this.page
            .getByRole('button', {
                name: '2009'
            })
            .click();
    }

    async clickContinueAfterBirthDate() {

        await this.page
            .getByRole('button', {
                name: 'Continue'
            })
            .click();
    }

    async selectLocationAndGender() {

        await this.page
            .getByRole('button', {
                name: 'Dubai'
            })
            .click();

        await this.page
            .getByRole('button', {
                name: 'Male',
                exact: true
            })
            .click();
    }

    async selectCountry() {

        await this.page
            .getByRole('textbox', {
                name: 'Search country...'
            })
            .fill('Nep');

        await this.page
            .getByRole('button', {
                name: 'Nepal'
            })
            .click();
    }

    async completeRegistration() {

        await this.page
            .getByRole('button', {
                name: 'Complete Registration'
            })
            .click();
    }

    async provideParentalConsent(
        parentEmail: string
    ) {

        await this.page
            .getByRole('button', {
                name: /parental consent/i
            })
            .click();

        await this.page
            .getByRole('textbox', {
                name: 'parent@example.com'
            })
            .fill(parentEmail);

        await this.page
            .getByRole('button', {
                name: 'Send Verification Link'
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

        await downloadPromise;
    }

    async confirmRecoveryCodes() {

        await this.page
            .getByRole('button', {
                name: /saved recovery codes/i
            })
            .click();
    }

    async continueWithAvatar() {

        await this.page
            .getByRole('button', {
                name: 'Continue with this avatar'
            })
            .click();
    }

    async waitForApproval() {

        await this.page
            .getByRole('button', {
                name: 'Wait for guardian approval'
            })
            .click();
    }

    async signOut() {

        await this.page
            .getByRole('button', {
                name: 'Sign out'
            })
            .click();
    }
}