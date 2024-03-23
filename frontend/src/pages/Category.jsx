import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";

const Category = () => {
  let userInfo = useSelector((state) => state.currentUser.value.id);

  console.log(userInfo);

  const onFinish = async (values) => {
    console.log("Success:", values);

    let data = await axios.post(
      "http://localhost:8000/api/v1/product/createcategory",
      {
        name: values.category,
        ownerId: userInfo,
      }
    );
    console.log(data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          label="Category Name"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input your Category Name!",
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Category;
