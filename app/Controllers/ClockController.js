import { clockService } from "../Services/ClockService.js";

export default class ClockController{
    constructor(){
        console.log('Hello from clock')
    }

    startTime() {
        clockService.startTime()
    }
    }