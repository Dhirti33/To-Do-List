import '../src/styles/project.css'
import '../src/styles/task.css'
import '../src/styles/schedule.css'
import '../src/styles/today.css'
import firstLoad from "./function/firstLoad";
import header from "./pages/header";
import project from "./pages/project";
import schedule from "./pages/schedule";
import render from './function/render';
import today from './pages/today';


firstLoad();

const todayBtn = document.querySelector('.todayBtn')
const scheduleBtn = document.querySelector('.scheduleBtn')
const projectBtn = document.querySelector('.projectBtn')

todayBtn.addEventListener("click",()=>{
    render();
    today();
})

scheduleBtn.addEventListener("click",()=>{
    render();
    schedule();
})

projectBtn.addEventListener("click",()=>{
    render();
    project();
})
