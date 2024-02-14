// Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
const objStaff = [
    { name: 'Ivan', salary: 1500 },
    { name: 'Sonya', salary: 3500 },
    { name: 'Vlad', salary: 4000 }
];
const resSal = objStaff.reduce((sum, el) => {
    return sum + el.salary;
}, 0);
let avgSal = resSal / objStaff.length;
console.log(avgSal);
