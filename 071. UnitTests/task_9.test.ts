// Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
    array: number[] = [1, 2, 3, 4, 5, 6, 7]

    getSum(): number {
        try {
            return this.array.reduce((sum: number, el: number): number => sum += el, 0)
        } catch (error) {
            return error.message
        }
    }

    getEvenNumbers(): number[] {
        try {
            return this.array.filter((el: number): boolean => el % 2 == 0)
        } catch (error) {
            return error.message
        }
    }
}

describe('Test NumberArray', () => {
    test('Get success getSum', () => {
        const numberArray = new NumberArray()
        const res = numberArray.getSum()
        expect(res).toBe(28)
    })

    test('Get success getEvenNumbers', () => {
        const numberArray = new NumberArray()
        const res = numberArray.getEvenNumbers()
        expect(res).toEqual([2, 4, 6])
        expect(res.length).toBeGreaterThan(0)
        expect(res).toHaveLength(3)
    })
})