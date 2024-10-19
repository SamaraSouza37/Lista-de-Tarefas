function addTarefa(){
    const taskTitle = document.querySelector('#task-title').value;
    if(taskTitle) {
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);

        newTask.querySelector('.task-title').textContent = taskTitle;

        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        const removeBtn = newTask.querySelector('#remove-btn').addEventListener('click', function(){
            removeTask(this);
        });

        
        const doneBtn = newTask.querySelector('#add-btn').addEventListener('click', function(){
            completeTask(this);
        });

        document.querySelector('#task-title').value = ""

    }
}

function removeTask(task){
    task.parentNode.remove(true);
}

function completeTask(task){
    const taskComplete = task.parentNode;
    taskComplete.classList.toggle('done');
}

const addTask = document.querySelector('#add-task');

addTask.addEventListener('click', function(e){
    e.preventDefault();

    addTarefa();
})

addTask.addEventListener('keydown', function(e){
    if(e.key = 'Enter'){
        addTarefa()
    }
})