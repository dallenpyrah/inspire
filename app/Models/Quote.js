export default class Quote{
    constructor(data){
        this.author = data.author
        this.content = data.content
    }

    get Template(){
        return /*html*/ `
        <h5>${this.content}</h5>
        <h6 class="m-3">${this.author}</h6>
        `
    }
}

// author: "Eckhart Tolle"
// content: