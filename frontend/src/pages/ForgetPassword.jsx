import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";


const ForgetPassword = () => {
    const onFinish = async (values) => {
        console.log("Success:", values);
    
        try {
            const response = await axios.post(
              "http://localhost:8000/api/v1/auth/forgotpassemail",
              {
                email: values.email,
                
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
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your email!",
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
  )
}

export default ForgetPassword