"use strict";
let bankAccount;
bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
console.log(typeof bankAccount);
let myself;
myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
