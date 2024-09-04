import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';


const AffiliateProduct = () => {


  let [allProduct, setAllProduct] = useState([]);

  let data=useSelector((state)=>state)
console.log("data",data.currentUser.value.id);

  useEffect(() => {
    async function allProduct() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allproduct"
      );
      setAllProduct(data.data);
    }
    allProduct()
  }, []);

  console.log(allProduct);

  return (
    allProduct.map((item,i)=>(
      <li key={i}>{item.name}  ----{`http://localhost:3000/product/${item.slug}?userid=${data.currentUser.value.id}`}  </li>
    ))
  )
};

export default AffiliateProduct;
