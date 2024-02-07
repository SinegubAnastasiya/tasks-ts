// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“

const strWithLetters: string[] = 'Hello World'.split(' ')

const res = strWithLetters.map((el) => {
    let lastLetter = el[el.length - 1]
    return lastLetter
})

console.log(res.join(' '));