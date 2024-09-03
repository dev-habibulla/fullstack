let Discount = require("../model/discountModel");

let cuponControlar = async (req, res) => {
  let { cupon, cupontype, cupontamount, cuponrange } = req.body;
  let exixtingDiscount = await Discount.find({ cupon: cupon });

  if (exixtingDiscount.length > 0) {
    return res.send("Cupon Exists");
  } else {
    if (cupontamount > 100) {
      if (cupontype == "percent") {
        return res.send("Invalid Discount Amount");
      }
    } else if (cupontamount > 50) {
      if (cupontype == "deliveryCharge") {
        return res.send("Invalid Discount Amount");
      }
    } else {
      let discount = new Discount({
        cupon: cupon,
        cupontamount: cupontamount,
        cupontype: cupontype,
        cuponrange: cuponrange,
      });

      discount.save();

      return res.send(discount);
    }
  }

  // res.send(allCat)
};

module.exports = cuponControlar;
