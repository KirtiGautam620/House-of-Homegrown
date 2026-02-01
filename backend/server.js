require("dotenv").config(); 
const express = require("express");
const connectDB = require("./config/db");
const Product=require("./models/Product");
const productRoutes=require("./routes/productRoutes")
connectDB();  

const app = express();
app.use(express.json());
app.use("/api/products",productRoutes)

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
