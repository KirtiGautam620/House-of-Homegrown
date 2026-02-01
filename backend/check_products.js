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

    console.log("\n--- Products in Category ID 1 (Living) ---");
    const products = await Product.find({ categoryId: 1 });
    console.log(`Found ${products.length} products with categoryId 1`);
    if (products.length > 0) console.log(JSON.stringify(products.map(p => ({ id: p.id, name: p.name, categoryId: p.categoryId })), null, 2));

    mongoose.connection.close();
};

run();
