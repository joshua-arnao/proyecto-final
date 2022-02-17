import { Table,Typography,Spin } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import axios from 'axios';
import React, { useState, useEffect } from "react";

export function PageUserList(){
    const {Title}=Typography;
    return (
    <div className="pageuserlist">
    <Title level={2}>Lista de Usuarios:</Title>
    <div style={{padding:"1rem"}}>
        <UserComponentList/>
    </div>
</div>)
};

function UserComponentList(){
    const columns = [
        {
            title: 'UserID',
            dataIndex: 'id',
            key: 'id',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Lastname',
          dataIndex: 'lastname',
          key: 'age',
        },
        {
          title: 'TaxPayerID',
          dataIndex: 'TaxPayer',
          key: 'TaxPayer',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
          },
        {
            title: 'Password',
            dataIndex: 'Password',
            key: 'Password',
          },
      ];


//Predetermined values for the Form.
const [objectname, setobjectname] = useState([]);

    //Predetermined value to capture if get request values were received already.
  const [isValueLoded, setisValueLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://61ef3d44d593d20017dbb3a9.mockapi.io/users`)
      .then((user) => {
          console.log(user.data)
          setobjectname(user.data);
            setisValueLoaded(true);
      })
      .catch((er)=>console.log(er));
    }, [`https://61ef3d44d593d20017dbb3a9.mockapi.io/users`]);

    return !isValueLoded ? ( <Spin tip="Cargando..." size="large" style={{marginLeft:"40%",marginRight:"40%",marginTop:"10%"}}>
    </Spin>) : (
        <div>
            <Table
            dataSource={objectname}  
            columns={columns}          
            />
        </div>
    )
};



function UserComponent(props) {
const {name,username,lastname,TaxPayer,email,Password,id} = props;
    return (
        <div>
            <h2>Username: {props.username}</h2>
            <h3>User Details:</h3>
            <ul>
                <li><strong>Name:</strong> {props.name}</li>
                {/* <li><strong>Last Name:</strong> {props.lastname}</li>
                <li><strong>TaxPayer:</strong> {props.TaxPayer}</li>
                <li><strong>E-mail:</strong> {props.email}</li>
                <li><strong>Password:</strong> {props.Password}</li>
                <li><strong>User Id:</strong> {props.id}</li> */}
            </ul>
        </div>
    )
}