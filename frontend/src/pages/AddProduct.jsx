import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const AddProduct = () => {
  let [describsion, setDescribsion] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
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
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            console.log("Describsion", editor.getData());
            setDescribsion(editor.getData());
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />

        <Form.Item
          label="Product Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Please Upload Your Product Image!",
            },
          ]}
        >
          <Input type="file" />
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
