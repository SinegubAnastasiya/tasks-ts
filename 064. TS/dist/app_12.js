// Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *.
const firstString = 'hello';
let newString = '';
const glas = ['a', 'o', 'e', 'i', 'u'];
let i = 0;
while (i < firstString.length) {
    if (glas.includes(firstString[i])) {
        newString += '*';
    }
    else {
        newString += firstString[i];
    }
    i++;
}
console.log(newString);
