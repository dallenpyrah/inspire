
// Test commit for page to build.
class ClockService{
    constructor(){

    }
    startTime() {
        let today = new Date()
        let h = today.getHours();
         let  m = today.getMinutes();
         let s = today.getSeconds();
         let timeOfDay = "am"
         if (h > 11) { timeOfDay = "pm";}
         if (h > 12) { h = h-12; }
         if (h == 0) { h = 12; }
         // @ts-ignore
         if (m < 10) { m = "0" + m; }
         // @ts-ignore
         if (s < 10) { s = "0" + s; }
         document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + timeOfDay;
         if(timeOfDay == "pm"){
            document.getElementById('clock-text').innerHTML = "Good Afternoon Dallen!"
         }else{
            document.getElementById('clock-text').innerHTML = "Good Morning Dallen!"
         }
         let t = setInterval(this.startTime, 500);
     }
 
}


export const clockService = new ClockService();