import { ProxyState } from "../AppState.js";
import { toDoService } from "../Services/ToDoService.js"

function _drawTask(){
    let task = ProxyState.toDos
    let template = ''
    task.forEach(task => template += task.Template)
    document.getElementById("task").innerHTML = template
}

export default class ToDoController{
    constructor(){
        console.log("To Do Controller")
        ProxyState.on('toDos', _drawTask)
    }

    createTask(event){
        event.preventDefault();
        let form = event.target
        let rawToDo = {
            description: form.description.value,
        }
        toDoService.createTask(rawToDo)
        console.log(ProxyState.toDos)
    }

    markComplete(id){
        toDoService.markComplete(id)
    }

    deleteTask(id){
        toDoService.deleteTask(id)
    }
}