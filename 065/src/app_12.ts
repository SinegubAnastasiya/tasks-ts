// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

const arrNum: number[] = [1, 5, 7, 23, 15, 3]
let sum: number = 0

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum.indexOf(arrNum[i]) % 2 == 1) sum += arrNum[i]
}

console.log(sum);