import taskBtn from "../buttons/taskBtn"



export default function task(pro){

    const container = document.querySelector('#container')

    const projectContainer = document.createElement('div')
    projectContainer.className = 'projectContainer'
    container.append(projectContainer)

   
    const projectTaskSection = document.createElement('div')
    projectTaskSection.className = 'projectTaskSection'
    projectContainer.append(projectTaskSection)

    const projectTaskNav = document.createElement('div')
    projectTaskNav.className = 'projectTaskNav'
    projectTaskSection.append(projectTaskNav)

    const back = document.createElement('button')
    back.className = 'back'
    projectTaskNav.append(back)
    back.textContent = 'back'

    const taskProjectName = document.createElement('div')
    taskProjectName.className = 'taskProjectName'
    projectTaskNav.append(taskProjectName)
    taskProjectName.textContent = pro

    const taskSearch = document.createElement('div')
    taskSearch.className = 'taskSearch'
    projectTaskNav.append(taskSearch)
    
    

    const taskList = document.createElement('div')
    taskList.className = 'taskList'
    projectTaskSection.append(taskList)

    const addTask = document.createElement('div')
    addTask.className = "addTask"
    projectTaskSection.append(addTask)

    const taskAddText = document.createElement('input')
    taskAddText.type = 'text'
    taskAddText.placeholder = 'Text here....'
    taskAddText.className = "taskAddText"
    addTask.append(taskAddText)

    const taskAddPlus = document.createElement('div')
    taskAddPlus.className = "taskAddPlus"
    addTask.append(taskAddPlus)

    



    taskBtn(pro);
    
}