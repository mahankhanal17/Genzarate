import { Page } from '@playwright/test';

export class FeedbackPage {

    constructor(private page: Page) {}

    async openFeedback() {

        await this.page
            .getByRole('link', {
                name: 'Feedback'
            })
            .click();
    }

    async selectTopic() {

        await this.page
            .getByRole('button', {
                name: 'Select a topic'
            })
            .click();

        await this.page
            .getByRole('menuitem', {
                name: 'General enquiry'
            })
            .click();
    }

    async enterEmail(email: string) {

        await this.page
            .getByRole('textbox', {
                name: 'name@example.com'
            })
            .fill(email);
    }

    async enterMessage(message: string) {

        await this.page
            .getByRole('textbox', {
                name: "Tell us what's on your mind..."
            })
            .fill(message);
    }

    async sendFeedback() {

        await this.page
            .getByRole('button', {
                name: 'Send feedback'
            })
            .click();
    }
}