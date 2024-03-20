import { Button, Form, Input } from "antd";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OtpVarification = () => {
  let param = useParams();


  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/auth/otpVarification",
          {
            email: param.email,
            otp: values.otp
          }
        );
        console.log(response.data); // Log the response from the server
      } catch (error) {
        console.error("Error:", error);
      }

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
          label="OTP Code"
          name="otp"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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

export default OtpVarification;
