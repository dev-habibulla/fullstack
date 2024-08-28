import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import slugify from "react-slugify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  let [description, setDescription] = useState("");
  let [image, setImage] = useState([]);
  let [slugText, setSlugText] = useState("");

  const onFinish = async (values) => {
    console.log("Success:", values);

   
    const formData = new FormData();

    formData.append("name", values.product);
    formData.append("description", description);
    formData.append("regularprice", values.regularprice);
    formData.append("saleprice", values.saleprice); // Corrected
    formData.append("slug", slugText);

    image.forEach((file) => {
      formData.append("photos", file); // Fixed variable naming
    });

    await axios.post(
      "http://localhost:8000/api/v1/product/createproduct",

      formData,

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
    let arr = Array.from(e.target.files);
    setImage(arr);
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
          <Input onChange={(e) => setSlugText(e.target.value)} />
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
          <Input onChange={handleChange} type="file" multiple />
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

        <span>Slug</span>
        <input
          style={{ width: "100%" }}
          defaultValue={slugify(slugText)}
          disabled
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
    </div>
  );
};

export default AddProduct;
