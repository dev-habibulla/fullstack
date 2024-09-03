import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Home = () => {
  let navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key)
  };

  const items = [
    user.role == "admin" &&
      getItem("User", "sub1", <MailOutlined />, [
        getItem("Marchant", "g1"),
        getItem("User", "g2"),
      ]),
    {
      type: "divider",
    },
    getItem("Product", "sub2", <AppstoreOutlined />, [
      getItem("Add Product", "/dashboard/addproduct"),
      getItem("View Product", "/dashboard/viewproduct"),
    ]),
    {
      type: "divider",
    },
    getItem("Category & Subcategore", "sub4", <SettingOutlined />, [
      getItem("Add Category", "/dashboard/createcat"),
      getItem("Add Subcategore", "/dashboard/createsubcat"),
      getItem("View Category", "/dashboard/viewcat"),
      getItem("View Subcategore", "/dashboard/viewsubcat"),
      getItem("Add Variant", "/dashboard/addvariant"),
      getItem("View Variant", "/dashboard/viewvariant"),
     
    ]),
    {
      type: "divider",
    },
    getItem("Discound", "sub5", <SettingOutlined />, [
      getItem("Add Discound", "/dashboard/adddiscount"),
      getItem("View Discound", "14"),
    ]),
    {
      type: "divider",
    },
    getItem("Affiliate", "sub6", <SettingOutlined />, [
      getItem("Product List", "/dashboard/affiliateproduct"),
      
    ]),
  ];

  return (
    <div>
      <Row>
        <Col span={5}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={19}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
