export class UserPerformance {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data.map(
      (entry) => new PerformanceData(entry.value, entry.kind)
    );
  }
}

export class PerformanceData {
  constructor(value, kind) {
    this.value = value;
    this.kind = kind;
  }
}
