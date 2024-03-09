// Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word?: any): boolean | string {
    try {
        if (!word) throw new Error('There is no word')
        if (typeof word !== 'string') throw new Error('Invalid type')
        if (!word.trim().length) throw new Error('String is empty')

        return word == word.split('').reverse().join('') ? true : false
    } catch (error) {
        return error.message
    }
}

describe ('Check isPalindrome', () => {
    test('Get success', () => {
        const arr = ['pop', 'mom', 'nan', 'dad']
        for (let el of arr) {
            const res = isPalindrome(el)
            expect(res).toBe(true)
        }
    })

    test('there is no word', () => {
            const res = isPalindrome()
            expect(res).toBe('There is no word')
    })

    test('incorrect type', () => {
            const res = isPalindrome(4)
            expect(res).toBe('Invalid type')
    })

    test('empty string', () => {
            const res = isPalindrome(' ')
            expect(res).toBe('String is empty')
    })
})