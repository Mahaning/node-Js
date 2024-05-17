// const { default: mongoose } = require("mongoose");

const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/myProject");
    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });

const saveInDB=async()=>{
const ProductModel=mongoose.model('datata',ProductSchema);
let data=new ProductModel({name:"Note pro",price:"45624",brand:"MAXX",category:"mobile"});
let result= await data.save();
console.log(result);
}
// saveInDB();

const updateInDB=async ()=>{
    const Product=mongoose.model('datata',ProductSchema);
    let data = await Product.updateOne(
        {name:"Mahaaaa"},{$set:{price:"45624",brand:"MAXX",category:"mobile"}}
    )
}
// updateInDB()

const deleteInDB=async ()=>{
    const Product=mongoose.model('datata',ProductSchema);
    let data =await Product.deleteOne({name:"Mahaaaa1"});
    console.log(data);
}

// deleteInDB()

const findInDB=async ()=>{
    const Product=mongoose.model('datata',ProductSchema);
    let data=await Product.find({name:"Note pro"});
    console.log(data)
}
findInDB()