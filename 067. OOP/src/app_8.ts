// Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2

// class CircleR {
//     pi: number = 3.14
//     radius: number

//     constructor (r: number) {
//         this.radius = r
//     }

//     getArea = () => this.pi * this.radius ** 2
// }

// const circleR = new CircleR(2)
// console.log(circleR.getArea());

class CircleR {
    pi: number = 3.14;
    radius: number

    setR (r: number) {
        this.radius = r
    }

    getArea = () => this.pi * this.radius ** 2
}

const circleR = new CircleR()
circleR.setR(2)
console.log(circleR.getArea());
