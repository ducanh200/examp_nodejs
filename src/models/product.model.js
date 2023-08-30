const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    code : String,
    name : String,
    origin : Date,
    price : Number,
    qty : Number,
    store : String,
});
module.exports = mongoose.model("Product",product_schema); 