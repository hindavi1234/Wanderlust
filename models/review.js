const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: [true, "Review must have a comment"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Review must have a rating"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Review must have an author"],
  },
});

module.exports = mongoose.model("Review", reviewSchema);
