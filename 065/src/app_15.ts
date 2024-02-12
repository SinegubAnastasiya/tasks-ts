// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

const stringArray: string[] = [];
const newStrArray: string[] = [];

for (let i = 0; i < 3; i++) {
    stringArray.push(prompt())
}

stringArray.forEach((el) => {
    newStrArray.push(`!${el}`)
})

console.log(newStrArray);
