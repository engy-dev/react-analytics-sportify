export class UserAverageSessions {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions.map(
      (session) => new AverageSession(session.day, session.sessionLength)
    );
  }
}

export class AverageSession {
  constructor(day, sessionLength) {
    this.day = day;
    this.sessionLength = sessionLength;
  }
}
