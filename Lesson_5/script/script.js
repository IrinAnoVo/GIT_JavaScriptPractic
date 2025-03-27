//синхронный код
/*console.log("start");
for (let i = 0; i < array.length; i++) {;
    console.log(i);  
}
console.log("end");
*/
/*
setTimeout(() =>{
    console.log("setTimeout 1");   
}, 0);
console.log("start");

setTimeout(() =>{
    console.log("setTimeout 2");
console.log("setTimeout 2");   
}, 0);

const foo = () => console.log("foo");
const bar = () => setTimeout(() => console.log("bar"), 2000);
//const bar = () => console.log("bar");
const baz = () => console.log("baz");

foo();
bar();
baz();
*/
/*
const first = () => console.log("first");
const second = () => setTimeout(() => console.log("second"), 2000);
const third = () => {
    console.log("third");
    Promise.resolve().then(() => console.log("third -Promise 1"));
    Promise.resolve().then(() => console.log("third -Promise 2"));
}
const fourd = () => console.log("fourd");
//очередность исполнения
first();
third();
fourd();
Promise.resolve(1);
Promise.resolve(2);
second();

console.log("start");
const promise1 = new Promise((resolve, reject) => {
    console.log( 1);
})
console.log("end");
*/
//очередь исполнения
//start();
//promise1();
//encodeURI();

/*
console.log('start');
const promise2 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
promise2.then(res => {
    console.log(res)
})
console.log('end')
*/
//очередь исполнения
//start();
//promise1();
//end();
//promise 2 (resolve);
/*
console.log('start');
const promise3 = new Promise((resolve, reject) => {
    console.log(1)
})
promise3.then(res => {
    console.log(res)
})
console.log('end')
*/
//очередь исполнения
//start();
//promise 1 ();
//end();
//promise 3 (ничго не ввыводит, т.к. нет значения resolve);

console.log('start');
const fn = () =>(new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
}))

    console.log('middle');
    
fn().then((res )=> {
        console.log(res);
    })
console.log('end');
//очередь исполнения
//start();
//middle();
//fn.pr 1
//end();
//success;

console.log('start')
Promise.resolve(1).then((res) => {
    console.log(res);
})
// new Promise((resolve, reject) => {
//     resolve(1)
// }).then((res) => {console.log(res)})
Promise.resolve(2).then((res) => {
    console.log(res);
})
console.log('end')
//очередь исполнения start, end, 1,  2;


const data = [];
const fetchData = () => {
    return Promise.resolve((res, rej) => {
        setTimeout(() => {
            data.push(
                {
                    id: 1,
                    name: 'John',
                    age: 30
                },
                {
                    id: 2,
                    name: 'Jane',
                    age: 25
                },
                {
                    id: 3,
                    name: 'Bob',
                    age: 20
                }
            );
            
            console.log('Data loaded');

            resolve (data)
        }, 0)
    })
}

const displayData = () => {
    data.forEach(item => {
        console.log(item)
    })
    console.log('Displaying data', data);
}
//fetchData();
//displayData();
fetchData().then(() => displayData());


function f1(){
console.log('f1');
}
    function f2(){
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("f2");
            }, 2000)
        })
    }
    function f3(){
        console.log('f3');
    }

f1();
f2().then(res => {
    console.log(res)
    f3();
})

let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
x.then(response => response.json()).then(data => console.log(data));
    
      
