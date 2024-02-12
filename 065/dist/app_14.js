// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
let dirStr = 'hhellodfnhll';
const newDirStr = dirStr.split('').sort().join('');
let countLetter = 0;
let maxCount = 0;
console.log(newDirStr);
for (let i = 0; i < newDirStr.length; i++) {
    if (newDirStr[i] == newDirStr[i + 1]) {
        countLetter++;
        console.log(newDirStr[i]);
        console.log(countLetter);
    }
    else {
        if (countLetter > maxCount)
            maxCount = countLetter;
        countLetter = 0;
    }
}
console.log(maxCount);
