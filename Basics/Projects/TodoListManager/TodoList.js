let tasks = [];
let currentTaskInput = '-';
let currentTaskValue = '-';


function addTask(){
    currentTaskInput = document.getElementById('taskInput').value;
    var task = {
        id: `task${tasks.length}`,
        title: currentTaskInput,
        isCompleted: false
    }
    tasks.push(task);  
}

function deleteTask(){
    alert(`Deleted! ${taskId}`);
}

function updateTask(){
    alert(`Updated! ${taskId}`);
}

function render(){
    
}



