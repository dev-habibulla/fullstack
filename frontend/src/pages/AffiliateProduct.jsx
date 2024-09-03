import React, { useEffect, useState } from "react";
import axios from "axios";

const AffiliateProduct = () => {
  let [allProduct, setAllProduct] = useState([]);

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
      <li key={i}>{item.name}  ----  </li>
    ))
  )
};

export default AffiliateProduct;
