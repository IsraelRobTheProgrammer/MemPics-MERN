import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import morgan from "morgan";

import postRoutes from "./routes/posts.js";

configDotenv();

const app = express();

// middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())
app.use(morgan("dev"));


// routes
app.use("/posts", postRoutes);


// DB
mongoose
  .connect(process.env.DB_URL)
  .then(() =>
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Backend server is running on ${process.env.PORT}`);
    })
  )
  .catch((err) => console.log(err, "error"));
