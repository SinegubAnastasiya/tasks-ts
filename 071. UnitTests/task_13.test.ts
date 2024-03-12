// // Задача состоит в создании класса Words, который имеет поле array, 
// содержащее массив строк (например, ['sun', 'air', 'sky', 'island']), 
// и метод getWordsFstVowels(). Этот метод должен вернуть строку, которая 
// является результатом конкатенации всех слов массива, начинающихся с гласной 
// буквы. Массив слов должен быть инициализирован в конструкторе класса.

interface iWords {
    array: string[];
    getWordsFstVowels(): string
}

class Words implements iWords{
    array: string[]

    constructor(array: string[]) {
        this.array = array
    }

    getWordsFstVowels(): string {
        const vowels: string[] = ['a', 'o', 'e', 'i', 'u']
        let str = ''

        for (let i = 0; i < this.array.length; i++) {
            if (vowels.includes(this.array[i][0])) str += `${this.array[i]} `
        }
        return str.trim()
    }
}

describe ('Test Words', () => {
    test ('Get success', () => {
        const res = new Words(['sun', 'air', 'sky', 'island'])
        expect(res.getWordsFstVowels()).toBe('air island')
        expect(res.getWordsFstVowels().length).toBeGreaterThan(0)
        expect(res.getWordsFstVowels()).toHaveLength(10)
    })
})