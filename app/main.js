import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import ToDoController from "./Controllers/ToDoController.js";
import ValuesController from "./Controllers/ValuesController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();

  weatherController = new WeatherController();

  quotesController = new QuotesController();

  toDoController = new ToDoController();

  imagesController = new ImagesController();

}

window["app"] = new App();
