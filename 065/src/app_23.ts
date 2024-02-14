// Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface Products {
    name: string,
    price: number,
    count: number
}

const objProduct: Products[] = [
    { name: 'bread', price: 2, count: 10},
    { name: 'milk', price: 2.5, count: 10 },
    { name: 'oil', price: 5, count: 20 }
]

const resSum = objProduct.reduce((sum, el) => {
    return sum += el.count * el.price
}, 0)

console.log(resSum);