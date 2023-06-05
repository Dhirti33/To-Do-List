import scheduleButton from "../buttons/scheduleBtn"



export default function schedule(){

    const container = document.querySelector('#container')

    const scheduleContainer = document.createElement('div')
    scheduleContainer.className = 'scheduleContainer'
    container.append(scheduleContainer)
    scheduleContainer.style.border = '1px solid black'


    const scheduleSection = document.createElement('div')
    scheduleSection.className = 'scheduleSection'
    scheduleContainer.append(scheduleSection)

    const schedule = document.createElement('div')
    schedule.className = 'schedule'
    scheduleSection.append(schedule)

    // const day = document.createElement('label')
    // day.className = 'day'
    // scheduleDay.append(day)
    // day.textContent = 'Today'

    const scheduleAddList = document.createElement('div')
    scheduleAddList.className = "scheduleAddList"
    scheduleSection.append(scheduleAddList)

    const scheduleAddText = document.createElement('input')
    scheduleAddText.type = 'text'
    scheduleAddText.placeholder = 'Text here....'
    scheduleAddText.className = "scheduleAddText"
    scheduleAddList.append(scheduleAddText)

    const scheduleAddPlus = document.createElement('div')
    scheduleAddPlus.className = "scheduleAddPlus"
    scheduleAddList.append(scheduleAddPlus)

    scheduleButton();
}