import { test, expect } from '@playwright/test';
import { validUser } from '../fixtures/testData';

import { LoginPage } from '../pages/LoginPage';
import { LeaderboardPage } from '../pages/LeaderboardPage';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      validUser.username,
      validUser.password
  
    );
  }); 
test('Navigate to Leaderboard', async ({ page }) => {

    const leaderboard = new LeaderboardPage(page);

    await leaderboard.openLeaderboard();

    await expect(page).toHaveURL(/leaderboard/i);
});