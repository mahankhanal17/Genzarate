import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { FeedbackPage } from '../pages/FeedbackPage';
import { validUser } from '../fixtures/testData';

test('Submit Feedback Successfully', async ({ page }) => {

    const login = new LoginPage(page);
    const feedback = new FeedbackPage(page);

    await login.goto();

    await login.login(
        validUser.username,
        validUser.password
    );

    await feedback.openFeedback();

    await feedback.selectTopic();

    await feedback.enterEmail('mk@gmail.com');

    await feedback.enterMessage("Hey there I'm MK");

    await expect(
        page.getByRole('textbox', {
            name: "Tell us what's on your mind..."
        })
    ).toHaveValue("Hey there I'm MK");

    await feedback.sendFeedback();
});