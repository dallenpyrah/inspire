import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { sandApi } from "./AxiosService.js";

class ImagesService{
    constructor(){
        console.log("Images Service ")
        this.getImages()
    }

    async getImages(){
        try {
            const res = await sandApi.get('images')
            ProxyState.images = [...ProxyState.images, new Image(res.data)]
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }
}

export const imagesService = new ImagesService();