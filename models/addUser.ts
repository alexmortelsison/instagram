import connectToDatabase from "@/db";
import User from "@/models/User";

const addUser = async () => {
  await connectToDatabase();

  const newUser = new User({
    clerkId: "12345",
    username: "testuser",
    email: "testuser@example.com",
    profileImage: "https://example.com/image.jpg",
    bio: "This is a test user",
  });

  await newUser.save();
  console.log("User added successfully");
};

// Call the function to execute the script
addUser();
