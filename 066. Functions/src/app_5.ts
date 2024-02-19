// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

interface Products {
    readonly id: number;
    title: string;
    count: number;
    price: number
}

const productObj5: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

// function findMax(productObj5: Products[]): Products {
//     let max = productObj5[0]
//     for (let i = 0; i < productObj5.length; i++) {
//         if (productObj5[i].price > max.price) max = productObj5[i]
//     }
//     return max
// }

const findMax = (productObj5: Products[]): Products => {
    let max = productObj5[0]
    productObj5.forEach((el) => {
        if (el.price > max.price) max = el
    })
    return max
}

const res5 = findMax(productObj5)
console.log(res5);