import { ProxyState } from "../AppState.js"

export default class ToDo{
    constructor(data){
        this.description = data.description
        this.id = data.id || data._id
        this.completed = data.completed
    }

    get Template(){
        return /*html*/ `
        <div class="col-12">
            <div class="form-check">
                <label class="form-check-label m-2">
                    <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" onclick="app.toDoController.markComplete('${this.id}')" ${this.completed ? "checked" : "" }>
                    <h6 class="${this.completed ? 'text-success' : '' }">${this.completed ? "<strike>": ""} ${this.description} ${this.completed ? "</strike>" : ""}</h6>
                </label>
                <i class="fa fa-trash text-danger" onclick="app.toDoController.deleteTask('${this.id}')" aria-hidden="true"></i>
        </div>
    </div>
        `
    }


}