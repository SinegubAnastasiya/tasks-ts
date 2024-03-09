// Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n?: any): any {
    try {
        if (!n) throw new Error('N is not defined')
        if (typeof n !== 'number') throw new Error('Invalid type')
        if (n < 0) throw new Error('n < 0')

        if (n === 1) return 1
        return n * calculateFactorial(n - 1)
    } catch (error) {
        return error.message
    }
}

describe('Test calculateFactorial', () => {
    test('Get success', () => {
        const res = calculateFactorial(3)
        expect(res).toBe(6)
        expect(res).toBeGreaterThan(0)
    })

    test('without n', () => {
        const res = calculateFactorial()
        expect(res).toBe('N is not defined')
    })

    test('another type', () => {
        const res = calculateFactorial('kmf')
        expect(res).toBe('Invalid type')
    })

    test('n < 0', () => {
        const res = calculateFactorial(-1)
        expect(res).toBe('n < 0')
    })
})