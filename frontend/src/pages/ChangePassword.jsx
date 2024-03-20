import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ChangePassword = () => {
  let param = useParams();
  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/changepass",
        {
          token: param.token,
          password: values.password,
        }
      );
      navigate("/login");
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
          label="New Password"
          name="password"
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

export default ChangePassword;
