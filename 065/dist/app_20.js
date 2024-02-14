// Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)
const booksObj = [
    { id: 1, author: 'Толстой', title: 'Война и мир', count: 565 },
    { id: 2, author: 'Булгаков', title: 'Мастер и Маргарита', count: 347 },
    { id: 3, author: 'Оруэлл', title: '1984', count: 245 }
];
let pages = 0;
const resCount = booksObj.filter((el) => {
    if (el.count > pages)
        return pages = el.count;
});
console.log(resCount);
