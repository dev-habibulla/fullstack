import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";

const ViewProduct = () => {
  let [productList, setProductList] = useState([]);

  useEffect(() => {
    async function allData() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allproduct"
      );

      console.log("all cat", data.data);

      let arr = [];

      data.data.map((item) => {
        arr.push({
          key: item._id,
          name: item.name,
          regularprice: item.regularprice,
          saleprice: item.saleprice,
          image: item.image,
        });
      });
      setProductList(arr);
    }
    allData();
  }, []);

  const columns = [
    {
      title: "serial",
      dataIndex: "serial",
      key: "serial",
      render: (key, index, count) => <p>{count + 1}</p>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <Space size="middle">
          <img style={{ width: "40px" }} src={`http://localhost:8000${_}`} />
        </Space>
      ),
    },
    {
      title: "Regular Price",
      dataIndex: "regularprice",
      key: "regularprice",
    },
    {
      title: "Sale price",
      key: "saleprice",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
  ];

  return <Table columns={columns} dataSource={productList} />;
};

export default ViewProduct;
