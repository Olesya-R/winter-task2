let tasks = document.getElementById('tasks-added')
let addBoard = document.getElementById('add-board')


document.getElementById('add-task').addEventListener('click', function() {
    let taskValue = document.getElementById('task-value').value
    if (taskValue) addTask(taskValue)
    document.getElementById('task-value').value = ''
})

//Task functions

//add task
const addTask = (taskValue) => {
    let task = document.createElement('li')
    task.classList.add('task')
    task.classList.add('fill')
    task.draggable = true
    task.addEventListener('dragstart', dragStart)
    task.addEventListener('dragend', dragEnd)

    let taskContent = document.createElement('div')
    taskContent.classList.add('task-content')
    taskContent.innerText = taskValue
      
    let trash = document.createElement('div')
    trash.classList.add('trash')
    trash.innerText = 'X'
    trash.addEventListener('click', removeTask)

    task.appendChild(taskContent)
    task.appendChild(trash)
    
    let tasks = document.getElementById('tasks-added')
    tasks.prepend(task)
    //toLocal()
}



// //local storage

// let todos
// function toLocal() {
//     //let tasks = document.getElementById('tasks-added')
//     todos = tasks.innerHTML
//     localStorage.setItem('todos', todos)
// }


//remove task
const removeTask = (event) => {
    let task = event.target.parentNode
    task.remove()
    //toLocal()
}

// if (localStorage.getItem('todos')) {
//     //let tasks = document.getElementById('tasks-added')
//     tasks.innerHTML = localStorage.getItem('todos')
// }



//add board

function addBoards() {
    const boards = document.querySelector('.columns')
    const board = document.createElement('div')
    const boardValue = document.querySelector('.board-value').value

    board.classList.add('column', 'dropzone')
    board.innerHTML = `
        <h3 class="column-title" contenteditable="true">${boardValue}</h3>
        <ul class="tasks" id="tasks-added">
        </ul>           
    `
    boards.append(board)

}

addBoard.addEventListener('click', addBoards)





//Drag&Drop

let task

const dragStart = (event) => {
    //console.log('start')
    event.target.className += ' hold'
    task = event.target
    setTimeout(() => (event.target.className = 'invisible'), 0)
}


const dragEnd = () => {
    //console.log('end')
    event.target.className = 'task fill'
}

const dropzones = document.querySelectorAll('.dropzone')
//console.log(dropzones)

const dragEnter = (event) => {
    event.preventDefault()
    if (event.target.className === 'column dropzone') {
        event.target.className += ' hovered'
    }
} 

const dragOver = (event) => {
    event.preventDefault()
}

const dragLeave = () => {
    if (event.target.className === 'column dropzone hovered') {
        event.target.className += 'column dropzone'
    }

} 

const dragDrop = (event) => {
    if (event.target.className === 'column dropzone hovered') {
        event.target.className += 'column dropzone'
    }
    event.target.append(task)
} 

for(const dropzone of dropzones) {
    dropzone.addEventListener('dragenter', dragEnter)
    dropzone.addEventListener('dragover', dragOver)
    dropzone.addEventListener('dragleave', dragLeave)
    dropzone.addEventListener('drop', dragDrop)

}




 
