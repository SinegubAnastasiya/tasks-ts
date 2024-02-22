// Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) 
// и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)
class Vehicle {
}
class Car extends Vehicle {
    start(sound) {
        console.log(sound);
    }
    stop(sound) {
        console.log(sound);
    }
}
class Motorcycle extends Vehicle {
    start(sound) {
        console.log(sound);
    }
    stop(sound) {
        console.log(sound);
    }
}
const car = new Car;
car.start('Beep');
car.stop('Brr');
const motorcycle = new Motorcycle();
motorcycle.start('Vrrrr');
motorcycle.stop('Stop');
