// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

const numberArray: number[] = [1, 5, 7, 9, 12, 8]

const res = numberArray.reduce((sum, elem) => {
    if (elem % 2 == 1) return sum += elem
    else return sum
}, 0)

console.log(res);