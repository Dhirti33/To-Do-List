// ================================== Project Logic ===================================
// === Import Functions ===
import task from "../pages/task";
import render from "../function/render";
import "../styles/project.css";
import todayBtn from "./todayBtn";

// === Export the add new project ===
export default function addNewProject() {
    const newProject = document.querySelector(".newProject");
    const addProject = document.querySelector(".addProject");

    // === Display the add new project ===
    newProject.addEventListener("click", () => {
        if (addProject.style.display === "none") {
        addProject.style.display = "block";
        }
    });
    const project = [];
    let newProjectName;

    const projectCreateNew = document.querySelector(".projectCreateNew");
    // === When the create new button is clicked, it create a project with the name specified in the local storage ===
    projectCreateNew.addEventListener("click", () => {
        // === Hides the add project Div ==
        if (addProject.style.display === "block") {
        addProject.style.display = "none";
        }

        newProjectName = document.querySelector(".newProjectName").value;

        localStorage.setItem(`${newProjectName}`, JSON.stringify(project));

        location.reload()
    });

    // === hides the div when the cancel button is clicked ===
    const projectCancel = document.querySelector(".projectCancel");
    projectCancel.addEventListener("click", () => {
        if (addProject.style.display === "block") {
        addProject.style.display = "none";
        }
    });

    //====== Loop through the localStorage and display them =====
    let projectList;
    for (let i = 0; i < localStorage.length; i++) {
        let pro = localStorage.key(i);

        const project = document.querySelector(".project");

        // ====== create project Div ======
        projectList = document.createElement("div");
        projectList.className = "projectList";
        project.append(projectList);

        const projectDiv = document.createElement("div");
        projectDiv.className = "projectDiv";
        projectList.append(projectDiv);
        

        const projectName = document.createElement("div");
        projectName.className = "projectName";
        projectList.append(projectName);
        projectName.textContent = pro;

        // === When double clicked open the clicked project task ===
        projectDiv.addEventListener("dblclick",()=>{
            render();
            task(pro);
            
        })

    }

    // for(let x = 0; x < )
  
}
