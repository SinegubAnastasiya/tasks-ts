// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит с помощью экземпляра класса.
// Создайте экземпляр класса Student и выведите их свойства.

class Student1 {
    name: string;
    age: number
}

const student1 = new Student1()
student1.name = 'Nastya'
student1.age = 25
console.log(student1.name, student1.age);
