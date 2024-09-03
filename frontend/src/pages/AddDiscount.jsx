import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddDiscount = () => {
  let [discountType, setDiscountType] = useState("fixed");
  const handleChange = (e) => {
    setDiscountType(e);
  };

  console.log(discountType);
  return (
    <>
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
          label="Cupon Name"
          name="cupon"
          rules={[
            {
              required: true,
              message: "Please input your Cupon Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Percentage"
          name="percentage"
          rules={[
            {
              required: true,
              message: "Please input your percentage!",
            },
          ]}
        >
          <InputNumber  />
        </Form.Item>

        <Form.Item
          label="Rang"
          name="Rang"
          rules={[
            {
              required: true,
              message: "Please input your Rang!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Select
          defaultValue="fixed"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "fixed",
              label: "Fixed",
            },
            {
              value: "percent",
              label: "Percent",
            },
            {
              value: "deliveryCharge",
              label: "Delivery Charge",
            },
          ]}
        />

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
    </>
  );
};

export default AddDiscount;
