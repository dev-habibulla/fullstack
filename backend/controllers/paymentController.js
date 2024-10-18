const axios = require("axios");
const Order = require("../model/orderModel");
const Cart = require("../model/cartModel");
const nodemailer = require("nodemailer");

async function paymentController(req, res) {
  let data = {
    store_id: "aamarpaytest",
    tran_id: `${Date.now()}`,
    success_url: "http://localhost:3000/success",
    fail_url: "http://localhost:3000/fail",
    cancel_url: "http://localhost:3000/cancel",
    amount: req.body.amount,
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
  let response = await axios.post(
    "https://​sandbox​.aamarpay.com/jsonpost.php",
    data,
    (headers = {
      "Content-Type": "application/json",
    })
  );

  let order = new Order({
    tran_id: `${Date.now()}`,
    amount: req.body.amount,
    cus_name: req.body.cus_name,
    cus_email: req.body.cus_email,
    cus_add1: req.body.cus_add1,
    cus_add2: req.body.cus_add2,
    cus_city: req.body.cus_city,
    cus_state: req.body.cus_state,
    cus_postcode: req.body.cus_postcode,
    cus_country: req.body.cus_country,
    cus_phone: req.body.cus_phone,
    orderOwnerId: "65f9c459e87a5778a74389d4",
  }).save();

  function currentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }


  let cartData=await Cart.find({cartOwnerId:"65f9c459e87a5778a74389d4"}).populate("productId")

console.log(cartData);

function detailsProduct() {
  
 return cartData.map(item=>{
  return (
    ` <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">${item.productId.name}</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${item.quantity}</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${item.productId.saleprice ? item.productId.saleprice : item.productId.regularprice}</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${item.productId.saleprice ? item.productId.saleprice * item.quantity : item.productId.regularprice * item.quantity}</td>
    </tr>`
  );
}).join('')

}


  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
        user: "habibullalm3@gmail.com",
        pass: "uzup xtef avnj ckth",
    },
});

  const info = await transporter.sendMail({
    from: '"Offerpoka" <habibullalm3@gmail.com>', // sender address
    to: req.body.cus_email, // list of receivers
    subject: "Order Invoice ", // Subject line
    html: `<table style="max-width: 600px; width: 100%; margin: 20px auto; background-color: #ffffff; border-collapse: collapse;">
    <tr>
        <td colspan="4" style="text-align: center; padding: 10px; background-color: #4CAF50; color: white; font-size: 24px;">
            Your Purchase Invoice
        </td>
    </tr>

    <tr>
        <td colspan="2" style="padding: 15px; border-bottom: 1px solid #dddddd;">
            <strong>Billing Info:</strong><br>
            ${req.body.cus_name}<br>
            ${req.body.cus_add1}<br>
            ${req.body.cus_add2}
        </td>
        <td colspan="2" style="padding: 15px; border-bottom: 1px solid #dddddd;">
            <strong>Order Date:</strong> ${currentDate()}<br>
            <strong>Order No:</strong>   # 5444242
        </td>
    </tr>

    <tr>
        <th style="padding: 15px; background-color: #4CAF50; color: white; border-bottom: 1px solid #dddddd;">Product</th>
        <th style="padding: 15px; background-color: #4CAF50; color: white; border-bottom: 1px solid #dddddd;">Quantity</th>
        <th style="padding: 15px; background-color: #4CAF50; color: white; border-bottom: 1px solid #dddddd;">Price</th>
        <th style="padding: 15px; background-color: #4CAF50; color: white; border-bottom: 1px solid #dddddd;">Total</th>
    </tr>

     ${detailsProduct()}

    <tr>
        <td colspan="3" style="padding: 15px; border-bottom: 1px solid #dddddd; font-weight: bold;">Subtotal</td>
        <td style="padding: 15px; border-bottom: 1px solid #dddddd;">$110.00</td>
    </tr>
    <tr>
        <td colspan="3" style="padding: 15px; border-bottom: 1px solid #dddddd; font-weight: bold;">Shipping</td>
        <td style="padding: 15px; border-bottom: 1px solid #dddddd;">$5.00</td>
    </tr>
    <tr>
        <td colspan="3" style="padding: 15px; border-bottom: 1px solid #dddddd; font-weight: bold;">Tax (15%)</td>
        <td style="padding: 15px; border-bottom: 1px solid #dddddd;">$17.25</td>
    </tr>
    <tr>
        <td colspan="3" style="padding: 15px; font-weight: bold;">Total</td>
        <td style="padding: 15px;">${req.body.amount}</td>
    </tr>

    <tr>
        <td colspan="4" style="text-align: center; padding: 10px; background-color: #4CAF50; color: white; font-size: 12px;">
            Thank you for your purchase!<br>
            If you have any questions, feel free to contact us at support@example.com.
        </td>
    </tr>
</table> `
  });

  res.send({ payment_url: response.data.payment_url });
}

module.exports = paymentController;
