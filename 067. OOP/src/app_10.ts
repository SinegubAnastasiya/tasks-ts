// Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo().

interface Products {
    price: number;
    title: string
}

// class Product {
//     product: Products[] = [
//         { price: 10, title: 'title1'},
//         { price: 20, title: 'title2'},
//         { price: 30, title: 'title3'},
//         { price: 40, title: 'title4'}
//     ]

//     displayProductInfo(): Products[] {
//         return this.product.filter((el) => el.price > 20)
//     }
// }

// const product = new Product()
// console.log(product.displayProductInfo());

// class Product {
//     product: Products[] = []

//     setProducts(a: Products[]) {
//         this.product = a
//     }

//     displayProductInfo(): Products[] {
//         return this.product.filter((el) => el.price > 20)
//     }
// }

// const product = new Product()
// product.setProducts(
//     [
//             { price: 10, title: 'title1'},
//             { price: 20, title: 'title2'},
//             { price: 30, title: 'title3'},
//             { price: 40, title: 'title4'}
//     ]
// )
// console.log(product.displayProductInfo());


class Product {
    product: Products[] = []

    constructor (a: Products[]) {
        this.product = a
    }

    displayProductInfo(): Products[] {
        return this.product.filter((el) => el.price > 20)
    }
}

const product = new Product(
    [
            { price: 10, title: 'title1'},
            { price: 20, title: 'title2'},
            { price: 30, title: 'title3'},
            { price: 40, title: 'title4'}
    ]
)
console.log(product.displayProductInfo());

