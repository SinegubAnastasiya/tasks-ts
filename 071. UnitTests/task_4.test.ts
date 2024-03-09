// Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.

function flattenArray(array: any): any[] {
    try {
        if (!Array.isArray(array)) throw new Error('It is not array')
        if (!array.length) throw new Error('Array is empty')
        
        return array.flat(Infinity)
    } catch (error) {
        return error.message
    }
}

describe('Test flattenArray', () => {
    test('Get success', () => {
        const arr = [1, 2, [1, 2], [1, [3, 4]]]
        const res = flattenArray(arr)
        expect(res).toEqual([1, 2, 1, 2, 1, 3, 4])
        expect(res).toHaveLength(7)
        expect(res.length).toBeGreaterThan(0)
    })

    test('is not array', () => {
        const res = flattenArray('')
        expect(res).toBe('It is not array')
    })

    test('array is empty', () => {
        const res = flattenArray([])
        expect(res).toBe('Array is empty')
    })
})