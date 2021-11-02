/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) === true && balance > 0) {
    var anAccount = new Account(this.nextAccountNumber, holder);
    anAccount.deposit(balance);
    this.accounts.push(anAccount);
    this.nextAccountNumber++;
    return anAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  if (this.accounts.length !== 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      totalAssets += this.accounts[i].getBalance();
    }
    return totalAssets;
  } else return 0;

};
