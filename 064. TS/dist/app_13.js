// Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".
const sentence = 'hello world'.split(' ');
let myRes = '';
for (let i = 0; i < sentence.length; i++) {
    if (i === 0)
        myRes += sentence[i].toUpperCase();
    else
        myRes += sentence[i];
}
console.log(myRes);
