// Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics
class StringManipulator {
    str;
    constructor(str) {
        this.str = str;
    }
    reverseString = () => console.log(this.str.split('').reverse().join(''));
    isPalindrome() {
        if (this.str.split('').reverse().join('') == this.str)
            console.log('This string is palindrom');
    }
    countVowels() {
        const vowels = ['a', 'o', 'e', 'i', 'u'];
        let count = 0;
        for (let i = 0; i < this.str.length; i++) {
            if (vowels.includes(this.str[i]))
                count++;
        }
        console.log(count);
    }
}
const stringManipulator = new StringManipulator('striiiiiiiirts');
stringManipulator.reverseString();
stringManipulator.isPalindrome();
stringManipulator.countVowels();
