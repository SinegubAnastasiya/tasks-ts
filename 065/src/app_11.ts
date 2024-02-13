// На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

const arrString: string[] = []
const numEl: number = +prompt()

for (let i = 0; i < numEl; i++) {
    arrString.push(prompt())
}

const regRes = arrString.every((el) => {
    return /^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(el)
})

console.log(regRes);