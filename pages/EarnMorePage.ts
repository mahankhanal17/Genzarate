import { Page } from '@playwright/test';

export class EarnMorePage {

    constructor(private page: Page) {}

    async openEarnMore() {
        await this.page.getByRole('link', {
            name: 'Earn More'
        }).click();
    }

    async openPartnerSurvey() {
        await this.page
            .getByText('Desert Oasis Retail')
            .first()
            .click();
    }

    async startSurvey() {
        await this.page
            .getByRole('button', {
                name: /Start Innovation & Emerging/i
            })
            .click();
    }

    async completeSurvey() {

        // Question 1
        await this.page
            .getByRole('button', {
                name: 'Very Satisfied'
            })
            .click();

        await this.page
            .getByRole('button', {
                name: 'Next Question'
            })
            .click();

        // Question 2 - Star Rating
        await this.page.waitForTimeout(1000);

        await this.page.getByLabel('Rate 5 stars').click();

        await this.page
            .getByRole('button', {
                name: 'Next Question'
            })
            .click();

        // Question 3 - Text Answer
        await this.page
            .getByRole('textbox', {
                name: 'Type your answer...'
            })
            .fill('Ui/Ux');

        await this.page
            .getByRole('button', {
                name: 'Submit Survey'
            })
            .click();
    }

    async backToDashboard() {
        await this.page
            .getByRole('button', {
                name: 'Back to Dashboard'
            })
            .click();
    }
}