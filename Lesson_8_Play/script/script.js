class Hero {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack(target) {
        // this = {name: "Герой 1", health: 100}
        // target = {name: "Герой 2", health: 100}
        console.log(`${this.name} атакует ${target.name}!`);   

        target.health -= 10

        if(target.health < 10){
            console.log(`${this.name} выиграл!`);

            alert("Game Over");
        }

        console.log(`${this.name} получает урон. Здоровье ${target.name}`);  //выводы атаки с уроном + здоровье hero1.attack(hero2) и hero2.attack(hero1)    
    }

    heal() {
        console.log(`${this.name} лечит себя`)  

        this.health += 10
        console.log(`${this.name} исцелен. Здоровье ${this.health}`); //вывод исцеления + здоровье hero1.health и hero2.health   
    }

}

class Treasure {
    constructor(value) {
        this.value = value
    }
    collect(hero) {
        console.log(`${hero.name} находит сокровище стоимостью ${this.value}`);        
    }    
}


let hero1 = new Hero("Герой 1", 100);  // {name: "Герой 1", health: 100, attack: () => {}}
let hero2 = new Hero("Герой 2", 100);  // {name: "Герой 2", health: 100}

const treasure = new Treasure(100) // treasure = {value: 100, collect: () => {}} 
treasure.collect(hero1)  // hero1 = {name: "Герой 1", health: 100}

document.body.addEventListener("keypress", function(e){
    console.log(e)
    if(e.code === "KeyA"){
        hero1.attack(hero2)
    }

    if(e.code === "KeyS"){
        hero1.heal();
    }

    if(e.code === "KeyK"){
        hero2.attack(hero1)
    }

    if(e.code === "KeyL"){
        hero2.heal();
    }
})  

//hero1.attack(hero2)   //вывод функции атаки, меняем местами героев
//hero2.attack(hero1)   //вывод функции атаки, меняем местами героев

//hero1.heal()  //вывод исцеления + здоровье

//console.log(hero1)
//console.log(hero2)

//Задание:const treasure = new Treasure(100);
//treasure.collect(hero

/*Реализуйте класс Treasure (Сокровище), который будет представлять сокровище с определенной стоимостью.

Создайте конструктор, который принимает одно значение - стоимость сокровища (value) и сохраняет его в свойство объекта.
Добавьте метод collect(hero), который принимает объект hero и выводит в консоль сообщение о том, что герой нашел сокровище. Сообщение должно быть в следующем формате: "<имя героя> находит сокровище стоимостью <стоимость сокровища>!"*/
 