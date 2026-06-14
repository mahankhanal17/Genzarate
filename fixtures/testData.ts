export const validUser = {
  username: process.env.APP_USERNAME!,
  password: process.env.APP_PASSWORD!
};

export const surveyData = {
  feedback: `ThankYou_${Date.now()}`
};

export class TestData {

  static randomString(length = 6): string {
      return Math.random()
          .toString(36)
          .substring(2, 2 + length);
  }

  static randomEmail(): string {
      return `user_${Date.now()}@gmail.com`;
  }

  static randomUsername(): string {
      return `user_${this.randomString()}`;
  }

  static randomPassword(): string {
      return `Pass@${Date.now()}`;
  }
}