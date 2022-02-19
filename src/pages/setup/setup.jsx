// validacion para que el user id sea solo el 1, sino "acceso denegado"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import {Form,Input, Button,Alert} from "antd";
import "./setup.css";
export function PageUserSetup() {
    return (
    <div className="pageusersetup">
      <h2>Crear Nuevo Usuario:</h2>
      <SetupForm />
    </div>
  );
}

export function SetupForm() {

    const globaluserID = useSelector((state) => state.userID);
  const history = useHistory();

  //POST request after form submitted.
  const onFinish = (values) => {
    //Object to save form data retrieved after submit:
    const NewUserData = {
      name: values.name,
      lastname: values.lastname,
      TaxPayer: values.taxpayer,
      Password: values.password,
      email: values.email,
      username: values.username,
    };
    //post request to create a user in the api with form values.
    axios
      .post(`https://61ef3d44d593d20017dbb3a9.mockapi.io/users/`, NewUserData)
      .then((updateuser) => {
        alert("Usuario creado con éxito");
        form.resetFields();
        console.log(updateuser);
      })
      .catch((err) => {
        console.log(err);
      });

    //Log of values updated from form.
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
  return globaluserID == 1 ? (
    <Form
      {...formItemLayout}
      form={form}
      name="userInfo"
      onFinish={onFinish}
      scrollToFirstError
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
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: "The input is not a valid username",
          },
          {
            type: "string",
            message: "The input is not a valid username",
          },
          () => ({
            validator(rule, value = "") {
              if (value.includes(" ") === true) {
                return Promise.reject("username should not contain spaces");
              } else {
                return Promise.resolve();
              }
            },
          }),
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
          className="buttonPrimary"
          type="primary"
          htmlType="submit"
          style={{
            color: "black",
            fontWeight: "500",
            letterSpacing: "1px",
            width: "100px",
          }}
        >
          Create
        </Button>
        <Button
          type="secondary"
          style={{ marginLeft: "5px" }}
          onClick={() => {
            history.push("/setup");
          }}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  ) : (
  <div>
  <Alert message="Permisos Insuficientes" type="error"/>
  <Button style={{justifySelf:"flex-start",alignSelf:"flex-start"}} onClick={() => {
       history.push("/courses");
     }}>Regresar</Button>
     </div>
  )
}
