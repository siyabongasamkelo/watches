import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
      minLength: 3,
    },
    rating: {
      type: Number,
      required: true,
    },
    itemId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item",
      required: true,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const reviewModel = mongoose.model("review", reviewSchema);
export { reviewModel };
