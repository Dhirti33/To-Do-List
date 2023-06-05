import { format } from "date-fns";



export default function todayButton(){

    const today = document.querySelector(".today")
    const todaySection = document.querySelector(".todaySection")
    let date = new Date()
    let dateFormat = format(date,"yyyy-MM-dd")

        for(let x = 0; x < localStorage.length; x++){
            let pro = localStorage.key(x);
            const add = JSON.parse(localStorage.getItem(pro))
        
            for(let i = 0; i < add.length; i++){
    
                if(add[i].date === dateFormat){
                
                    const todayList = document.createElement('div')
                    todayList.className = 'todayList'
                    today.append(todayList)
    
                    const todayListCheckbox = document.createElement('input')
                    todayListCheckbox.type = 'checkbox'
                    todayListCheckbox.id = 'todayListCheckbox'
                    todayList.append(todayListCheckbox)
    
                    const todayListName = document.createElement('div')
                    todayListName.className = 'todayListName'
                    todayList.append(todayListName)
                    todayListName.textContent = add[i].description
    
                    const todayListDate = document.createElement('div')
                    todayListDate.className = 'todayListDate'
                    todayList.append(todayListDate)
                    todayListDate.textContent = add[i].date
    
    
                    const todayListDelete = document.createElement('button')
                    todayListDelete.className = 'todayListDelete'
                    todayList.append(todayListDelete)
    
                    todayListCheckbox.addEventListener("change",(event)=>{
                        const isCheck = event.target.value;
                        add[i].isCheck = isCheck
                        localStorage.setItem(pro,JSON.stringify(add))
                        add.pop(i)
                        localStorage.setItem(pro,JSON.stringify(add))
                        
                    })
    
                }
            }
        }
    if(today.innerHTML === ""){
            const emoji = document.createElement('img')
            emoji.className = "emoji"
            todaySection.append(emoji)

            const addText = document.createElement('div')
            addText.className = "addText"
            text.append(addText)
            addText.textContent = "No task Today"

    }
    
        
}