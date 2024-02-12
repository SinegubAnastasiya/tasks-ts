// Создайте массив чисел и найдите наибольшую разницу между двумя элементами
const arrayNums = [15, 20, 5, 98, 32, 47, 132, 63];
let razn = 0;
let min = arrayNums[0];
let max = 0;
for (let i = 0; i < arrayNums.length; i++) {
    if (arrayNums[i] > max)
        max = arrayNums[i];
    else if (arrayNums[i] < min)
        min = arrayNums[i];
}
console.log(max - min);
