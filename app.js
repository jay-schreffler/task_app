
const addTaskBtn = document.querySelector('#add-task-btn');
const addTaskModal = document.querySelector('#task-modal');
const closeTaskModal = document.querySelector('#task-modal-close-btn');
const returnValue = document.querySelector('#return-value');
const newTaskName = document.querySelector('#name');
const newTaskPriority = document.querySelector('#priority');
const newTaskDescripton = document.querySelector('#description');
const taskviewContainer = document.querySelector('#taskview-container');

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

//send data to db
returnValue.addEventListener('click', () => {
    const data = new NewTask(newTaskName.value,newTaskPriority.value,newTaskDescripton.value)
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:kqY7L_VS/task_app_db', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    newTaskName.value = '';
    newTaskPriority.value = '';
    newTaskDescripton.value ='';
    document.location.reload()
})

//fetch call to get data
const loadTasks = () => {
   fetch('https://x8ki-letl-twmt.n7.xano.io/api:kqY7L_VS/task_app_db') 
   .then((res) => res.json())
   .then((data) => {
       console.log(data);
       for(let i = 0; i < data.length; i++) {
           //task card container
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('task-card-container');
        taskviewContainer.append(cardContainer);
        //card-title-bar
        const cardTitleBar = document.createElement('div');
        cardContainer.append(cardTitleBar);
        cardTitleBar.classList.add('card-title-bar');
        //card-priority-status
        const cardPriorityStatusContainer = document.createElement('div');
        cardPriorityStatusContainer.classList.add('card-priority-status');
        cardTitleBar.append(cardPriorityStatusContainer);
        const taskPriority = document.createElement('h2');
        cardPriorityStatusContainer.append(taskPriority);
        taskPriority.textContent = data[i].priority
        //task title
        const taskTitle = document.createElement('h2');
        taskTitle.classList.add('card-title');
        cardTitleBar.append(taskTitle);
        taskTitle.textContent = data[i].name;
        //card description
        const cardBodyContainer = document.createElement('div');
        cardBodyContainer.classList.add('card-body');
        cardContainer.append(cardBodyContainer);
        //p tag
        const cardDescription = document.createElement('p');
        cardBodyContainer.append(cardDescription);
        cardDescription.textContent = data[i].description;
        //edit button
        const cardBtnContainer = document.createElement('div');
        cardBtnContainer.classList.add('card-btn-container');
        cardContainer.append(cardBtnContainer);
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        cardBtnContainer.append(editBtn)
        editBtn.textContent = 'Edit'
        //delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        cardBtnContainer.append(deleteBtn);
        deleteBtn.textContent = 'Delete'
       }

   })
   .catch((err) => console.log(err));
}

loadTasks();
