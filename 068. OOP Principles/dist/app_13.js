// Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pwd": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.
class ServerPost {
    middleware(json) {
        try {
            if (!json.hasOwnProperty('email'))
                throw new Error('Do not include email');
            const data = this.controller(json);
            return data;
        }
        catch (error) {
            return error.message;
        }
    }
    controller(json) {
        const data = this.service(json);
        return data;
    }
    service(json) {
        const data = this.repository(json);
        return data;
    }
    repository(json) {
        const array = [
            { "email": "Test1", "pwd": "test1" },
            { "email": "Test2", "pwd": "test2" },
            { "email": "Test3", "pwd": "test3" },
            { "email": "Test4", "pwd": "test4" }
        ];
        const email = array.some((el) => {
            return el.email == json.email;
        });
        if (email)
            throw new Error('Such email has already existed');
        return array.push(json);
    }
}
const serverPost = new ServerPost();
const json = JSON.parse(`{ "email": "Test", "pwd": "test" }`);
console.log(serverPost.controller(json));
