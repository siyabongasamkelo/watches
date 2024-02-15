import { itemModel } from "../model/itemModel.js";
import { cloudinary } from "../utils/cloudinary.js";

const createItem = async (req, res) => {
  try {
    const { name, price, category, quantity, description } = req.body;
    const image = req.files;

    if (!name || !price || !category || !image || !quantity || !description)
      return res.status(400).json("Please fill all the fields");

    const imageUpload = await cloudinary.uploader.upload(
      image.image.tempFilePath
    );

    const imageUrl = imageUpload.secure_url;
    const newItem = new itemModel({
      name,
      price,
      category,
      image: imageUrl,
      category,
      quantity,
      description,
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
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.sort || "rating";
    let category = req.query.cart || "All";

    const categoryOptions = ["classic", "advanced", "minimalist"];

    console.log(req.query);

    category === "All"
      ? (category = [...categoryOptions])
      : (category = req.query.category.split(","));
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const items = await itemModel
      .find({ name: { $regex: search, $options: "i" } })
      .where("category")
      .in([...category])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    // const items = await itemModel.find();
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

const updateItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { name, price, category } = req.body;
    const image = req.files;

    if (!itemId) return res.status(400).json("item id is required");
    if ((!name, !price, !category, !image))
      return res.status(400).json("Please fill all the fields");

    const imageUpload = await cloudinary.uploader.upload(
      image.image.tempFilePath,
      {
        upload_preset: "watches",
      }
    );

    const imageUrl = imageUpload.secure_url;

    const update = { name, price, category, image: imageUrl };

    const itemUpdate = await itemModel.findByIdAndUpdate(itemId, update, {
      new: true,
    });

    res.status(200).json("item updated successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { createItem, getItem, getItems, updateItem, deleteItem };
