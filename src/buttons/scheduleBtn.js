import { format } from "date-fns";



export default function scheduleButton(){

    const schedule = document.querySelector(".schedule")
    let date = new Date()
    let dateFormat = format(date,"yyyy-MM-dd")


    for(let x = 0; x < localStorage.length; x++){
        let pro = localStorage.key(x);
        const add = JSON.parse(localStorage.getItem(pro))
    
        for(let i = 0; i < add.length; i++){
            // if(add[i].date === dateFormat){
                const scheduleDay = document.createElement('div')
                scheduleDay.className = 'scheduleDay'
                schedule.append(scheduleDay)
            
                const scheduleList = document.createElement('div')
                scheduleList.className = 'scheduleList'
                scheduleDay.append(scheduleList)
            
                const scheduleListCheckbox = document.createElement('input')
                scheduleListCheckbox.type = 'checkbox'
                scheduleListCheckbox.id = 'scheduleListCheckbox'
                scheduleList.append(scheduleListCheckbox)
            
                const scheduleListName = document.createElement('div')
                scheduleListName.className = 'scheduleListName'
                scheduleList.append(scheduleListName)
                scheduleListName.textContent = add[i].description
            
                const scheduleListDate = document.createElement('div')
                scheduleListDate.className = 'scheduleListDate'
                scheduleList.append(scheduleListDate)
                scheduleListDate.textContent = add[i].date
            
                const scheduleListDelete = document.createElement('button')
                scheduleListDelete.className = 'scheduleListDelete'
                scheduleList.append(scheduleListDelete)
                
            // }
            scheduleListCheckbox.addEventListener("change",(event)=>{
                const isCheck = event.target.value;
                add[i].isCheck = isCheck
                localStorage.setItem(pro,JSON.stringify(add))
                add.pop(i)
                localStorage.setItem(pro,JSON.stringify(add))
                
            })
        }
    }
}