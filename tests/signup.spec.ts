import { test } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { TestData } from '../fixtures/TestData';

test(' TC01 Student Registration Flow', async ({ page }) => {

    const registration = new RegistrationPage(page);

    const email = TestData.randomEmail();
    const username = TestData.randomUsername();
    const password = TestData.randomPassword();

    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    await registration.navigate();

    await registration.clickJoinUs();

    await registration.enterCredentials(
        email,
        username,
        password
    );

    await registration.acceptTerms();

    await registration.continueRegistration();

    await registration.selectStudent();

    await registration.selectInstitute();

    await registration.selectBirthDate();

    await registration.clickContinueAfterBirthDate();

    await registration.selectLocationAndGender();

    await registration.selectCountry();

    await registration.completeRegistration();

    await registration.provideParentalConsent(
        email
    );

    await registration.downloadRecoveryCodes();

    await registration.confirmRecoveryCodes();

    await registration.continueWithAvatar();

    await registration.waitForApproval();

    await registration.signOut();
});