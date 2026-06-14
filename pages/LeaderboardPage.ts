import { Page, expect } from '@playwright/test';

export class LeaderboardPage {

    constructor(private page: Page) {}

    leaderboardLink = this.page
        .getByRole('navigation')
        .getByRole('link', {
            name: 'Leaderboard'
        });

    async openLeaderboard() {
        await this.leaderboardLink.click();
    }
}