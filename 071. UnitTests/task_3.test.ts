// Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str?: string): string {
    try {
        if (!str) throw new Error('Str is not defined')
        if (!str.trim().length) throw new Error('String is empty')

        const arr: string[] = str.split(' ')
        const newArr: string[] = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }
        return newArr.join(' ')
    } catch (error) {
        return error.message
    }
}

describe('Test capitalizeLetters', () => {
    test('Get success', () => {
        const res = capitalizeString('hello world')
        expect(res).toBe('Hello World')
    })

    test('string is empty', () => {
        const res = capitalizeString(' ')
        expect(res).toBe('String is empty')
    })

    test('str is not defined', () => {
        const res = capitalizeString()
        expect(res).toBe('Str is not defined')
    })
})