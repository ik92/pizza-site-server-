const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const corsMiddleware = require("./middleware/cors.middleware");

const pizzaRouter = require("./routes/pizza.routes");

const PORT = process.env.PORT || config.get("serverPort");

const app = express();
app.use(corsMiddleware);
app.use(express.json());
app.use("/api/pizzas", pizzaRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
