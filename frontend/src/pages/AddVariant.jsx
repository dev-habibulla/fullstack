import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AddVariant = () => {
  let [image, setImage] = useState({});
  let [productList, setProductList] = useState([]);
  let [produciId, setProduciId] = useState("");

  const onFinish = async (values) => {
    console.log("Success:", values);

    await axios.post(
      "http://localhost:8000/api/v1/product/createvariant",
      {
        name: values.name,
        image: image,
        regularprice: values.regularprice,
        saleprice: values.saleprice,
        productId: produciId,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  let handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChangePro = (value) => {
    console.log(`selected ${value}`);
    setProduciId(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    async function allData() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allproduct"
      );

      console.log("all cat", data.data);

      let arr = [];

      data.data.map((item) => {
        arr.push({
          value: item._id,
          label: item.name,
        });
      });
      setProductList(arr);
    }
    allData();
  }, []);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Variant Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Variant Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Variant Image"
          name="images"
          rules={[
            {
              required: true,
              message: "Please Upload Your Variant Image!",
            },
          ]}
        >
          <Input onChange={handleChange} type="file" />
        </Form.Item>

        <Form.Item
          label="Regular Price"
          name="regularprice"
          rules={[
            {
              required: true,
              message: "Please input yourRegular Price!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Sale Price"
          name="saleprice"
          rules={[
            {
              required: true,
              message: "Please input yourRegular Sale!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Select
            showSearch
            placeholder="Select a Product"
            optionFilterProp="children"
            onChange={handleChangePro}
            onSearch={onSearch}
            filterOption={filterOption}
            options={productList}
          />

          <h1 style={{ padding: "1px" }}></h1>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddVariant;
