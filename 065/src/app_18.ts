// Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

interface Books {
    id: number
    author: string,
    title: string
}

const objArr: Books[] = [
    { id: 1, author: 'Толстой', title: 'Война и мир'},
    { id: 2, author: 'Булгаков', title: 'Мастер и Маргарита'},
    { id: 3, author: 'Оруэлл', title: '1984'}
]

// const resBook: Books[] = objArr.filter((el) => {
//     return el.author == 'Булгаков'
// })

// console.log(resBook);

// for (let i = 0; i < objArr.length; i++) {
//     if (objArr[i].author == 'Булгаков') console.log(objArr[i]);
// }

// let i = 0

// while (i < objArr.length) {
//     if (objArr[i].author == 'Булгаков') console.log(objArr[i])
//     i++
// }

// do {
//     if (objArr[i].author == 'Булгаков') console.log(objArr[i])
//     i++
// } while (i < objArr.length)


objArr.forEach((el) => {
    if (el.author == 'Булгаков') console.log(el)
})
