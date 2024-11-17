document.getElementById('todo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.getElementById('new-task');
  if (newTaskInput.value.trim() !== '') {
    addTask(newTaskInput.value.trim());
    newTaskInput.value = '';
  }
});

const addTask = (task) => {
  const list = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = () => {
    list.removeChild(li);
  };

  li.appendChild(deleteButton);
  list.appendChild(li);

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });
};
