
let Cart = require("../model/cartModel")

let cartControlar = async (req, res) => {
    let { productId, quantity, cartOwnerId } = req.body

    console.log(req.query);
    let exixitingCartProduct = await Cart.find({ productId: productId })


    if (exixitingCartProduct.length > 0) {

        if(req.query.type=="incre"){
            let data =await Cart.findOneAndUpdate({_id:exixitingCartProduct[0]._id},{quantity:exixitingCartProduct[0].quantity+1},{new:true})

            return res.send(data)
        }else{
            let data =await Cart.findOneAndUpdate({_id:exixitingCartProduct[0]._id},{quantity:exixitingCartProduct[0].quantity-1},{new:true})
            return res.send(data)
        }


       

    } else {
      //  return res.send("product nai")
      let cart=new Cart({
        productId: productId,
        quantity:1,
        cartOwnerId:"65f9c459e87a5778a74389d4"
      })
      cart.save()
      res.send({status:"Done"})

    }

    // res.send(allCat)

};

module.exports = cartControlar;