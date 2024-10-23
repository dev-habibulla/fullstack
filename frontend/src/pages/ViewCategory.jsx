import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewCategory = () => {
  let userInfo = useSelector((state) => state.currentUser.value.id);

  let [catList, setCatList] = useState([]);
  let [realTime, setRealTime] = useState(false);

  useEffect(() => {
    async function allData() {
      let data = await axios.get("http://localhost:8000/api/v1/product/allcat");

      let arr = [];

      data.data.map((item) => {
        arr.push({
          key: item._id,
          name: item.name,
          stastus:item.stastus,
        });
      });
      setCatList(arr);
    }
    allData();
  }, [realTime]);


  let handleApproved= async(item)=>{
    
  let data=   await axios.post(`http://localhost:8000/api/v1/product/updatecategory/${item.key}?stastus=${item.stastus}`)

    console.log(data);
    setRealTime(!realTime)

  }


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Stastus",
      dataIndex: "stastus",
      key: "stastus",
      render: (text) => <a>{text}</a>,
    },

    
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
        
          <button onClick={()=>handleApproved(record)}>{record.stastus=="waiting"?"Approve":"Pending"} {record.name}</button>
        
          <button>Delete {record.name}</button>
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
      <Table columns={columns} dataSource={catList} />;
    </div>
  );
};

export default ViewCategory;
