// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

function f(x: number, y?: number): any {
    if (y) return x + y;
    return function(y: number) {
        return x + y;
    };
}

console.log(f(2, 3)); 
console.log(f(2)(3));

