import mongoose, { Schema } from "mongoose";
const userListSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  card_id: {
    type: Number,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    required: true,
  },
});
export const UserList = mongoose.model("UserList", userListSchema);
