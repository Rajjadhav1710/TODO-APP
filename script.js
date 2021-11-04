// SELECT ELEMENTS
const newTask = document.getElementById("new_task");
const addButton = document.getElementById("add_button");
const todoList = document.getElementById("todo_list");
const completedTasksList = document.getElementById("completed_tasks_list");
const saveButton = document.querySelector(".save-button");
newTask.focus();

// USER DETAILS

window.onload = function(){
    if(localStorage.getItem("todoListString") !== null){
        let todoListArray;
        todoListArray = localStorage.getItem("todoListString").split("🗸🖉X@");

        for(let i=0;i<todoListArray.length-1;i++){
            let li = document.createElement("li");
        let taskCompleteButton = document.createElement("button");
        let taskEditButton = document.createElement("button");
        let taskDeleteButton = document.createElement("button");

        li.appendChild(document.createTextNode(todoListArray[i]));
        taskCompleteButton.innerHTML = "KILL";
        taskEditButton.innerHTML = "EDIT";
        taskDeleteButton.innerHTML = "X";

        taskCompleteButton.addEventListener("click",function(evt){
            let completedTask = todoList.removeChild(evt.target.parentNode);
            completedTask.removeChild(evt.target);
            completedTask.removeChild(completedTask.lastChild);
            completedTask.removeChild(completedTask.lastChild);
            completedTasksList.appendChild(completedTask);
        });

        taskEditButton.addEventListener("click",function(evt){
            let editedTask = prompt("Edit Your Task.",evt.target.parentNode.firstChild.textContent);
            if(editedTask !== "" && editedTask !== null){
                evt.target.parentNode.firstChild.textContent = editedTask;
            }
        });

        taskDeleteButton.addEventListener("click",function(evt){
            todoList.removeChild(evt.target.parentNode);
        });
        li.appendChild(taskCompleteButton);
        li.appendChild(taskEditButton);
        li.appendChild(taskDeleteButton);
        todoList.appendChild(li);
        newTask.value="";
        newTask.focus();
        }
    }

    if(localStorage.getItem("completedTasksListString") !== null){
        let completedTasksListArray;
        completedTasksListArray = localStorage.getItem("completedTasksListString").split("@");

        for(let i=0;i<completedTasksListArray.length-1;i++){
            let li = document.createElement("li");
        

        li.appendChild(document.createTextNode(completedTasksListArray[i]));
      

        
        completedTasksList.appendChild(li);
        newTask.value="";
        newTask.focus();
        }
    }
}


// CONTROLS
addButton.addEventListener("click",function(){
    if(newTask.value !== ""){
        let li = document.createElement("li");
        let taskCompleteButton = document.createElement("button");
        let taskEditButton = document.createElement("button");
        let taskDeleteButton = document.createElement("button");

        li.appendChild(document.createTextNode(newTask.value));
        taskCompleteButton.innerHTML = "KILL";
        taskEditButton.innerHTML = "EDIT";
        taskDeleteButton.innerHTML = "X";

        taskCompleteButton.addEventListener("click",function(evt){
            let completedTask = todoList.removeChild(evt.target.parentNode);
            completedTask.removeChild(evt.target);
            completedTask.removeChild(completedTask.lastChild);
            completedTask.removeChild(completedTask.lastChild);
            completedTasksList.appendChild(completedTask);
        });

        taskEditButton.addEventListener("click",function(evt){
            let editedTask = prompt("Edit Your Task.",evt.target.parentNode.firstChild.textContent);
            if(editedTask !== "" && editedTask !== null){
                evt.target.parentNode.firstChild.textContent = editedTask;
            }
        });

        taskDeleteButton.addEventListener("click",function(evt){
            todoList.removeChild(evt.target.parentNode);
        });
        li.appendChild(taskCompleteButton);
        li.appendChild(taskEditButton);
        li.appendChild(taskDeleteButton);
        todoList.appendChild(li);
        newTask.value="";
        newTask.focus();
    }
});

saveButton.addEventListener("click",function(){
    let todoListString="",completedTasksListString="";
    let todoListArray,completedTasksListArray;

    todoListArray = document.querySelectorAll(".todo-list li");
    completedTasksListArray = document.querySelectorAll(".completed-tasks-list li");

    for(let i=0;i<todoListArray.length;i++){
        todoListString+=todoListArray[i].innerText+"@";
    }

    for(let i=0;i<completedTasksListArray.length;i++){
        completedTasksListString+=completedTasksListArray[i].innerText+"@";
    }

    localStorage.setItem("todoListString",todoListString);
    localStorage.setItem("completedTasksListString",completedTasksListString);
});
