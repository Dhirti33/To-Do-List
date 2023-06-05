export default function render(){
    const container = document.querySelector('#container')
    container.style = ""
    while(container.children.length > 1){
        container.children[1].remove();
    }
}