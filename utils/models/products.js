import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchma = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  data_layer: {
    brand: { type: String },
    category: { type: String },
  },
  images: {
    url: { type: Array },
  },
  rating: { rate: { type: Number }, count: { type: Number } },
  price: { type: Number },
  colors: { type: Array },
});

export default mongoose.models.products ||
  mongoose.model("products", productSchma);
