import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

function _drawQuote(){
    let quote = ProxyState.quotes
    let template = ''
    quote.forEach(quote => template += quote.Template)
    document.getElementById('quote').innerHTML = template
}

export default class QuotesController{
    constructor(){
        console.log("Quotes Controller")
        ProxyState.on("quotes", _drawQuote)
    }
}