// Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

interface Fruits {
    id: number;
    title: string;
    price: number
}

abstract class Fruit {
    abstract array: Fruits[] 
}

class Apple extends Fruit {
    array = [
        {id: 1, title: 'apple', price: 10},
        {id: 2, title: 'apricot', price: 20},
        {id: 3, title: 'banana', price: 12}
    ]
    getAppleInfo() {
        return this.array.filter((el) => el.title == 'apple')
    }
}

const apple = new Apple()
console.log(apple.getAppleInfo());