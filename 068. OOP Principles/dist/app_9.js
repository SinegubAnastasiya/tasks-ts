// Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку
class Validation {
    email;
    date;
    path;
    constructor(email, date, path) {
        this.email = email;
        this.date = date;
        this.path = path;
    }
    isValidEmail() {
        if (!/^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(this.email))
            return false;
        return true;
    }
    isValidDate() {
        if (!/^[0-3][\d]\/[0-1][0-9]\/[0-2][\d]{3}$/gm.test(this.date))
            return false;
        return true;
    }
    isValidPath() {
        if (!/\.\/[a-z]+\/[\w]+\.[a-z]{2,6}$/gm.test(this.path))
            return false;
        return true;
    }
}
const validation = new Validation('fedukevi98mail.ru', '24/02/2024', './src/app_9.ts');
console.log(validation.isValidEmail());
console.log(validation.isValidDate());
console.log(validation.isValidPath());
