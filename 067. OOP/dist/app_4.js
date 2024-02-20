// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в getter, setter класса. Создайте
// экземпляр класса Student и выведите свойства.
class Student3 {
    name;
    age;
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getName = () => this.name;
    getAge = () => this.age;
}
const student3 = new Student3();
student3.setName('Nastya');
student3.setAge(25);
console.log(student3.getName(), student3.getAge());
