require("dotenv").config();
const mongoose = require("mongoose");
const Category = require("./models/Category");
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
        // Try finding by name or slug
        const category = await Category.findOne({ $or: [{ name: "Clothes" }, { slug: "clothes" }] });

        if (category) {
            console.log("Found Category:", JSON.stringify(category, null, 2));
            const count = await Product.countDocuments({ categoryId: category.id });
            console.log(`Found ${count} products in this category.`);

            // List a few for verification
            const products = await Product.find({ categoryId: category.id }).limit(5);
            console.log("Sample products:", JSON.stringify(products.map(p => p.name), null, 2));
        } else {
            console.log("Category 'Clothes' not found.");
        }
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

run();
