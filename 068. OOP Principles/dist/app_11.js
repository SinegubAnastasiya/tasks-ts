// Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.
class University {
}
class Student extends University {
    students = [
        { id: 1, name: 'name1', surname: 'surname1' },
        { id: 2, name: 'name2', surname: 'surname2' },
        { id: 3, name: 'name3', surname: 'surname3' },
        { id: 4, name: 'name4', surname: 'surname4' }
    ];
    getStudentById(id) {
        return this.students.filter((el) => el.id == id);
    }
}
const student = new Student();
console.log(student.getStudentById(5));
