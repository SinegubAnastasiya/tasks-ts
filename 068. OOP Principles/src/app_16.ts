// Создайте базовый класс Person, представляющий человека. У класса Person
// должны быть свойства name и age. Создайте класс Student, наследующийся от
// Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
// getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
// Student и выведите их данные.

class Person {
    name: string
    age: number

    setName (name: string) {
        this.name = name
    }

    setAge (age: number) {
        this.age = age
    }
}

class Student16 extends Person {
    averageGrade: number

    setAverageGrade (averageGrade: number) {
        this.averageGrade = averageGrade
    }

    getName = () => this.name
    getAge = () => this.age
    getAverageGrade = () => this.averageGrade
}

const students = new Student16()
students.setName('Nastya')
students.setAge(25)
students.setAverageGrade(9)
console.log(students.getName());
console.log(students.getAge());
console.log(students.getAverageGrade());

const student4 = new Student16()
students.setName('Vlad')
students.setAge(21)
students.setAverageGrade(9)
console.log(students.getName());
console.log(students.getAge());
console.log(students.getAverageGrade());