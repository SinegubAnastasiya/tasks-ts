// Напишите функцию findMissingNumber(numbers: number[]): number, которая
// принимает массив чисел, в котором пропущено одно число из
// последовательности, и возвращает пропущенное число.

function findMissingNumber(numbers?: number[]): number {
    try {
        if (!numbers) throw new Error('Input array of numbers')
        if (!numbers.length) throw new Error('Array is empty')

        let missingNumber: number = 0
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i + 1] - numbers[i] !== 1) {
                missingNumber = numbers[i] + 1
                break
            }
        }
        return missingNumber
    } catch (error) {
        return error.message
    }
}

describe ('Test findMissingNumber', () => {
    test ('Get success', () => {
        const res = findMissingNumber([1, 2, 3, 5, 6, 7, 8])
        expect(res).toBe(4)
        expect(res).toBeGreaterThan(0)
    })

    test ('test without array', () => {
        const res = findMissingNumber()
        expect(res).toBe('Input array of numbers')
    })

    test ('test empty array error', () => {
        const res = findMissingNumber([])
        expect(res).toBe('Array is empty')
    })
})