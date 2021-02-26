export default class Weather{
    constructor(data){
        this.temp = data.temp
        this.humidity = data.humidity
    }

    get Template(){
        return /*html*/ `
        <h1 class="badge badge-dark p-2">Degrees: ${this.temp} </h1>
        <h1 class="badge badge-dark p-2">Humidity: ${this.humidity} </h1>
        <h1 class="badge badge-dark shadow-lg p-2">Weather in Boise, Idaho</h1>
        `
    }
}

// "temp": 277.22,
// "feels_like": 269.93,
// "temp_min": 276.15,
// "temp_max": 278.71,
// "pressure": 1010,
// "humidity": 65