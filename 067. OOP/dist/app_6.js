// Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
class Calculator {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add = () => this.a + this.b;
    subtract = () => this.a - this.b;
    multiply = () => this.a * this.b;
    divide = () => this.a / this.b;
}
const calculator = new Calculator(20, 10);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
