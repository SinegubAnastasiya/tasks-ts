// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

interface Products {
    readonly id: number;
    title: string;
    count: number;
    price: number
}

const productObj: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

const countProducts = (productObj: Products[]): Products[] => {
    // const res1 = productObj.filter((el) => {
    //     return el.count > 10
    // })
    // return res1
    let newArr = []
    productObj.forEach((el) => {
       if (el.count > 10) newArr.push(el)
    })
    return newArr
}

const res = countProducts(productObj)
console.log(res);


