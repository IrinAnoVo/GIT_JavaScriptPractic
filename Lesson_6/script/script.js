const API_URL = 'https://jsonplaceholder.typicode.com/todos'

let state = {
    todos: [] // [{}, {}, {}, ...]
}

async function fetchTodoData() {
    try {
    let response = await fetch(API_URL)
    let data = await response.json()

    return data
    }catch(error) {
        console.log('Это моя ошибка. This is my error');       
    }
}

function createElement(todos = state.todos) {
    let todosContent = document.querySelector('.todo')

    todos.forEach(item => { 
        // let todoElement = document.createElement("li"); // <li> </li>
        // todoElement.classList.add("todo__item");
        // todoElement.innerText = item.title;
        // todosContent.append(todoElement)    
        todosContent.insertAdjacentHTML(
           'beforeend',
           `<li class="todo_item">${item.title}</li>`
           //`<li class="todo__item">${item.title} <button onclick="removeTodoElement(${item.id})">remove</button></li>`
        )
    });    
}
/*
function removeTodoElement(todoId){
    console.log(state.todos.length)
    state.todos = state.todos.filter(item => item.id !== todoId)
    console.log(state.todos.length)

    createElement()
}
*/
async function render() {
    let data = await fetchTodoData()
    state.todos = data; // []

    createElement(data);   
}
render()


fetchTodoData() //вне консоли
console.log(fetchTodoData()); //в консоли

function func(x = 10){
    return x;
}
func()