import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"

function _drawImage(){
    let image = ProxyState.images
    let template = ''
    image.forEach(image => template += image.Template)
    document.getElementById('image').style.backgroundImage = template
    document.getElementById('image').style.backgroundRepeat = "no-repeat"
    document.getElementById('image').style.backgroundSize = "cover"
}

export default class ImagesController{
    constructor(){
        console.log('Images Controller')
        ProxyState.on("images", _drawImage)
        _drawImage()
    }

}