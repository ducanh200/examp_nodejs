const Product = require("./../models/product.model");

exports.home = async(req,res)=>{
    try {
        const products = await Product.find();
        res.render("home",{
            products:products
        });
    } catch (error) {
         
    }

}
exports.formCreate = (req,res)=>{
    const data = req.body;
    data.url = req._parsedOriginalUrl.path;
    res.render("form_create",{
        product:data
    });
}

exports.create = async (req,res)=>{
    const data = req.body;
    try {
        const p = new Product(data);
        await p.save();
        res.redirect("/");
    } catch (error) {
        res.render("/form_create",{product:data,error:error});
    }
}

exports.delete =  async (req,res)=>{
    const _id = req.params.id;
    try {
        await Product.findByIdAndDelete(_id);
        res.redirect("/");
    } catch (error) {
        res.redirect("/");
    }
}