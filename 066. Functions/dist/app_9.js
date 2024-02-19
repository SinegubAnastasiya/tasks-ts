// Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
const arr9 = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];
let obj = {};
function doObj(arr9) {
    arr9.forEach((el) => {
        obj[el.name] = el.value;
    });
    return obj;
}
const res9 = doObj(arr9);
console.log(res9);
