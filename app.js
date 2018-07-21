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
  //me load DPM document
  document.addEventListener('DOMContentLoaded', ambilTask)

//nambah task
  form.addEventListener('submit', addTask);

//menghapus task
  taskList.addEventListener('click', removeTask);
  
//hapus smua task
clearBtn.addEventListener('click', clearTask);

//filter task
filter.addEventListener('keyup', filterTask);
}
 
function ambilTask(){
  let tasks;
    if (localStorage.getItem('tasks')=== null){
      tasks = [];
    } else {
      tasks = JSON.parse( localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
      //membuat element li
  const li = document.createElement ('li');

  //membuat nama class untuk li
  li.className = 'collection-item';

  //text node dan append ke li
  li.appendChild(document.createTextNode(task))

  //buat link
  const link = document.createElement('a');

  //tambah class ke link
  link.className = 'delete-item secondary-content';
  
  //tambah icon html
  link.innerHTML = '<i class ="fa fa-remove"></i>';

  li.appendChild(link);

  //masukan li ke ul
  taskList.appendChild(li)
    })
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

  //local storage
  storeInLocalStorage(taskInput.value);

  //bersihkan input
  taskInput.value = '';


    // console.log (li)
    e.preventDefault();
  }

  function storeInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks')=== null){
      tasks = [];
    } else {
      tasks = JSON.parse( localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  function removeTask(e){

    if (e.target.className=='fa fa-remove'){
     // console.log (e.target)
     if (confirm('apakah ini akan di hapus')){
      e.target.parentElement.parentElement.remove();

      //hapus dari LS
      hapusDariLocalStorage(e.target.parentElement.parentElement)

     }
    }
  }

  //hapus dari LD
  function hapusDariLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks')=== null){
      tasks = [];
    } else {
      tasks = JSON.parse( localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task,index){
      if (taskItem.textContent === task){
        tasks.splice(index,1)
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
    

  function clearTask() {
    //taskList.innerHTML = '';

    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild)
    }

    //hapus task dari LS
    bersihkanTaskLocalSotage();
  }

  function bersihkanTaskLocalSotage(){
    localStorage.clear()
  }

function filterTask (e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(tsk){
    let item = tsk.firstChild.textContent;
    if (item.toLowerCase().indexOf(text)!=-1){
      tsk.style.display = 'block'
    }else{
      tsk.style.display = 'none'
    }
    // console.log(item)
  })
}