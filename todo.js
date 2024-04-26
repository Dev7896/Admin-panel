document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-items');
    const addButton = document.getElementById('add-button');
    const inputField = document.getElementById('todo-input');
  
    addButton.addEventListener('click', function() {
      const todoText = inputField.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        inputField.value = '';
      }
    });
  
    todoList.addEventListener('click', function(event) {
      const clickedElement = event.target;
      if (clickedElement.classList.contains('cancel-button')) {
        clickedElement.parentNode.remove();
      } else if (clickedElement.tagName === 'SPAN') {
        const checkbox = clickedElement.previousElementSibling;
        checkbox.checked = !checkbox.checked;
      }
    });
  
    todoList.addEventListener('change', function(event) {
      const changedElement = event.target;
      if (changedElement.type === 'checkbox') {
        const cancelButton = changedElement.nextElementSibling;
        cancelButton.disabled = !changedElement.checked;
      }
    });
  
    function addTodoItem(text) {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const todoText = document.createElement('span');
      todoText.textContent = text;
  
      const cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.classList.add('cancel-button');
      // cancelButton.disabled = true; // Initially disabled
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(todoText);
      todoItem.appendChild(cancelButton);
  
      todoList.appendChild(todoItem);
    }
  });
  