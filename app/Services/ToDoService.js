import { ProxyState } from "../AppState.js";
import ToDo from "../Models/ToDo.js";
import { sandApi } from "./AxiosService.js";

class ToDoService{
    constructor(){
        console.log("ToDo Service")
        this.getToDo()
    }

    async getToDo(){
        try {
            const res = await sandApi.get('pyrah/todos')
            ProxyState.toDos = res.data.map(rawToDo => new ToDo(rawToDo))
            console.log(ProxyState.toDos)
        } catch (error) {
            console.error(error)
        }
    }

    async createTask(rawToDo){
        try {
            const res = await sandApi.post('pyrah/todos/', rawToDo)
            this.getToDo();
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    async markComplete(id){
        let task = ProxyState.toDos.find(task => task.id === id)
        if(task.completed == false){
            task.completed = true
        }else{
            task.completed = false
        }
        try {
            const res = await sandApi.put('pyrah/todos/' + id, task)
            this.getToDo();
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    async deleteTask(id){
        try {
            const res = await sandApi.delete('pyrah/todos/' + id)
            this.getToDo();
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }
}

export const toDoService = new ToDoService();