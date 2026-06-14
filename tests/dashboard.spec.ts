import { test, expect } from '@playwright/test';
import { validUser } from '../fixtures/testData';

import { LoginPage } from '../pages/LoginPage';
import { EarnMorePage } from '../pages/EarnMorePage';
import { LeaderboardPage } from '../pages/LeaderboardPage';
import { MyActivityPage } from '../pages/MyActivityPage';
import { SettingsPage } from '../pages/SettingsPage';
import { FeedbackPage } from '../pages/FeedbackPage';
import { NotificationsPage } from '../pages/NotificationsPage';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(
      validUser.username,
      validUser.password
  
    );
  }); 

test('Navigate to Earn More', async ({ page }) => {

    const earnMore = new EarnMorePage(page);

    await earnMore.openEarnMore();

    await expect(page)
        .toHaveURL(/more-ways-to-earn/i);
});

test('Navigate to Leaderboard', async ({ page }) => {

    const leaderboard = new LeaderboardPage(page);

    await leaderboard.openLeaderboard();

    await expect(page)
        .toHaveURL(/leaderboard/i);
});

test('Navigate to My Activity', async ({ page }) => {

    const activity = new MyActivityPage(page);

    await activity.openMyActivity();

    await expect(page)
        .toHaveURL(/activity/i);
});

test('Navigate to Settings', async ({ page }) => {

    const settings = new SettingsPage(page);

    await settings.openSettings();

    await expect(page)
        .toHaveURL(/settings/i);
});

test('Navigate to Feedback', async ({ page }) => {

    const feedback = new FeedbackPage(page);

    await feedback.openFeedback();

    await expect(page)
        .toHaveURL(/feedback/i);
});

test('Navigate to Notifications', async ({ page }) => {

    const notifications = new NotificationsPage(page);

    await notifications.openNotifications();

    await expect(page)
        .toHaveURL(/notifications/i);
});