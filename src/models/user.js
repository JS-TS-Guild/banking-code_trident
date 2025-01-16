class User {
  constructor(userName, accountsList) {
    this.userName = userName;
    this.accountsList = accountsList;
  }
  static create(userName, accountsList) {
    return new User(userName, accountsList);
  }
}

let latestUser = new User();

export default User;
