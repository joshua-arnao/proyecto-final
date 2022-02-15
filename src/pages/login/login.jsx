import "./login.css";
import { Form, Input, Button, Checkbox, Empty } from "antd";
import { Redirect, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export function PageLogin() {
  const dispatch = useDispatch();
  let history = useHistory();

  const onFinish = (values) => {
    // API Get request to verify a match between username input vs username from api
    axios
      .get("https://61ef3d44d593d20017dbb3a9.mockapi.io/users")
      .then((user) => {
        if (
          user.data.filter((users) => (users.name == values.username) && (users.Password == values.password)).length == 0
        ) {
          console.log("not success");
          dispatch({
            type: "SET_IS_LOGIN",
            payload: false,
          });
          alert("Contraseña Incorrecta");
        } else {
          var userloggedin = user.data.filter((users) => users.name == values.username);
          var userarray = userloggedin.map(x=>parseInt(x.id,10));
          var newUserID = userarray[0];
          
          dispatch({
            type: "SET_IS_LOGIN",
            payload: true,
          });
          dispatch({
            type: "SET_USER_ID",
            iduser: newUserID,
          })
          history.push("/courses");
          alert(`Bienvenido ${values.username}`);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="loginpage">
      <div>
        <div className="title">Cursos Virtuales</div>
        <div className="loging-wrapper">
          <Form
            name="login"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
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
              <Button type="secondary" htmlType="submit" style={{ width: 150 }}>
                INGRESAR
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
