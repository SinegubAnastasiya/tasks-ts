// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива

class ArrayAnalyzer {
    numsArray: number[] = []

    constructor (array: number[]) {
        this.numsArray = array
    }

    getAverage () {
        return this.numsArray.reduce((sum, el) => (sum + el) / this.numsArray.length, 0)
    }

    getMax () {
        // let max = 0
        // this.numsArray.forEach((el) => {
        //     if (el > max) max = el
        // })
        // return max

        return Math.max(...this.numsArray)
    }

    getMin () {
        // let min = this.numsArray[0]
        // this.numsArray.forEach((el) => {
        //     if (el < min) min = el
        // })
        // return min

        return Math.min(...this.numsArray)
    }
}

const arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 5, 6, 8])
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMin());
console.log(arrayAnalyzer.getMax());


