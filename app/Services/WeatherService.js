import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandApi } from "./AxiosService.js";

class WeatherService{
    constructor(){
        console.log('Weather Service')
        this.getWeather();
    }

    async getWeather(){
        try {
            const res = await sandApi.get('weather')
            ProxyState.weather = [...ProxyState.weather, new Weather(res.data.main)]
            console.log(ProxyState.weather)
        } catch (error) {
            console.error(error)
        }
    }
}

export const weatherService = new WeatherService();