const mongoose=require('mongoose');
const productschema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

module.exports = mongoose.model('datata',productschema);