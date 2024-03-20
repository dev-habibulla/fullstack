import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);

      let data = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email: values.email,
        password:values.password,
        // email: "habibullalm3@gmail.com",
        // password: "123456789",
      },
      {
        headers: {
          authorization: "bhchfghFg5gjnggjg",
        },
      }
      
      )
     

    // try {
    //   let data = await axios.post("http://localhost:8000/api/v1/auth/login", {
    //     email: "shawon.cit.bd@gmail.com",
    //     password: "123456789",
    //   });

    //   if (!data.data.isEmailVarified) {
    //     console.log("Please Varify your email");
    //   } else if (data.data.role == "user") {
    //     console.log("You do  not have permission to enter");
    //   } else {
    //     localStorage.setItem("user", JSON.stringify(data.data));
    //     diapatch(activeUser(data.data));
    //     navigate("/home");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
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
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
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
  );
};
