// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

const stringArr: string[] = ['hello', 'olla', 'hi', 'allo']

const result = stringArr.filter((elem) => {
    if (elem.includes('a')) return elem
})

console.log(result);
