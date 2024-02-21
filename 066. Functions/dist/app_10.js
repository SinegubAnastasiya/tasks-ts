// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование
function f(x, y) {
    if (typeof y !== 'undefined') {
        return x + y;
    }
    else {
        return function (y) {
            return x + y;
        };
    }
}
console.log(f(2, 3));
console.log(f(2)(3));
// function f(a, b) {
//     if (b) {
//         return a + b;
//     } else {
//         return function(b) {
//             return a + b;
//         };
//     }
// }
// console.log(f(2, 3)); 
// console.log(f(2)(3));
