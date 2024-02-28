import { orderModel } from "../model/ordersModel.js";

const createOrder = async (req, res) => {
  try {
    const {
      items,
      buyerDetails,
      total,
      shippingAddress,
      billingAddress,
      status,
      orderId,
    } = req.body;

    if (
      !items ||
      !buyerDetails ||
      !total ||
      !shippingAddress ||
      !billingAddress ||
      !status ||
      !orderId
    )
      return res.status(400).json("Please fill all the fields");

    const newOrder = new orderModel({
      items,
      buyerDetails,
      total,
      shippingAddress,
      billingAddress,
      status,
      orderId,
    });

    await newOrder.save();

    res.status(200).json("order created successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await orderModel.findById(orderId);
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await orderModel.findByIdAndUpdate(
      orderId,
      {
        status,
      },
      {
        new: true,
      }
    );

    res.status(200).json("order status updated successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { createOrder, getOrder, getAllOrders, updateOrderStatus };
