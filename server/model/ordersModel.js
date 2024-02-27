import mongoose from "mongoose";

const ordersSchema = mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    buyerDetails: {
      type: Object,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: Object,
      required: true,
    },
    billingAddress: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("Order", ordersSchema);
export { orderModel };
