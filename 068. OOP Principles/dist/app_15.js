// Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
// свойства name, age и color. Реализуйте методы getName, getAge и getColor,
// которые будут возвращать соответствующие свойства. Создайте несколько
// объектов класса Cat и выведите их данные.
class Cats {
    name = 'Glory';
    age = 10;
    color = 'grey';
    getName = () => this.name;
    getAge = () => this.age;
    getColor = () => this.color;
}
const cats = new Cats;
console.log(cats.getName());
console.log(cats.getAge());
console.log(cats.getColor());
