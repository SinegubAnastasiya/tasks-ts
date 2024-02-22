// Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) 
// и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)

abstract class Vehicle {
    abstract start(sound: string): void
    abstract stop(sound: string): void
}

class Car extends Vehicle {
    start (sound: string) {
        console.log(sound);
    }

    stop (sound: string) {
        console.log(sound);     
    }
}

class Motorcycle extends Vehicle {
    start (sound: string) {
        console.log(sound);
    }

    stop (sound: string) {
        console.log(sound);     
    }
}

const car = new Car
car.start('Beep')
car.stop('Brr')

const motorcycle = new Motorcycle()
motorcycle.start('Vrrrr')
motorcycle.stop('Stop')