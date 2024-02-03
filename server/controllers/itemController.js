import { itemModel } from "../model/itemModel.js";
import { cloudinary } from "../utils/cloudinary.js";

const createItem = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const image = req.files;

    if ((!name, !price, !category, !image))
      return res.status(400).json("Please fill all the fields");

    const imageUpload = await cloudinary.uploader.upload(
      image.image.tempFilePath,
      {
        upload_preset: "watches",
      }
    );

    const imageUrl = imageUpload.secure_url;

    const newItem = new itemModel({
      name,
      price,
      category,
      image: imageUrl,
    });

    await newItem.save();

    res.status(200).json("item added successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const item = await itemModel.findById(itemId);
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getItems = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { ItemId } = req.params;
    const deleteItem = await itemModel.findByIdAndDelete(ItemId);

    res.status(200).json("Item deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { createItem, getItem, getItems };
