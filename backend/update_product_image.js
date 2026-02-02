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
        const product = await Product.findOne({ name: "Hand-Painted Kerala Mural Wall Decor" });
        if (product) {
            console.log("Found product:", product.name);
            console.log("Old Image:", product.image);

            // Update to use 'art,mural' keyword
            product.image = "https://loremflickr.com/600/600/art,mural?lock=201";

            await product.save();
            console.log("New Image:", product.image);
            console.log("Product updated successfully.");
        } else {
            console.log("Product not found");
        }
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

run();
