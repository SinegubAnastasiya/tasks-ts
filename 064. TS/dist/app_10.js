// Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки.
const leftStr = 'мука', rightStr = 'кумы';
let sortedLStr = leftStr.split('').sort().join('');
let sortedRStr = rightStr.split('').sort().join('');
console.log(sortedLStr == sortedRStr ? 'анаграмма' : 'не анаграмма');
