class Bank {
  constructor(bankName, negativeBalanceAllowed) {
    this.bankName = bankName;
    this.negativeBalanceAllowed = negativeBalanceAllowed;
  }

  static create(bankName, negativeBalanceAllowed) {
    return new Bank(bankName, negativeBalanceAllowed);
  }
  getId() {
    return "Id of the back to be returned here";
  }
  createAccount(balance) {
    return {
      balance: balance,
      getId() {
        return "Id of the backAccount to be returned here";
      },
    };
  }
}

let latestBank = Bank.create("Baroda", false);

export default Bank;
