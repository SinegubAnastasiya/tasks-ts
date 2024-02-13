// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const numArr: number[] = [];
const numArr2: string[] = [];
const count: number = +prompt()

// for (let i = 0; i < count; i++) {
//     numArr.push(+prompt())
// }

// const resStr = numArr.map((el) => {
//     if (el % 2 == 0) return 'чет'
//     else return 'нечет'
// })

// numArr.forEach((el) => el % 2 == 0 ? numArr2.push('chet') : numArr2.push('nech'))

// console.log(resStr);

// for (let el of numArr) {
//     if (el % 2 == 0) numArr2.push('chet')
//     else numArr2.push('nechet')
// }

// let n: number = 0

// do {
//     if (numArr[n] % 2 == 0) numArr2.push('chet')
//     else numArr2.push('nechet')
//     n++
// } while (n < numArr.length)

// console.log(numArr2);

let n: number = 0

while (n < numArr.length) {
    if (numArr[n] % 2 == 0) numArr2.push('chet')
    else numArr2.push('nechet')
    n++
}
