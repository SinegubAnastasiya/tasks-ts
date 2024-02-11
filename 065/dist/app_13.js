// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
const numArr = [];
const count = +prompt();
let newString = [];
for (let i = 0; i < count; i++) {
    numArr.push(+prompt());
}
const resStr = numArr.map((el) => {
    if (el % 2 == 0)
        return newString.push('чет');
    else
        return newString.push('нечет');
});
console.log(resStr);
