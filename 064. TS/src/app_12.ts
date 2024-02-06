// Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *.

const firstString: string = 'hello'
let newString: string = ''
const glas: string[] = ['a', 'o', 'e', 'i', 'u']
let i: number = 0

while (i < firstString.length) {
    if (glas.includes(firstString[i])) {
        newString += '*'
    }
    else {
        newString += firstString[i]
    }
    i++
}

console.log(newString);