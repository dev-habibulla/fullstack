
const Category =require("../model/catModel")

 async function updateCategoryController(req,res) {
   const {id}= req.params
   const {stastus}= req.query


    console.log(id);
    console.log(stastus);
    await Category.findOneAndUpdate({_id:id},{stastus:stastus == "waiting" ?"approved":"waiting"})

    res.send({Message:"Status Change"})
    
 }

 module.exports =updateCategoryController