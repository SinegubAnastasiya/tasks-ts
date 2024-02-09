// Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const str6 = ['hello', 'hi', 'world'];
const res6 = str6.map((el) => {
    return el.split('').filter((l) => {
        return 'aoiue'.includes(l.toLowerCase());
    }).join('');
});
console.log(res6);
