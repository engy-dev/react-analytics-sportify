export class UserActivity {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions.map(
      (session) => new Session(session.day, session.kilogram, session.calories)
    );
  }
}

export class Session {
  constructor(day, kilogram, calories) {
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }
}
