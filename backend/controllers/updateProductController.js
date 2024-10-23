

const Product =require("../model/productModel")

 async function updateProductController(req,res) {
   const {id}= req.params
   const {stastus}= req.query

    await Product.findOneAndUpdate({_id:id},{stastus:stastus == "waiting" ?"approved":"waiting"})

    res.send({Message:"Status Change"})
    
 }

 module.exports =updateProductController

