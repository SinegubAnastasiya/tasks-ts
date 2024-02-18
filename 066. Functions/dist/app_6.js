// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов
const productObj6 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
// function avgPrice(productObj6: Products[]): number {
//     let avg = 0 
//     for (let i = 0; i < productObj6.length; i++) {
//         avg += productObj6[i].price
//     }
//     return avg / productObj6.length
// }
const avgPrice = (productObj6) => productObj6.reduce((sum, el) => sum + el.price, 0) / productObj6.length;
const res6 = avgPrice(productObj6);
console.log(res6);
