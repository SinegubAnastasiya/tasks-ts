// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo".
const str2 = 'hello';
let newStr = '';
for (let i = 0; i < str2.length; i++) {
    if (!newStr.includes(str2[i])) {
        newStr += str2[i];
    }
}
console.log(newStr);
