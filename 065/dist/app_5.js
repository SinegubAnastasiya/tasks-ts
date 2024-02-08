// Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.
const array = [6, 9, 12, 15, 21];
const resNum = array.filter((elem) => {
    if (elem % 3 == 0 && elem % 2 == 1)
        return elem;
});
console.log(resNum);
