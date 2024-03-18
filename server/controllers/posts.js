import mongoose from "mongoose";
import PostMsg from "../models/postMsg.js";

export const getPosts = async (req, res) => {
  try {
    const postMsgs = await PostMsg.find();
    console.log(postMsgs);
    console.log("once");
    console.log(new Date(), "Date");
    res.status(200).json(postMsgs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  const postBody = req.body;
  const newPost = new PostMsg(postBody);

  try {
    // console.log(newPost.createdAt, "newPost Date");
    newPost.createdAt = new Date();
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
    console.log(new Date(), "CreateDate");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with such id");

  const updatedPost = await PostMsg.findByIdAndUpdate(_id, post, { new: true });

  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with such id");

  await PostMsg.findByIdAndDelete(_id);

  res.status(200).json({ message: "Post Deleted Succesfully" });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with such id");

  const post = await PostMsg.findById(_id);

  const updatedPost = await PostMsg.findByIdAndUpdate(
    _id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );

  res.status(200).json(updatedPost);
};
