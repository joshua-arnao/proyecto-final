import { Table,Typography,Spin,Button } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';

export function PageUserList(){
  const history = useHistory();
    const {Title}=Typography;
    return (
    <div className="pageuserlist">
    <Title level={2}>Lista de Usuarios:</Title>
    <div style={{padding:"1rem"}}>
        <UserComponentList/>
    </div>
    <Button type="secondary" style={{ marginLeft: "5px" }} onClick={()=>{history.push("/setup")}}>
          Regresar
        </Button>
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
            scroll={{ x: 1300, y:400 }}           
            />
        </div>
    )
};