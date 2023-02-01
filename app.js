
const addTaskBtn = document.querySelector('#add-task-btn');
const addTaskModal = document.querySelector('#task-modal');
const closeTaskModal = document.querySelector('#task-modal-close-btn');
const returnValue = document.querySelector('#return-value');
const newTaskName = document.querySelector('#name');
const newTaskPriority = document.querySelector('#priority');
const newTaskDescripton = document.querySelector('#description');

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

returnValue.addEventListener('click', () => {
    const data = new NewTask(newTaskName.value,newTaskPriority.value,newTaskDescripton.value)
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:kqY7L_VS/task_app_db', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
})