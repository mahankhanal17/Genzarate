import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { EarnMorePage } from '../pages/EarnMorePage';
import { validUser } from '../fixtures/testData';

test('Complete Innovation Survey', async ({ page }) => {

    const login = new LoginPage(page);
    const earnMore = new EarnMorePage(page);

    await login.goto();

    await login.login(
        validUser.username,
        validUser.password
    );

    await earnMore.openEarnMore();

    await earnMore.openPartnerSurvey();

    /*await earnMore.startSurvey();

    await earnMore.completeSurvey();

    await earnMore.backToDashboard();

    await expect(page).toHaveURL(/dashboard/i); */
});