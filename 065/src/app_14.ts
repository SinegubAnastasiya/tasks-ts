// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

let dirStr: string = 'hhellodfnhll'
const newDirStr: string = dirStr.split('').sort().join('')
let countLetter: number = 1
let maxCount: number = 0

for (let i = 0; i < newDirStr.length; i++) {
    if (newDirStr[i] == newDirStr[i + 1]) {
        countLetter++
        console.log(newDirStr[i])
    }
    else {
        if (countLetter > maxCount)  maxCount = countLetter
        countLetter = 1
    }
}

console.log(maxCount);