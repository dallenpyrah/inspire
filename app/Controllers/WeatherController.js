import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _drawWeather(){
    let weather = ProxyState.weather
    let template = ''
    weather.forEach(weather => template += weather.Template)
    document.getElementById('weather').innerHTML = template
}

export default class WeatherController{
    constructor(){
        console.log("Weather Controller")
        ProxyState.on("weather", _drawWeather)
    }
}