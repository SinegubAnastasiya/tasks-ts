// Создайте массив строк и объедините все элементы в одну строку без пробелов.

const strArr: string[] = ['hello', 'my', 'world']
let newStr: string = ''

for (let i = 0; i < strArr.length; i++) {
    newStr += strArr[i]
}

console.log(newStr);
