import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: Stirng,
      required: true,
      unique: ture,
      lowercase: true,
    },
    email: {
      type: Stirng,
      required: true,
      unique: ture,
      lowercase: true,
    },
    password: {
      type: Stirng,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
