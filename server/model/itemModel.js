import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 40,
  },
  image: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
});

const itemModel = mongoose.model("Item", itemSchema);
export { itemModel };
