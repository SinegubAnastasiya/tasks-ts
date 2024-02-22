// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

interface iAccount {
    balance: number;
    deposit(sum: number): number;
    withdraw(minusSum: number): number
}

class Account implements iAccount{
    balance: number = 500

    deposit(sum: number): number {
        return this.balance + sum
    }

    withdraw(minusSum: number): number {
        return this.balance - minusSum
    }
}

const account = new Account()
console.log(account.deposit(100));
console.log(account.withdraw(50));
