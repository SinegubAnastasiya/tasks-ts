// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const str4 = ['hello', 'hah', 'ndlv'];
for (let i = 0; i < str4.length; i++) {
    if (str4[i].split('').reverse().join('') == str4[i])
        console.log(str4[i]);
}
