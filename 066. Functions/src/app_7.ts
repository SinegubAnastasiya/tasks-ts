// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

interface Products {
    readonly id: number;
    title: string;
    count: number;
    price: number
}

const productObj7: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

// function findMax(productObj7: Products[]): Products {
//     let maxPriceObj = productObj7[0]
//     productObj7.forEach((el) => {
//         if (el.price * el.count > maxPriceObj.price * maxPriceObj.count) maxPriceObj = el
//     })
//     return maxPriceObj
// }

const findMax1 = (productObj7: Products[]): Products => {
    let maxPriceObj = productObj7[0]
    productObj7.forEach((el) => {
        if (el.price * el.count > maxPriceObj.price * maxPriceObj.count) maxPriceObj = el
    })
    return maxPriceObj
}

const res7 = findMax1(productObj7)
console.log(res7);