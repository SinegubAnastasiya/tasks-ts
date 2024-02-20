// Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r
// class CircleC {
//     radius: number
//     pi: number = 3.14
//     constructor (r: number) {
//         this.radius = r
//     }
//     getCircumference = () => 2 * this.pi * this.radius
// }
// const circleC = new CircleC(2)
// console.log(circleC.getCircumference());
class CircleC {
    radius;
    pi = 3.14;
    setRadius(r) {
        this.radius = r;
    }
    getCircumference = () => 2 * this.pi * this.radius;
}
const circleC = new CircleC();
circleC.setRadius(2);
console.log(circleC.getCircumference());
