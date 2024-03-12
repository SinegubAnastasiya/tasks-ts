// Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

function arrayWithoutDupl (str: string): string[] {
    try {
        if (!str.length) throw new Error('Str is empty')

        let newArr: string[] = []
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[i + 1]) newArr.push(str[i])
        }
        return newArr
    } catch (error) {
        return error.message
    }
}

describe ('Test arrayWithoutDupl', () => {
    test ('Get success letters', () => {
        const res = arrayWithoutDupl('AAAABBBCCDAABBB')
        expect(res).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
    })

    test ('Get success numbers', () => {
        const res = arrayWithoutDupl('12233')
        expect(res).toEqual(['1', '2', '3'])
    })

    test ('empty string', () => {
        const res = arrayWithoutDupl('')
        expect(res).toBe('Str is empty')
    })
})
