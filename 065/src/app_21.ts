// Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

const str21: string[] = 'hello world my name is Nastya'.split(' ')
let findedWord: number = 0

const resWord = str21.filter((el) => {
    if (el.length > findedWord) return findedWord = el.length
})

console.log(findedWord);