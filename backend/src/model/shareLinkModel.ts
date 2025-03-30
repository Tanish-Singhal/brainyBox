import mongoose from "mongoose";

const shareLinkSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: [true, "Please provide a hash"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user ID"],
  },
})

export const ShareLink = mongoose.model("ShareLink", shareLinkSchema);