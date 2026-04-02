import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from '../src/models/user.model.js'

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB connected...");

    // check if admin already exists
    const existingAdmin = await User.findOne({
      email: "process.env.ADMIN_EMAIL"
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    // hash password
    const hashedPassword = await bcrypt.hash("process.env.ADMIN_PASSWORD", 10);

    // create admin
    await User.create({
      name: "Admin",
      email: "process.env.ADMIN_EMAIL",
      password: hashedPassword,
      role: "admin",
      status: "active"
    });

    console.log("Admin created successfully ");
    process.exit();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();