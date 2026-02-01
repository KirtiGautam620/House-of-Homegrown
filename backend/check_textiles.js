require("dotenv").config();
const mongoose = require("mongoose");
const Category = require("./models/Category");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};
const run = async () => {
    await connectDB();
    console.log("--- Checking 'textiles' ---");
    const textiles = await Category.findOne({ slug: "textiles" });
    console.log("Category with slug 'textiles':", textiles);
    if (textiles) {
        console.log(`Found ID: ${textiles.id}`);
    }
    mongoose.connection.close();
};

run();
