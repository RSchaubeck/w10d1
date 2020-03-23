const todos = JSON.parse(localStorage.getItem("todos")) || [];
let todoList = document.querySelector(".todos");
const addTodoForm = document.querySelector(".add-todo-form");

function addTodo(event) {
    // debugger
    event.preventDefault();
    let todoItem = document.querySelector("[name=add-todo]");
    const todoObject = {
        "value": todoItem.value,
        "done": false
    };
    todos.push(todoObject);
    populateList(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    addTodoForm.reset();
}



function populateList(todos) {
    // const child = document.ge
    // todoList.removeChild(document.getElementsByTagName("li"));
    todos.map(element => {
        const label = document.createElement("label");
        label.innerHTML = element["value"];
        const inputTag = document.createElement("input");
        inputTag.setAttribute("type","checkbox");
        const liTag = document.createElement("li");
        liTag.appendChild(label);
        liTag.appendChild(inputTag);
        // debugger
        return todoList.appendChild(liTag);
    });
    // const label = document.createElement("label");
    // label.innerHTML = todos["value"];
    // const inputTag = document.createElement("input");
    // inputTag.setAttribute("type", "checkbox");
    // const liTag = document.createElement("li");
    // liTag.appendChild(label);
    // liTag.appendChild(inputTag);
    // todoList.appendChild(liTag);
}

addTodoForm.addEventListener("submit", addTodo);