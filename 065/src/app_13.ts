// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const numArr: number[] = [];
const count: number = +prompt()

for (let i = 0; i < count; i++) {
    numArr.push(+prompt())
}

const resStr = numArr.map((el) => {
    if (el % 2 == 0) return 'чет'
    else return 'нечет'
})

console.log(resStr);
