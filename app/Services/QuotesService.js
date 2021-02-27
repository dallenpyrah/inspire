import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"
import { sandApi } from "./AxiosService.js"

class QuotesService{
    constructor(){
        console.log('Quotes Service')
        this.getQuotes()
    }

    async getQuotes(){
        try {
            const res = await sandApi.get('quotes')
            ProxyState.quotes = [...ProxyState.quotes, new Quote(res.data)]
            console.log(ProxyState.quotes)
        } catch (error) {
            console.error(error)
        }
    }

}

export const quotesService = new QuotesService();