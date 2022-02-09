import "./login.css";
import { Form, Input, Button, Checkbox } from 'antd';
import { Redirect, useHistory } from "react-router";

export function PageLogin({SetAutorizado}) {
    let history = useHistory();

    const onFinish = (values) => {
        if (values.username === "test" && values.password === "test") {
            SetAutorizado(true);
            history.push('/courses');
        } else {
            SetAutorizado(false);
            alert("Contraseña Incorrecta");
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="loginpage">
            <div>
            <div className="title"> Cursos Virtuales</div>
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
                            message: 'Please input your username!',
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
                            message: 'Please input your password!',
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
                        <Button type="secondary" htmlType="submit" style={{width:150}}>
                        INGRESAR
                        </Button>
                    </Form.Item>
                    </Form>
                    
            </div>
            </div>
            </div>
        );
}

