import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import User from "@/models/User";
import connectToDatabase from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    const { userId } = getAuth(req); // Get Clerk user ID
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if user already exists in MongoDB
    let user = await User.findOne({ clerkId: userId });
    if (!user) {
      // Fetch Clerk user details
      const userDetails = await fetch(
        `https://api.clerk.dev/v1/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.CLERK_API_KEY}`,
          },
        }
      ).then((res) => res.json());

      // Create a new user in MongoDB
      user = await User.create({
        clerkId: userDetails.id,
        username:
          userDetails.username ||
          userDetails.email_addresses[0].email_address.split("@")[0],
        email: userDetails.email_addresses[0].email_address,
        profileImage: userDetails.profile_image_url,
      });
    }

    res.status(200).json({ message: "User synced successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
