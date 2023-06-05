const header = () =>{
    const container = document.querySelector('#container')

    const nav = document.createElement("nav")
    nav.className = 'nav'
    container.append(nav)

    const navLeft = document.createElement('div')
    navLeft.className = 'navLeft'
    nav.append(navLeft)

    const logoName = document.createElement('div')
    logoName.className  = 'logoName'
    navLeft.append(logoName)
    logoName.innerHTML = 'To-<span>Do</span>-List'

    const navRight = document.createElement('div')
    navRight.className = 'navRight'
    nav.append(navRight)

    const todayBtn = document.createElement('button')
    todayBtn.className = 'todayBtn'
    navRight.append(todayBtn)
    todayBtn.textContent = 'Today'

    const scheduleBtn = document.createElement('button')
    scheduleBtn.className = 'scheduleBtn'
    navRight.append(scheduleBtn)
    scheduleBtn.textContent = 'Schedule'

    const projectBtn = document.createElement('button')
    projectBtn.className = 'projectBtn'
    navRight.append(projectBtn)
    projectBtn.textContent = 'Project'

}

export default header;