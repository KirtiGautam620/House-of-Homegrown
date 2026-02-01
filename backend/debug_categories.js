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

    console.log("--- Categories ---");
    const categories = await Category.find({});
    console.log(JSON.stringify(categories, null, 2));

    console.log("\n--- Checking 'home-living' ---");
    const homeLiving = await Category.findOne({ slug: "home-living" });
    console.log("Category with slug 'home-living':", homeLiving);

    if (homeLiving) {
        console.log("\n--- Products in 'home-living' ---");
        const products = await Product.find({ categoryId: homeLiving.id });
        console.log(`Found ${products.length} products with categoryId ${homeLiving.id}`);
        if (products.length > 0) console.log(JSON.stringify(products.map(p => ({ id: p.id, name: p.name, categoryId: p.categoryId })), null, 2));
    } else {
        console.log("\n--- No category found with slug 'home-living' ---");
    }

    mongoose.connection.close();
};

run();
