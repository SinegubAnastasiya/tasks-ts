// Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)
const bookObj = [
    { id: 1, author: 'Толстой', title: 'Война и мир', price: 55 },
    { id: 2, author: 'Булгаков', title: 'Мастер и Маргарита', price: 51 },
    { id: 3, author: 'Оруэлл', title: '1984', price: 45 }
];
const resPrice = bookObj.filter((el) => {
    return el.price > 50;
});
console.log(resPrice);
