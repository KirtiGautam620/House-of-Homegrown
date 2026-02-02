require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

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
    try {
        const categoryId = 2; // Confirmed Clothes ID
        console.log(`Deleting products in Category ID ${categoryId}...`);

        const result = await Product.deleteMany({ categoryId: categoryId });
        console.log(`Deleted ${result.deletedCount} products.`);

    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

run();
