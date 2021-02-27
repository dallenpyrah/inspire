export default class Quote{
    constructor(data){
        this.author = data.author
        this.content = data.content
    }

    get Template(){
        return /*html*/ `
        <div class="wrap">
        <h4 id="content" class="mb-2 text-light old text-shadow" >${this.content}</h4>
        <h5 id="author" class="m-3 new"><span class="badge badge-dark"> ${this.author}</span></h5>
        </div>
        `
    }
}

// author: "Eckhart Tolle"
// content: