
import todayButton from "../buttons/todayBtn"
    

export default function today(){    
    

    const container = document.querySelector('#container')

    const todayContainer = document.createElement('div')
    todayContainer.className = 'todayContainer'
    container.append(todayContainer)
    todayContainer.style.border = '1px solid black'


    const todaySection = document.createElement('div')
    todaySection.className = 'todaySection'
    todayContainer.append(todaySection)

    const today = document.createElement('div')
    today.className = 'today'
    todaySection.append(today)


    todayButton()
}