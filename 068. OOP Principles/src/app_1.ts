// Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)

abstract class Shape {
    abstract calculateArea(height: number, width: number): number
}

class Rectangle extends Shape {
    calculateArea(height: number, width: number) {
        return height * width
    }
}

const rectangle = new Rectangle()
console.log(rectangle.calculateArea(10, 20));
