import mongoose, { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  clerkId: string; // Clerk user ID
  username: string;
  email: string;
  profileImage?: string; // Optional profile image
  bio?: string; // Optional user bio
  followers: mongoose.Types.ObjectId[]; // References to User IDs
  following: mongoose.Types.ObjectId[]; // References to User IDs
}

const userSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    profileImage: { type: String },
    bio: { type: String, maxlength: 160 },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
