
const Category =require("../model/catModel")

 async function updateCategoryController(req,res) {
   const {id}= req.params
   const {stastus}= req.query

    await Category.findOneAndUpdate({_id:id},{stastus:stastus == "waiting" ?"approved":"waiting"})

    res.send({Message:"Status Change"})
    
 }

 module.exports =updateCategoryController