// Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().
class Animal {
}
class Dog extends Animal {
    makesound(sound) {
        console.log(sound);
    }
}
class Cat extends Animal {
    makesound(sound) {
        console.log(sound);
    }
}
const dog = new Dog;
dog.makesound('Woof');
const cat = new Cat;
dog.makesound('Meow');
