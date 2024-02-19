import { reviewModel } from "../model/reviewModel.js";

const createReview = async (req, res) => {
  try {
    const { review, rating, itemId, userId } = req.body;

    if (!review || !itemId || !rating || !userId)
      return res.status(400).json("all feilds are required");

    const newReview = new reviewModel({
      review,
      rating,
      itemId,
      userId,
    });

    await newReview.save();
    res.status(200).json("review added successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getReview = async (req, res) => {
  try {
    const { itemId } = req.params;

    const reviews = await reviewModel.find({ itemId }).populate("userId");
    res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { review, rating, itemId, userId } = req.body;

    if (!reviewId || !review || !rating || !itemId || !userId)
      return res.status(400).json("all feilds are required");

    const update = { review, rating, itemId, userId };
    const reviewUpdate = await reviewModel.findByIdAndUpdate(reviewId, update, {
      new: true,
    });
    res.status(200).json("review updated successfully");
  } catch (err) {
    console.log(err);
    res.json(400).json(err);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await reviewModel.findByIdAndDelete(reviewId);
    res.status(200).json("review deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export { createReview, getReview, updateReview, deleteReview };
