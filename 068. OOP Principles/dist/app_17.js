// Создайте абстрактный класс MusicalInstrument, представляющий музыкальный
// инструмент. У класса MusicalInstrument должен быть метод play, который будет
// воспроизводить звук инструмента. Создайте классы-наследники Guitar, Piano и
// Drums, которые будут представлять гитару, пианино и ударные соответственно.
// Реализуйте метод play для каждого класса, воспроизводя соответствующий звук
// инструмента. Создайте несколько объектов классов Guitar, Piano и Drums и
// вызовите метод play для каждого инструмента.
class MusicalInstrument {
}
class Guitar extends MusicalInstrument {
    play = () => console.log('soundGuitar');
}
class Piano extends MusicalInstrument {
    play = () => console.log('soundPiano');
}
class Drums extends MusicalInstrument {
    play = () => console.log('soundDrums');
}
const guitar = new Guitar();
guitar.play();
const piano = new Piano();
piano.play();
const drums = new Drums();
drums.play();
