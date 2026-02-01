const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String
    },
    categoryId: {
    type: Number,
    required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
});
module.exports = mongoose.model("Product", productSchema);
