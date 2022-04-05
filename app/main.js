// import { ValuesController } from "./Controllers/ValuesController.js";
import { SnacksController } from "./Controllers/SnackController.js"

class App {
  // valuesController = new ValuesController();
  snackController = new SnacksController();
}

window["app"] = new App();
