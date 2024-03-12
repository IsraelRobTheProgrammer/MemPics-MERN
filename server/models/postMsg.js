import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    details: 0,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMsg = mongoose.model("PostMessage", postSchema);

export default PostMsg;
