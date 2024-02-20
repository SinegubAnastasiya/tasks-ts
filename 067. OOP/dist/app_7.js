// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
class TodoList {
    tasks = ['task1', 'task2', 'task3', 'task4'];
    task;
    constructor(task) {
        this.task = task;
    }
    addTask = () => this.tasks.push(this.task);
    removeTask = () => this.tasks.splice(this.tasks.length - 1);
    getTasks = () => this.tasks;
}
const todoList = new TodoList('task5');
todoList.addTask();
console.log(todoList.tasks);
todoList.removeTask();
console.log(todoList.tasks);
todoList.getTasks();
console.log(todoList.tasks);
