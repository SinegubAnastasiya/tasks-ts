// Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на
// подмассивы указанного размера.

function chunkArray(array: any[], size: number): any[][] {
    try {
        let newArr: any[] = []
    
        if (size === 0) throw new Error('Size can not be 0')
        if (!array.length) throw new Error('Array is empty')
    
        for (let i = 0; i < array.length; i += size) {
            newArr.push(array.slice(i, i + size))
        }
        return newArr
    } catch (error) {
        return error.message
    }
}

describe('Test chunkArray', () => {
    test('Get success', () => {
        const arr = [1, 2, 3, 4, 5]
        const res = chunkArray(arr, 2)
        expect(res).toEqual([[1, 2], [3, 4], [5]])
        expect(res.length).toBeGreaterThan(0)
        expect(res).toHaveLength(3)
    })

    test('size = 0', () => {
        const arr = [1, 2, 3, 4, 5, 6]
        const res = chunkArray(arr, 0)
        expect(res).toBe('Size can not be 0')
    })

    test('array is empty', () => {
        const arr = []
        const res = chunkArray(arr, 2)
        expect(res).toBe('Array is empty')
    })
})