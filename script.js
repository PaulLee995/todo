const form = document.querySelector('#todolist');
const todoContent = document.querySelector('#todoContent');
const addTodo = document.querySelector('#addTodo');
const list = document.querySelector('#list');

addTodo.addEventListener('click', addList);

form.addEventListener('submit', addList);

const addList = (e) => {
    let todoText = todoContent.value;
    if (todoText === '') {
        alert("add a todo!");
    } else {
        let itemNode = document.createTextNode(todoText);
        let todoItem = document.createElement('li');
        todoItem.appendChild(itemNode);
        list.appendChild(todoItem);
    }

    e.preventDefault();
}