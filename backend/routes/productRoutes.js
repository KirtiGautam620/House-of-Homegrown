const express=require('express')
const router=express.Router()
const Product=require('../models/Product')
router.get("/",async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const product=await Product.findOne({id:Number(req.params.id)})
        if(!product) return res.status(404).json("Product not found")
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.post("/",async(req,res)=>{
    try{
        const last=await Product.findOne().sort({id:-1})
        const id=last && last.id? last.id+1:1
        const {name,description,price,category,image}=req.body
        const product=new Product({id:id,name,description,price,category,image})
        const savedProduct=await product.save()
        res.status(201).json(savedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.put("/:id",async(req,res)=>{
    try{
        const updatedProduct=await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})
module.exports=router