import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { Form, Input, Select, Button } from "antd";
import { Redirect } from "react-router";
import axios from "axios";
import "./user.css";

export function PageUser() {
  return (
    <div className="pageuser-container">
      <h2>Datos del Usuario:</h2>
      <RegistrationForm />
    </div>
  );
}

function RegistrationForm() {
  //Predetermined values for the Form.
  const [objectname, setobjectname] = useState([
    {
      name: "",
      lastName: "",
      taxpayer: "",
      email: "",
    },
  ]);
  const [isValueLoded, setisValueLoaded] = useState(false);

  //get request for user value and update objectname
  useEffect(() => {
    axios
      .get("https://61ef3d44d593d20017dbb3a9.mockapi.io/users/1")
      .then((user) => {
        const UpdatedUser = {
          name: user.data.name,
          lastname: user.data.lastname,
          taxpayer: user.data.TaxPayer,
          email: user.data.email,
        };
        setobjectname(UpdatedUser);
        setisValueLoaded(true);
      });
  }, ["https://61ef3d44d593d20017dbb3a9.mockapi.io/users/1"]);

  //post request after form submitted.
  const onFinish = (values) => {
    //Object to save form data:
    const NewUserData = {
      name: values.name,
      lastname: values.lastname,
      TaxPayer: values.taxpayer,
      Password: values.password,
      email: values.email,
    };
    //put request to update api
    axios
      .put("https://61ef3d44d593d20017dbb3a9.mockapi.io/users/1", NewUserData)
      .then((updateuser) => {
        alert("Datos actualizados con éxito");
        console.log(updateuser);
      })
      .catch((err) => {
        console.log(err);
      });

    //actualizar el api con los nuevos valores.
    console.log("Received values of form: ", values);
  };

  //Form Layout
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  //FORM
  const [form] = Form.useForm();

  //conditional rendering only if axios get request was loaded.
  return !isValueLoded ? (
    <div style={{ padding: "10px", fontWeight: "bold", fontSize: "20px" }}>
      Loading...
    </div>
  ) : (
    <Form
      {...formItemLayout}
      form={form}
      name="userInfo"
      onFinish={onFinish}
      scrollToFirstError
      initialValues={objectname}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: false,
            message: "Please input a Name.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            required: false,
            message: "Please input your Last Name.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="taxpayer"
        label="National ID"
        rules={[
          {
            type: "string", //por alguna razón no funciona la validación de número?
            message: "Please enter a Number",
          },
          {
            required: false,
            message: "Please input a valid ID.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            color: "black",
            fontWeight: "500",
            letterSpacing: "1px",
            width: "100px",
          }}
        >
          Save
        </Button>
        <Button type="secondary" style={{ marginLeft: "5px" }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
}
