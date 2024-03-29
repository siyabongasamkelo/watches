import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
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
      type: [String],
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

const itemModel = mongoose.model("Item", itemSchema);
export { itemModel };
