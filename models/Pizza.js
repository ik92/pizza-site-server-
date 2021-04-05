const { Schema, model } = require("mongoose");

const Pizza = new Schema({
  name: { type: String, require: true, unique: true },
  description: { type: String, require: true },
  imageUrl: { type: String, require: true },
  types: {
    thick: { type: Boolean },
    small: { type: Boolean },
  },
  sizes: { type: Array, default: [26, 30, 40] },
  price: { type: Number },
  raiting: { type: Number, default: 0, require: true },
  category: {
    pizzas: { type: Boolean, default: false },
    combo: { type: Boolean, default: false },
    snacks: { type: Boolean, default: false },
    desserts: { type: Boolean, default: false },
    drinks: { type: Boolean, default: false },
    other_goods: { type: Boolean, default: false },
  },
});

module.exports = model("Pizza", Pizza);
