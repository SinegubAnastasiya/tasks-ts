// Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
    array: string[] = ['hello', 'my', 'big', 'school', 'my']

    getLongestWord (): string {
        let word: string = this.array[0]

        return this.array.filter(el => el.length > word.length)[0]
    }

    getUniqueWords (): string[] {
        const uniqueWords = this.array.filter((el, index) => {
            return this.array.indexOf(el) === index;
        });
      
        return uniqueWords;
    }
}

describe ('Test class StringArray', () => {
    test('Get success', () => {
        const res = new StringArray()
        expect(res.getLongestWord()).toBe('school')
    })
    test('Get success', () => {
        const res = new StringArray()
        expect(res.getUniqueWords()).toEqual(['hello', 'my', 'big', 'school'])
    })
    
})
