import "./styles.css";

const addTask = document.querySelector(".add");
const dialog = document.querySelector("dialog");
const close = document.querySelector("#close");
const confirm = document.querySelector("#confirm");
const dialogProject = document.getElementById("dialog-project");
const addProjectBtn = document.querySelector(".add-project");
const confirmProject = document.querySelector("#confirmProject");


const tasks = [];


class Task {
    constructor(title, dueDate, priority){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(name){
        this.name = name;
    }
}

addTask.addEventListener("click", function(){
    dialog.showModal();
});

confirm.addEventListener("click", function() {
    let nameOfTask = document.querySelector("#title").value;
    let date = document.querySelector("#date").value;
    let importance = document.querySelector("select").value;

    const task1 = new Task(nameOfTask, date, importance);
    tasks.push(task1);

    let outputDiv = document.createElement("div");
    outputDiv.classList.add("outputDiv");
    
    tasks.forEach(task => {
        outputDiv.innerHTML = `
        <h3 class="task-name">${task.title}</h3>
        <div class="date">${task.dueDate}</div>
        <div class="date">${task.priority}</div>
        `;
        document.querySelector(".tasks").appendChild(outputDiv);
    });

    dialog.close();
    formReset();

});

function formReset(){
    let nameOfTask = document.querySelector("#title");
    let date = document.querySelector("#date");
    let importance = document.querySelector("select");

    nameOfTask.value = "";
    date.value = "";
    importance.value = "";
}



close.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});





addProjectBtn.addEventListener("click", function(){
    dialogProject.showModal();
});

confirmProject.addEventListener("click", function(){
    let projects = [];
    let projectList = document.querySelector(".project-list");
    let nameOfProject = new Project(document.querySelector("#project-name").value);
    projects.push(nameOfProject);

    let projectDiv = document.createElement("div");

    projects.forEach(project => {
        projectDiv.innerHTML = `
        <button class="button-project">
            # ${project.name}
       </button>
    `;
    projectList.appendChild(projectDiv);
    })
    dialogProject.close();
    projectReset();
});

function projectReset(){
    document.querySelector("#project-name").value = "";
}
