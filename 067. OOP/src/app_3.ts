// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в конструкторе класса. Создайте
// несколько экземпляров класса Student и выведите свойства.

class Student2 {
    name: string;
    age: number
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const student2 = new Student2('Nastya', 25)
console.log(student2.name, student2.age);