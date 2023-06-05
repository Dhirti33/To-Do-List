
import addNewProject from "../buttons/projectBtn"

export default function project(){
    const container = document.querySelector('#container')

    const projectContainer = document.createElement('div')
    projectContainer.className = 'projectContainer'
    container.append(projectContainer)


    const projectSection = document.createElement('div')
    projectSection.className = 'projectSection'
    projectContainer.append(projectSection)

    const projectAddList = document.createElement('div')
    projectAddList.className = 'projectAddList'
    projectSection.append(projectAddList)

    const newProject = document.createElement('button')
    newProject.className = 'newProject'
    projectAddList.append(newProject)
    newProject.textContent = 'Add Project'

    const project = document.createElement('div')
    project.className = 'project'
    projectSection.append(project)

    const addProject = document.createElement('div')
    addProject.className = 'addProject'
    projectContainer.append(addProject)
    addProject.style.display = 'none'

    const newProjectName = document.createElement('input')
    newProjectName.className = 'newProjectName'
    addProject.append(newProjectName)

    const addProjectBtn = document.createElement('div')
    addProjectBtn.className = 'addProjectBtn'
    addProject.append(addProjectBtn)

    const projectCancel = document.createElement('button')
    projectCancel.className = 'projectCancel'
    addProjectBtn.append(projectCancel)
    projectCancel.textContent = 'Cancel'

    const projectCreateNew = document.createElement('button')
    projectCreateNew.className = 'projectCreateNew'
    addProjectBtn.append(projectCreateNew)
    projectCreateNew.textContent = 'CreateNew'

   addNewProject();

}

