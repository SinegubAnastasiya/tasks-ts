// Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().

abstract class Animal {
    abstract makesound(sound: string): void
}

class Dog extends Animal {
    makesound(sound: string): void {
        console.log(sound);   
    }
}

class Cat extends Animal {
    makesound(sound: string): void {
        console.log(sound);
    }
}

const dog = new Dog
dog.makesound('Woof')

const cat = new Cat
dog.makesound('Meow')