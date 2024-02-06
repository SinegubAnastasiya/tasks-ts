// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

const numFactorial: number = 5;
let factorial: number = 1

for (let i = 0; i <= numFactorial; i++) {
    factorial *= i
}

console.log(factorial);
