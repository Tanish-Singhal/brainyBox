import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minLength: [3, "Title must be at least 3 characters long"],
    maxLength: [100, "Title must be at most 100 characters long"],
  },
  link: {
    type: String,
    required: [true, "Please provide a link"],
  },
  tags: [{
    type: String,
    minLength: [1, "Tag must be at least 1 character long"],
    maxLength: [20, "Tag must be at most 20 characters long"],
  }],
  description: {
    type: String,
    maxLength: [500, "Description must be at most 500 characters long"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user ID"],
  }
}, { timestamps: true });

export const Content = mongoose.model("Content", contentSchema);
