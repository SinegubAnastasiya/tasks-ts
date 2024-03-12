// Создайте класс PersonArray, который имеет свойство array (массив объектов
//     Person) и методы:
//     getNames(): string[] - возвращает массив имен всех людей.
//     getAdults(): Person[] - возвращает массив только совершеннолетних людей.
//     getAverageAge(): number - возвращает средний возраст всех людей.

interface Person {
    name: string;
    age: number
}

class PersonArray {
    array: Person[] = [
        { name: 'Nastya', age: 25},
        { name: 'Sonya', age: 16},
        { name: 'Vova', age: 10},
        { name: 'Vlad', age: 21},
    ]

    getNames(): string[] {
        let arrNames: string[] = []
        for (let i = 0; i < this.array.length; i++) {
            arrNames.push(this.array[i].name)
        }
        return arrNames
    }

    getAdults(): Person[] {
        return this.array.filter(el => el.age >= 18)
    }

    getAverageAge(): number {
        return Math.round(this.array.reduce((sum, el) => sum += el.age / this.array.length, 0))
    }
}

describe ('Test class PersonArray', () => {
    test ('Get success adults', () => {
        const res = new PersonArray()
        expect(res.getAdults()).toEqual([
            { name: 'Nastya', age: 25},
            { name: 'Vlad', age: 21}
        ])
    })

    test ('Get success names', () => {
        const res = new PersonArray()
        expect(res.getNames()).toEqual(['Nastya', 'Sonya', 'Vova', 'Vlad'])
    })

    test ('Get success average age', () => {
        const res = new PersonArray()
        expect(res.getAverageAge()).toBe(18)
    })
})