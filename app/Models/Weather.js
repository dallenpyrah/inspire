export default class Weather{
    constructor(data){
        this.temp = data.temp
        this.humidity = data.humidity
    }

    get Template(){
        return /*html*/ `
        <h1 class="badge badge-dark p-2">${this.Tempature} <i class="fa fa-thermometer-half text-danger ml-1" aria-hidden="true"></i> <span class="text-light ml-1">Fahrenheit</span></h1>
        <h1 class="badge badge-dark p-2">${this.humidity} <i class="fa fa-percent text-danger ml-1 mr-2" aria-hidden="true"></i>Humidity</h1>
        <h1 class="badge badge-dark shadow-lg p-2"><i class="fa fa-cloud text-primary mr-2" aria-hidden="true"></i>Boise, Idaho</h1>
        `
    }

    get Tempature(){
        let tempature = Math.floor((this.temp - 273.15) * 9/5 + 32)
        return tempature
    }
}

// "temp": 277.22,
// "feels_like": 269.93,
// "temp_min": 276.15,
// "temp_max": 278.71,
// "pressure": 1010,
// "humidity": 65