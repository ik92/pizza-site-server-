const Router = require("express");
const pizzaController = require("../controllers/pizzaController");
const router = new Router();

router.post("", pizzaController.createPizza);
router.get("", pizzaController.getAllPizzas);
router.get("/:id", pizzaController.getPizza);
router.delete("/:id", pizzaController.deletePizza);

module.exports = router;
