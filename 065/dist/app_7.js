// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 
const arr3 = [];
for (let i = 0; i < 5; i++) {
    arr3.push(prompt());
}
const res3 = arr3.map(el => {
}).filter((el) => {
    if (!isNaN(+el))
        return el;
});
console.log(res3);
