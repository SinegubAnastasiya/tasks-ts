// Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics

class PasswordGenerator {
    letters: string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789_-!@?*+='
    generatePassword (len: number) {
        let password: string = ''
        for (let i = 0; i < len; i++) {
            password += this.letters.charAt(Math.floor(Math.random() * this.letters.length))
        }
        console.log(password);
    }
}

const passwordGenerator = new PasswordGenerator()
passwordGenerator.generatePassword(8)