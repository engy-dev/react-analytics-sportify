export class User {
  constructor(id, userInfos, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}

export class UserInfos {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export class KeyData {
  constructor(calorieCount, proteinCount, carbohydrateCount, lipidCount) {
    this.calorieCount = calorieCount;
    this.proteinCount = proteinCount;
    this.carbohydrateCount = carbohydrateCount;
    this.lipidCount = lipidCount;
  }
}
