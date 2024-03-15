import PostMsg from "../models/postMsg.js";

export const getPosts = async (req, res) => {
  try {
    const postMsgs = await PostMsg.find();
    console.log(postMsgs);
    console.log("once");

    res.status(200).json(postMsgs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const postBody = req.body;
  const newPost = new PostMsg(postBody);

  try {
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
