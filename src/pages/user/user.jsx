import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import { Redirect } from "react-router";
import axios from 'axios';
import "./user.css";

export function PageUser(autorizado) {
    if (!autorizado == true) {
        <Redirect to="/login"/>
    }
    return (
    
    <div className="pageuser-container">
        <h2>Datos del Usuario:</h2>
        <RegistrationForm/>
    </div>
    
    );
}

function RegistrationForm() {
    //LAYOUT
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
    //Event after finish
    const onFinish = (values) => {
        
        // axios.get("https://61ef3d44d593d20017dbb3a9.mockapi.io/users/1")
        // .then((user)=>{
            
            
        //     console.log(user.data)
        // })
        // .catch((error)=> console.log(error))
    
        console.log('Received values of form: ', values);
    };
    
        const [objectname,setobjectname] = useState({
            name: "", 
             lastName: "",
             taxpayer: "",
             email: "",
        });

        useEffect(()=>{
            axios.get("https://61ef3d44d593d20017dbb3a9.mockapi.io/users/1")
            .then((user)=>{
                const UpdatedUser = {
                name: user.data.name, 
                lastName: user.data.lastname,
                taxpayer: user.data.TaxPayer,
                email: user.data.email,
                 };
                    setobjectname(UpdatedUser);
                    console.log(objectname);
            });    
        },[]);
    
            return (

                <Form
                  {...formItemLayout}
                  form={form}
                  name="userInfo"
                  onFinish={onFinish}
                  scrollToFirstError
                // initialValues={objectname.name}
                >
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      {
                        required: false,
                        message: 'Please input a Name.',
                      },
                    ]}
                  >
                    <Input defaultValue={objectname.name} />
                  </Form.Item>
                  
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: false,
                        message: 'Please input your Last Name.',
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
                            type: 'string', //por alguna razón no funciona la validación de número?
                            message: 'Please enter a Number',
                          },
                        {
                        required: false,
                        message: 'Please input a valid ID.',
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
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
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
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
            
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
            
                          return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
            
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{color:'black',fontWeight:"500",letterSpacing:"1px",width: "100px"}}>
                      Save
                    </Button>
                    <Button type="secondary" style={{marginLeft:"5px"}}>Cancel</Button>
                  </Form.Item>
                </Form>
              );
    

  
};