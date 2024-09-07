const axios = require("axios");

async function paymentController(req, res) {
  let data = {
    store_id: "aamarpaytest",
    tran_id:`${Date.now()}`,
    success_url: "http://localhost:3000/success",
    fail_url: "http://localhost:3000/fail",
    cancel_url: "http://localhost:3000/cancel",
    amount:req.body.amount,
    currency: "BDT",
    signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
    desc: "Merchant Registration Payment",
    cus_name: req.body.cus_name,
    cus_email: req.body.cus_email,
    cus_add1: req.body.cus_add1,
    cus_add2: req.body.cus_add2,
    cus_city: req.body.cus_city,
    cus_state: req.body.cus_state,
    cus_postcode: req.body.cus_postcode,
    cus_country: req.body.cus_country,
    cus_phone: req.body.cus_phone,
    type: "json",
  };
let response = await  axios.post(
    "https://​sandbox​.aamarpay.com/jsonpost.php",
    data,
    (headers = {
      "Content-Type": "application/json",
    })
  );
  res.send({payment_url:response.data.payment_url} );
  
}

module.exports = paymentController;
