// 1) создать интерфейс на основе user и протипизировать функции:

interface IUser {
    name: string;
    age: number;
    gender: string;
}

function showUser(user: IUser) {
    console.log(user);
}

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number) {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser;
}


const user = {
    name: "Max",
    age: 18,
    gender: 'male'
}

showUser(user);
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
showUser(user);

// 2)написать интерфейс Animal который описывает:
// -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface IAnimal {
    name: string;
    movementType: string;
    whatDoesItSay: string;

    info(): string;
}

class Cat implements IAnimal {
    name: string;
    movementType: string;
    whatDoesItSay: string;

    constructor() {
        this.name = 'cat';
        this.movementType = 'walking';
        this.whatDoesItSay = 'mew';
    }

    info(): string {
        return `This is a ${this.name}. Movement type: ${this.movementType}. What does the ${this.name} say? ${this.whatDoesItSay}`;
    }
}

class Bird implements IAnimal {
    name: string;
    movementType: string;
    whatDoesItSay: string;

    constructor() {
        this.name = 'bird';
        this.movementType = 'flying';
        this.whatDoesItSay = 'chik-chiriki i v damki';
    }

    info(): string {
        return `This is a ${this.name}. Movement type: ${this.movementType}. What does the ${this.name} say? ${this.whatDoesItSay}`;
    }
}

class Fish implements IAnimal {
    name: string;
    movementType: string;
    whatDoesItSay: string;

    constructor() {
        this.name = 'fish';
        this.movementType = 'swimming';
        this.whatDoesItSay = '... <º))))><';
    }

    info(): string {
        return `This is a ${this.name}. Movement type: ${this.movementType}. What does the ${this.name} say? ${this.whatDoesItSay}`;
    }
}

function showAnimal(animal: IAnimal) {
    return animal.info();
}

const Borys = new Cat();
const Kesha = new Bird();
const Nemo = new Fish();
console.log(showAnimal(Borys));
console.log(showAnimal(Kesha));
console.log(showAnimal(Nemo));


// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape {
    a: number;
    b: number;
    c?: number;

    abstract perimeter(): number;

    abstract area(): number;
}

class Triangle implements Shape {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

    area(): number {
        const p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

}

class Rectangle implements Shape {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    perimeter(): number {
        return this.a * 2 + this.b * 2;
    }

    area(): number {
        return this.a * this.b;
    }

}

const arr = [];
arr.push(new Triangle(3,4,5));
arr.push(new Rectangle(3,4));
arr.push(new Rectangle(25, 41));

arr.forEach(value => {
    console.log(`P = ${value.perimeter(value)}, S = ${value.area(value)}`);
});
