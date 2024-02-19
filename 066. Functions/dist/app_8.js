// У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
const arr8 = ['sgdhjv@gd.ru', 'fedukevimail.ru', 'nskfd@gmail.com', 'fedukevi@mail.ru'];
let emailArr = [];
function deleteDubl(arr8) {
    arr8.forEach((el) => {
        try {
            if (!/^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(el))
                throw new Error('ERROR');
            if (!emailArr.includes(el))
                emailArr.push(el);
        }
        catch (error) {
            console.log('Error');
        }
    });
    return emailArr;
}
const res81 = deleteDubl(arr8);
console.log(res81);
