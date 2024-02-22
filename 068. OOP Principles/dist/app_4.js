// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.
class Account {
    balance = 500;
    deposit(sum) {
        return this.balance + sum;
    }
    withdraw(minusSum) {
        return this.balance - minusSum;
    }
}
const account = new Account();
console.log(account.deposit(100));
console.log(account.withdraw(50));
