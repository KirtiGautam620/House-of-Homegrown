const express=require('express')
const router=express.Router()
const Product=require('../models/Product')
const Category=require('../models/Category')
router.get("/",async(req,res)=>{
    try{
        const filter={}
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10
        const skip = (page - 1) * limit

        if (req.query.featured) {
            filter.featured = req.query.featured === 'true';
        }

        if (req.query.category) {
            let categoryId = req.query.category;
            if (isNaN(categoryId)) {
                const category = await Category.findOne({ slug: categoryId });
                if (category) {
                    categoryId = category.id;
                } else {
                    categoryId = -1;
                }
            }
            filter.categoryId=Number(categoryId)
        }
        if(req.query.search){
            filter.name = { $regex: req.query.search, $options: "i" }
        }
        const products = await Product.find(filter).skip(skip).limit(limit)
        const productsWithCategory = await Promise.all(products.map(async (p) => {
            const category = await Category.findOne({ id: p.categoryId });
            return {
                ...p.toObject(),
                category: category ? category.name : 'Uncategorized'
            };
        }));

        const tot = await Product.countDocuments(filter)
        res.status(200).json({
            tot, page, pages: Math.ceil(tot / limit), products: productsWithCategory
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const product = await Product.findOne({ id: Number(req.params.id) })
        if (!product) return res.status(404).json("Product not found")

        const category = await Category.findOne({ id: product.categoryId });
        const productWithCategory = {
            ...product.toObject(),
            category: category ? category.name : 'Uncategorized'
        };

        res.status(200).json(productWithCategory)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.post("/", async (req, res) => {
    try {
        const last = await Product.findOne().sort({ id: -1 })
        const id = last && last.id ? last.id + 1 : 1
        const { name, description, price, categoryId, image, featured } = req.body
        if (!name || !price || !categoryId) return res.status(400).json("All the fields")
        const categoryExists = await Category.findOne({ id: Number(categoryId) });
        if (!categoryExists) return res.status(400).json("Invalid Category ID");
        const product = new Product({ id: id, name, description, price, categoryId, image, featured })
        const savedProduct = await product.save()
        res.status(201).json(savedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.put("/:id",async(req,res)=>{
    try{
        const updatedProduct = await Product.findOneAndUpdate(
            { id: Number(req.params.id) },
            req.body,
            { new: true }
        )
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete("/:id", async (req, res) => {
    try{
        await Product.findOneAndDelete({ id: Number(req.params.id) })
        res.status(200).json("Product deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})
module.exports=router