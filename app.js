
const addTaskBtn = document.querySelector('#add-task-btn');
const addTaskModal = document.querySelector('#task-modal');
const closeTaskModal = document.querySelector('#task-modal-close-btn');
const returnValue = document.querySelector('#return-value');
const newTaskName = document.querySelector('#name');
const newTaskPriority = document.querySelector('#priority');
const newTaskDescripton = document.querySelector('#description');

const activeTask = [];

// open task modal
addTaskBtn.addEventListener('click', () => {
    addTaskModal.showModal();
})
// close task modal
closeTaskModal.addEventListener('click', () => {
    addTaskModal.close();
})

//task class
class NewTask {
    constructor(name,priority,description) {
        this.name = name;
        this.priority = priority;
        this.description = description;
    }
}

// instead of pushing to array these results need push to db.
returnValue.addEventListener('click', () => {
    activeTask.push(new NewTask(newTaskName.value,newTaskPriority.value,newTaskDescripton.value))
    console.log(activeTask)
    newTaskName.value = '';
    newTaskPriority.value = '';
    newTaskDescripton.value = '';
})