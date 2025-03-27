let cars = ["BMW", "Mercedes", "Audi", "Opel"];
// 1.function
/*let newCars = cars.map(function(value, index) {
    return value.toUpperCase()
})
console.log(newCars);
*/
// 2.=>function
/*
let newCars1 = cars.map(value => value.toUpperCase())
console.log(newCars1);
*/
// 3.
/*
const chengeToUpperCase = value => value.toUpperCase()
let newCars2 = cars.map(chengeToUpperCase)
console.log(newCars2);
*/
let numbers = [1, 2, 3, 4]
/*let numbersNew = numbers.map(value => value ** 2)
console.log(numbersNew);
*/

// .map
/*function mapV2(array, callback){
    let numbersArr = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        numbersArr.push(callback(element))
    }
    return numbersArr
}
let numbersNew = mapV2(numbers, num => num ** 2)
console.log(numbersNew);
*/

//1.
let filteredCars = cars.filter(car => car[0] === "A")
console.log(filteredCars);

//2.
let filteredCars1 = cars.filter(function(car) {
    //car => car.toLocaleLowerCase().includes("a")
    if (car.includes("A"))
        return true
})
console.log(filteredCars1);


