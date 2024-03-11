class StringArray1 {
    array = ['hello', 'my', 'big', 'school', 'my', 'my']

    // getLongestWord () {
    //     let word = this.array[0]
    //     return this.array.filter(el => el.length > word.length)[0]
    // }

    getUniqueWords () {
        const uniqueWords = this.array.filter((el, index) => {
            return this.array.indexOf(el) === index;
        });
      
        return uniqueWords;
    }
}

const stringArray = new StringArray1()
console.log(stringArray.getLongestWord());
console.log(stringArray.getUniqueWords());