// Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

const str1: string = 'length'

for (let i = 0; i < str1.length; i++) {
    if (i % 2 == 1) {
        console.log(str1[i], i);
    }
}