//У вас есть объект car, у которого есть метод describe. Используйте call, чтобы вызвать этот метод для объекта bike.
const car = { 
    brand: "Toyota", 
    model: "Camry", describe() { 
        console.log(`Это ${this.brand} ${this.model}`); } }; 
const bike = {
    brand: "Yamaha", 
    model: "R1" 
}
car.describe.call(bike)

//У вас есть метод introduce, который принимает имя и возраст. Используйте call, чтобы передать значения другому объекту.
function introduce(name, age) { 
    console.log(`Меня зовут ${name}, мне ${age} лет. Я из ${this.country}`); 
} 
const person = {
    country: "Китай"
}
introduce.call(person, "masha", 23)

//У вас есть функция sumNumbers, которая складывает три числа. Используйте apply, чтобы передать ей массив чисел.
function sumNumbers(a, b, c) { 
    return a + b + c; 
} 
const numbers = [3, 7, 10];
const sum = sumNumbers.apply(null, numbers)
console.log(sum);

//У вас есть объект user, у которого есть метод sayHello. Используйте bind, чтобы создать новую функцию, которая всегда будет здороваться от имени user.
const user = { 
    name: "Иван", 
    sayHello() {
         console.log(`Привет, меня зовут ${this.name}`); 
    } 
}
const masha = user.sayHello.bind(user)
masha()


class Transport {
    constructor(name, spead) {
        this.name = name
        this.spead = spead
    }
    accelerate() {
        console.log(`${this.name} ускоряется до ${this.spead} км/ч`);       
    }

    stop() {
        console.log(`${this.name} останавливается`);       
    }
}

class Auto extends Transport {
    constructor(name, spead) {
        super(name, spead)
    }
    drift() {
        console.log(`${this.name} делает занос`);        
    }
}

let auto = new Auto('BMW', 300)
console.log(auto);

auto.accelerate()
auto.drift()
auto.stop()

class Moto extends Transport {
    constructor(name, spead) {
        super(name, spead)
    }
    wheelie() {
        console.log(`${this.name} едет на заднем колесе`);
    }
}

let moto = new Moto('Harley', 200)
moto.wheelie()


