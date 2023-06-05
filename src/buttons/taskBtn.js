import render from "../function/render"
import project from "../pages/project"


export default function taskBtn(pro){
    // === Select the divs ===
    const container = document.querySelector("#container")
    const projectTaskSection = document.querySelector('.projectTaskSection')
    const projectDiv = document.querySelector('.projectDiv')
    const back = document.querySelector('.back')
    const taskList = document.querySelector('.taskList')
    const task = document.querySelector(".task")
    const taskInputCheck = document.querySelector('.taskInputCheck')
    let taskName = document.querySelector('.taskName')
    const taskDate = document.querySelector('.taskDate')
    const taskDelete = document.querySelector('.taskDelete')
    const taskAddPlus = document.querySelector('.taskAddPlus')
    const taskAddText = document.querySelector('.taskAddText');


    // === back button ===
    back.onclick = () =>{
        render()
        project()
    }

    
    
    const add = JSON.parse(localStorage.getItem(pro))


    // === Add new task input ===
    
    taskAddPlus.addEventListener("click",()=>{
        
        let text = taskAddText.value
        if(text.length < 1){
            alert("text too short")
            
        }else{
            add.push({isCheck: "", description: `${text}`, date: ""})
            localStorage.setItem(pro,JSON.stringify(add))
            taskAddText.value = ""
            
            
            
        }
        
       
    })

    //=== Display task ===
    for(let i = 0; i < add.length; i++){
        
        const task = document.createElement('div')
        task.className = "task"
        taskList.append(task)

        const taskInputCheck = document.createElement('input')
        taskInputCheck.type = 'checkbox'
        taskInputCheck.id = "taskInputCheck"
        task.append(taskInputCheck)

        const taskName = document.createElement('div')
        taskName.className = "taskName"
        task.append(taskName)
        taskName.textContent = add[i].description
        

        const taskDate = document.createElement('input')
        taskDate.type = 'date'
        taskDate.id = "taskDate"
        task.append(taskDate)
        
        const taskDelete = document.createElement('button')
        taskDelete.className = "taskDelete"
        task.append(taskDelete)

        const img = document.createElement('img')
        img.className = 'img'
        taskDelete.append(img)
        img.src = '/src/images/system-outline-39-trash.svg'
        

        // === task input checkbox
        taskInputCheck.addEventListener("change",(event)=>{
            const isCheck = event.target.value;
            add[i].isCheck = isCheck
            localStorage.setItem(pro,JSON.stringify(add))
            add.pop(i)
            localStorage.setItem(pro,JSON.stringify(add))
            
        })
        
        // === task date input
        taskDate.addEventListener('input',(event)=>{
            const selectedDate = event.target.value;
            add[i].date = selectedDate
            localStorage.setItem(pro,JSON.stringify(add))
            
        })

        // === task delete button ===
        taskDelete.addEventListener("click",()=>{
            add.pop(i)
            localStorage.setItem(pro,JSON.stringify(add))
        })
        
    }
    
       

}