const product=require('../models/Products')
exports.getProduct=(req,res)=>{

    product.find({})
            .then((data)=>{
                res.status(200).json({
                    message:data
                })
            })
            .catch((err)=>{
                res.status(400).json({
                    error:err
                })
            })
        
}