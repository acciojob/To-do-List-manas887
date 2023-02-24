//your code here
let todoInput = document.getElementById('newTodoInput');
let todoList = document.getElementById('todoList');

function addTodo() {
  let todoText = todoInput.value;
  if (todoText.trim() === '') {
    alert('Please enter a valid todo item');
    return;
  }
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(todoText));
  todoList.appendChild(li);
  todoInput.value = '';
}
