// Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

interface Params {
    name: string;
    value: number
}

interface objParams {
    width?: number;
    height?: number
}

const arr9: Params[] = [ {name: 'width', value: 10}, {name: 'height', value: 20} ]

let obj: objParams = {}

function doObj(arr9: Params[]): objParams {
    arr9.forEach((el) => {
        obj[el.name] = el.value
    })
    return obj
}

const res9 = doObj(arr9)
console.log(res9);

