// Курс BTC: 100000

// 1. Создать функцию
// 2. Получить данные из input (10000)
// 3. 10000 / 100000 = 0.1 BTC

let rate = 100000;

function exchange() {
    let input1Value = document.querySelector(".input-1").value; //10000 

    let result = input1Value / rate; //100000
//console.log('${inputValue} $ = ${result} BTS');

document.querySelector(".result-1").innerHTML = '${inputValue} $ = ${result} BTC';

}

function exchangeBack() {
    let input2Value = document.querySelector(".input-2").value; //100000 

    let result = rate * input2Value; //10000
//console.log('${result} BTS = ${input2Value} $');

document.querySelector(".result-2").innerHTML = '${inputValue} BTC = ${result} $';

}

function minus() {
    let value1 = document.querySelector(".input-3").value;
    let value2 = document.querySelector(".input-4").value;

    let result = value1 - value2;

    document.querySelector(".result-3").innerHTML = '${value1} - ${Value2} = ${result}';
}

function add() {
    let value1 = +document.querySelector(".input-5").value;
    let value2 = Number(document.querySelector(".input-6").value);

    let result = value1 + value2;

    document.querySelector("result-4").innerHTML = '${value1} + ${value2} = ${result}';
}