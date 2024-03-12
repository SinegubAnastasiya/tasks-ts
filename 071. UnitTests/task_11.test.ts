// Создайте класс StringManipulator, который имеет свойство text (строка) и методы:
// getCharacterCount(): number - возвращает количество символов в тексте.
// getWords(): string[] - возвращает массив слов из текста.
// getReversedText(): string - возвращает текст в обратном порядке.

class StringManipulator {
    text

    constructor(text: string) {
        this.text = text
    }

    getCharacterCount(){
        return this.text.length
    }

    getWords(): string[] {
        return this.text.split(' ')
    }

    getReversedText(): string {
        return this.text.split('').reverse().join('')
    }
}

describe ('Test class StringManipulator', () => {
    test ('Get success length', () => {
        const res = new StringManipulator('hello world')
        expect(res.getCharacterCount()).toBe(11)
        expect(res.getCharacterCount()).toBeGreaterThan(0)
    })

    test ('Get success array of words', () => {
        const res = new StringManipulator('hello world')
        expect(res.getWords()).toEqual(['hello', 'world'])
    })

    test ('Get success reversed text', () => {
        const res = new StringManipulator('hello world')
        expect(res.getReversedText()).toEqual('dlrow olleh')
    })
})

