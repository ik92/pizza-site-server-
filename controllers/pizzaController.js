const Pizza = require("../models/Pizza");

class PizzaController {
  async createPizza(req, res) {
    try {
      const { name, imageUrl, price, types, sizes, raiting } = req.body;
      const pizza = new Pizza({ name, imageUrl, price, types, sizes, raiting });
      await pizza.save();
      return res.json(pizza);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async getAllPizzas(req, res) {
    try {
      const pizzas = await Pizza.find();
      return res.json(pizzas);
    } catch (e) {
      return res.status(500).json({ message: "Can not get pizzas" });
    }
  }

  async getPizza(req, res) {
    try {
      const { id } = req.query;
      const pizza = await Pizza.findById(id);
      return res.json(pizza);
    } catch (e) {
      return res.status(500).json({ message: "Can not get pizza" });
    }
  }

  async deletePizza(req, res) {
    try {
      const { id } = req.query;
      const pizza = await Pizza.findById(id);
      pizza.remove();
      return res.json({ message: "Pizza was deleted" });
    } catch (e) {
      return res.status(400).json({ message: "Pizza is not remove" });
    }
  }
}

module.exports = new PizzaController();
