// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//memanggil semua eventlistener
loadEvenListener();


//fungsi eventlistener
function loadEvenListener () {
  form.addEventListener('submit', addTask);
}


//fungsi tambah task
  function addTask (e) {
    if (taskInput.value === '') {
    alert ('Add task')
  }

  //membuat element li
  const li = document.createElement ('li');

  //membuat nama class untuk li
  li.className = 'collection-item';

  //text node dan append ke li
  li.appendChild(document.createTextNode(taskInput.value))

  //buat link
  const link = document.createElement('a');

  //tambah class ke link
  link.className = 'delete-item secondary-content';
  
  //tambah icon html
  link.innerHTML = '<i class ="fa fa-remove"></i>';

  li.appendChild(link);

  //masukan li ke ul
  taskList.appendChild(li)

  //bersihkan input
  taskInput.value = '';


    console.log (li)
    e.preventDefault();
  }

