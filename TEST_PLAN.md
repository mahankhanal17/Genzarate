Test Plan — Genzarate Web Application

1. Introduction

This test plan covers end-to-end automated testing of the Genzarate web application. The goal is to verify that all major user flows work correctly — from registration and login to survey completion and feedback submission.


2. Scope

In scope


User registration (student flow)
User login and logout
Dashboard navigation (Earn More, Leaderboard, My Activity, Settings, Feedback, Notifications)
Survey completion
Feedback submission


Out of scope


API / backend testing
Performance testing
Mobile testing
Admin panel
Cross-browser testing (only Chromium covered)



3. Test Environment

FieldDetailApplication URLhttps://testgenzarate.aigeeks.devBrowserChromiumOperating SystemWindowsCredentialsStored in .env file (never committed to GitHub)


4. Tools Used

ToolPurposePlaywrightBrowser automation and test runnerTypeScriptTest authoring languagedotenvManaging environment variablesHTML ReporterViewing test resultsVS CodeCode editorGitHubVersion control


5. Test Approach


Page Object Model (POM) — each page has its own class in the pages/ folder containing locators and actions
Role-based locators — using getByRole() and getByLabel() for reliable element selection
Random test data — registration tests use TestData.randomEmail(), randomUsername(), randomPassword() to generate unique data per run
Environment variables — credentials and base URL are loaded from .env so nothing sensitive is hardcoded
beforeEach hooks — login is handled in beforeEach for test suites that require authentication



6. Test Cases


TC-01 — Valid Login

File: tests/login.spec.ts

Steps:


Go to /login
Enter valid username and password
Click Sign In


Expected: Redirected to /dashboard


TC-02 — Logout

File: tests/SignoutPage.spec.ts

Steps:


Login with valid credentials
Click profile avatar
Click Sign out


Expected: Redirected to /login


TC-03 — Student Registration

File: tests/signup.spec.ts

Steps:


Go to /account-type
Click Join us
Enter random email, username, password
Accept terms and click Continue
Select Student
Select institute — ABC Private School
Select birth date — January 2009
Click Continue
Select location — Dubai, gender — Male
Select country — Nepal
Click Complete Registration
Provide parental consent email
Download recovery codes and confirm
Continue with avatar
Wait for guardian approval
Sign out


Expected: Registration completes, user signed out successfully


TC-04 — Navigate to Earn More

File: tests/dashboard.spec.ts

Steps:


Login
Click Earn More nav link


Expected: URL matches /more-ways-to-earn


TC-05 — Navigate to Leaderboard

File: tests/dashboard.spec.ts

Steps:


Login
Click Leaderboard nav link


Expected: URL matches /leaderboard


TC-06 — Navigate to My Activity

File: tests/dashboard.spec.ts

Steps:


Login
Click My Activity nav link


Expected: URL matches /activity


TC-07 — Navigate to Settings

File: tests/dashboard.spec.ts

Steps:


Login
Click Settings nav link


Expected: URL matches /settings


TC-08 — Navigate to Feedback

File: tests/dashboard.spec.ts

Steps:


Login
Click Feedback nav link


Expected: URL matches /feedback


TC-09 — Navigate to Notifications

File: tests/dashboard.spec.ts

Steps:


Login
Click Notifications nav link


Expected: URL matches /notifications


TC-10 — Complete Innovation Survey

File: tests/earnMore.spec.ts

Steps:


Login
Click Earn More
Click Desert Oasis Retail
Click Start Innovation & Emerging
Select Very Satisfied then Next Question
Rate 5 stars then Next Question
Type text answer then Submit Survey
Click Back to Dashboard


Expected: URL matches /dashboard


TC-11 — Submit Feedback

File: tests/feedback.spec.ts

Steps:


Login
Click Feedback nav link
Select topic — General enquiry
Enter email and message
Click Send feedback


Expected: Message field has correct value, feedback submitted


TC-12 — Leaderboard Page

File: tests/leaderboard.spec.ts

Steps:


Login
Click Leaderboard nav link


Expected: URL matches /leaderboard


TC-13 — My Activity Page

File: tests/myActivity.spec.ts

Steps:


Login
Click My Activity nav link


Expected: URL matches /activity


TC-14 — Notifications Page

File: tests/notifications.spec.ts

Steps:


Login
Click Notifications nav link


Expected: URL matches /notifications


TC-15 — Settings Page

File: tests/settings.spec.ts

Steps:


Login
Click Settings nav link


Expected: URL matches /settings


7. Test Summary

ModuleTest CasesAuthenticationTC-01, TC-02RegistrationTC-03Dashboard NavigationTC-04 to TC-09Earn More / SurveyTC-10FeedbackTC-11Individual PagesTC-12 to TC-15Total15


8. Entry Criteria


Application is deployed and accessible at the test URL
Valid credentials are available in .env
All dependencies installed (npm install)
Playwright browsers installed (npx playwright install)



9. Exit Criteria


All 15 test cases pass with 0 failures
HTML report reviewed after the run
No test.only or test.skip left in any spec file



10. Risks

RiskImpactMitigationSurvey already completed by test accountTC-10 fails on re-runReset survey state or use a fresh accountWeak locator in logoutTC-02 breaks on UI changeReplace with role-based locatorHardcoded wait in surveyTC-10 flaky on slow networkReplace with element visibility wait.env accidentally committedSecurity riskEnsure .env is in .gitignore