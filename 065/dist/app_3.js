// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
const dynamicArr = [];
for (let i = 0; i < Math.floor((Math.random() * 10)); i++) {
    dynamicArr.push(Math.floor(Math.random() * 100));
}
const sumRes = dynamicArr.reduce((sum, elem) => {
    return sum += elem;
}, 0);
console.log(sumRes);
