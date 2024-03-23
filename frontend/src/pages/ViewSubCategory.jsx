import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const ViewSubCategory = () => {
  let [subCatList, setSubCatList] = useState([]);

  useEffect(() => {
    async function allData() {
      let data = await axios.get("http://localhost:8000/api/v1/product/allsubcat");

      console.log("all cat", data.data);

      let arr = [];

      data.data.map((item) => {
        arr.push({
          key: item._id,
          name: item.name,
        });
      });
      setSubCatList(arr);
    }
    allData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
        
          <a>Delete {record.name}</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={subCatList} />;
    </div>
  )
}

export default ViewSubCategory