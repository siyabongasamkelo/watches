import { reviewModel } from "../model/reviewModel.js";

const createReview = async (req, res) => {
  try {
    const { review, rating, itemId, userId } = req.body;

    if (!review || !itemId || !rating || !userId)
      return res.status(400).json("all feilds are required");

    console.log(userId);

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
    const itemId = req.query.itemId;
    const searchTerm = req.query.search || "";
    const specificRatings = parseInt(req.query.rating) || null; // replace with the specific ratings you want to filter by
    const sort = parseInt(req.query.sort) || 1;

    const pageNumber = parseInt(req.query.page) - 1 || 1; // replace with the desired page number
    const pageSize = 7; // replace with the desired page size

    let ratingFilter = {}; // default to an empty object
    if (specificRatings !== null) {
      ratingFilter = { rating: specificRatings };
    }

    const reviews = await reviewModel
      .find({
        itemId: itemId,
        review: { $regex: searchTerm, $options: "i" },
        ...ratingFilter,
      })
      .sort({ rating: sort }) // 1 for ascending, -1 for descending
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .populate("userId");

    res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const getReviewByItemId = async (req, res) => {
  try {
    const { itemId } = req.params;

    const review = await reviewModel.find({ itemId });

    res.status(200).json(review);
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

export {
  createReview,
  getReview,
  updateReview,
  deleteReview,
  getReviewByItemId,
};
