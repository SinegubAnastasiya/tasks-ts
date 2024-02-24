// Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {
    str: string

    constructor (str: string) {
        this.str = str
    }

    reverseString = () => console.log(this.str.split('').reverse().join(''));
    

    isPalindrome () {
        if (this.str.split('').reverse().join('') == this.str) console.log('This string is palindrom');
    }

    countVowels () {
        const vowels: string[] = ['a', 'o', 'e', 'i', 'u']
        let count: number = 0
        const res = this.str.split('').filter((el) => {
            if (vowels.includes(el)) count++
        })
        // for (let i = 0; i < this.str.length; i++) {
        //     if (vowels.includes(this.str[i])) count++
        // }
        console.log(res);
    }
}

const stringManipulator = new StringManipulator('striiiiiiiirts')
stringManipulator.reverseString()
stringManipulator.isPalindrome()
stringManipulator.countVowels()