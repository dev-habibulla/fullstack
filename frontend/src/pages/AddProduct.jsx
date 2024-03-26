import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  let [description, setDescription] = useState("");
  let [image, setImage] = useState({});

  const onFinish = async (values) => {
    console.log("Success:", values);

    await axios.post(
      "http://localhost:8000/api/v1/product/createproduct",
      {
        name: values.product,
        description: description,
        avatar: image,
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
          label="Product Name"
          name="product"
          rules={[
            {
              required: true,
              message: "Please input your Product Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            console.log("Describsion", editor.getData());
            setDescription(editor.getData());
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        {/* <input onChange={handleChange} type="file" /> */}
        <Form.Item
          label="Product Image"
          name="images"
          rules={[
            {
              required: true,
              message: "Please Upload Your Product Image!",
            },
          ]}
        >
          <Input onChange={handleChange} type="file" />
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

export default AddProduct;
