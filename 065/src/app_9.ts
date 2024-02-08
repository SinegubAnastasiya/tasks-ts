// Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

const arr5: (string | number)[] = ['hi', 5, 1, 'gfs', 'hi']

const res5 = arr5.filter((el, index, array) => {
    return array.indexOf(el) == index
})

console.log(res5);