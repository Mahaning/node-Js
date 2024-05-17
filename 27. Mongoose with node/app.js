// const { default: mongoose } = require("mongoose");

const mongoose=require('mongoose');
const main=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/myProject");
    const ProductSchema=new mongoose.Schema({
        name:String
    });
const ProductModel=mongoose.model('datata',ProductSchema);
let data=new ProductModel({name:"Mahaaaa",price:"45624"});//only name wil enter in db based on schema
// let data=new ProductModel({name:"Mahaaaa"});
let result= await data.save();
console.log(result);
}

main();