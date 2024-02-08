// Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

const arr2: string[] = [];

for (let i = 0; i < 5; i++) {
    arr2.push(prompt())
}

const res2 = arr2.some((el) => {
    return el.length > 5
})

console.log(res2);