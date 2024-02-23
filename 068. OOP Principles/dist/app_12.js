// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория
class ServerGetAll {
    controller() {
        try {
            const data = this.service();
            return data;
        }
        catch (error) {
            console.log(error.message);
        }
    }
    service() {
        const data = this.repository();
        return data;
    }
    repository() {
        const array = [
            { id: 1, title: 'apple', price: 10 },
            { id: 2, title: 'apricot', price: 20 },
            { id: 3, title: 'banana', price: 12 }
        ];
        return array;
    }
}
const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
