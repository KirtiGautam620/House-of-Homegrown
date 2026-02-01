require("dotenv").config(); 
const express = require("express");
const cors=require("cors")
const connectDB = require("./config/db");
const Product=require("./models/Product");
const productRoutes=require("./routes/productRoutes")
const categoryRoutes=require("./routes/categoryRoutes")
connectDB();  

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/products",productRoutes)
app.use("/api/categories",categoryRoutes)

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/test", async (req,res)=>{
    const products=await Product.create({
        name:"Chair",
        price:100,
        description:"This is a chair",
    });
    res.json(products);
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
