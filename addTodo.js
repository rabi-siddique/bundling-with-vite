import './logoContainer';
import Swal from 'sweetalert2';

document.getElementById('todo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.getElementById('new-task');
  if (newTaskInput.value.trim() !== '') {
    addTask(newTaskInput.value.trim());
    newTaskInput.value = '';
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: 'Your task has been added.',
      timer: 1500,
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a task!',
    });
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
    Swal.fire({
      icon: 'info',
      title: 'Deleted!',
      text: 'Your task has been removed.',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  li.appendChild(deleteButton);
  list.appendChild(li);

  li.addEventListener('click', () => {
    li.classList.toggle('done');
    Swal.fire({
      icon: 'info',
      title: 'Status Changed!',
      text: 'Your task status has been toggled.',
      timer: 1500,
      showConfirmButton: false,
    });
  });
};
