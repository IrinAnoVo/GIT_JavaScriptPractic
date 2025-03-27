/*
let user1  = {
    username: 'John',
    age: 25,
    displayInfo() {
        console.log(this.username);        
    }
}
let user2  = {
    username: 'Anna',
    age: 25,
    displayInfo() {
        console.log(this.username);        
    }
}
user1.displayInfo()
user2.displayInfo()
*/
/*
function User(username, age) {
    this.username = username
    this.age = age
    this.displayInfo = function(x = 'hi') {
        console.log(x, this.username);        
    }
}
*/
/*
User.prototype.displayInfo = function(x = 'hi') {
    console.log(x, this.username);
}
*/
/*
class User {
    constructor(username, age) {   /// не статический класс, обращение с протатипом
        this.username = username
        this.age = age
        //this.displayInfo = function(x = 'hi') {  // статический метод
        //   console.log(x, this.username);        
        //}
    }
    displayInfo() {   ///в не статическом классе функция пишется после конструктора
        console.log(x, this.username);        
    }
}

let user1 = new User('John', 25)  /// не статический касс
let user2 = new User('Anna', 25)

user1.displayInfo('Hallo')
user2.displayInfo()
*/

class MathCustom {  // класс со статическим методом Math
    static add(a, b) {
        return a + b
    }
}
console.log(MathCustom.add(5, 4));

Math.hello = function(name) {
    return `Hello ${name}`
}
console.log(Math.hello('John'));

console.logV2 = function(x){
    console.log(x)
}

// console.log(Math)

console.logV2("Hello world !!!")
// console.log = ""

console.log("hello")



