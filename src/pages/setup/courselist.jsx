import { Table,Typography,Spin,Button } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';

export function PageCourseList(){
  const history = useHistory();
    const {Title}=Typography;
    return (
    <div className="pagecourselist">
    <Title level={2}>Lista de Cursos:</Title>
    <div style={{padding:"1rem"}}>
        <CourseComponentList/>
    </div>
    <Button type="secondary" style={{ marginLeft: "5px" }} onClick={()=>{history.push("/setup")}}>
          Regresar
        </Button>
</div>)
};

function CourseComponentList(){
    // const columns = [
    //     {
    //         title: 'UserID',
    //         dataIndex: 'id',
    //         key: 'id',
    //       },
    //     {
    //       title: 'Name',
    //       dataIndex: 'name',
    //       key: 'name',
    //     },
    //     {
    //       title: 'Lastname',
    //       dataIndex: 'lastname',
    //       key: 'age',
    //     },
    //     {
    //       title: 'TaxPayerID',
    //       dataIndex: 'TaxPayer',
    //       key: 'TaxPayer',
    //     },
    //     {
    //         title: 'Email',
    //         dataIndex: 'email',
    //         key: 'email',
    //       },
    //     {
    //         title: 'Username',
    //         dataIndex: 'username',
    //         key: 'username',
    //       },
    //     {
    //         title: 'Password',
    //         dataIndex: 'Password',
    //         key: 'Password',
    //       },
    //   ];
      const columns = [
        {
            title: 'CourseID',
            dataIndex: 'id',
            width: '10%',
          },
        {
          title: 'Titulo',
          dataIndex: 'title',
          width: '15%',

        },
        {
          title: 'Descripción',
          dataIndex: 'description',
          width: '20%',

        },
        {
          title: 'Acerca De',
          dataIndex: 'acercade',
          width: '15%',

        },
        {
          title: 'Image URL',
          dataIndex: 'img',
          width: '20%',
        },
        {
          title: 'Empezar-Descripcion',
          dataIndex: 'dempezar',
          width: '20%',
        },
        {
          title: 'Sensib. Descrip',
          dataIndex: 'dsensibilizacion',
          width: '20%',
        },
        {
            title: 'Aplica - Descrip.',
            dataIndex: 'daplicaloaprendido',
            width: '20%',
          },
          {
            title: 'Evaluación - Descrip.',
            dataIndex: 'devaluacion',
            width: '20%',
          },
      ];

//Predetermined values for the Form.
const [objectname, setobjectname] = useState([]);

    //Predetermined value to capture if get request values were received already.
  const [isValueLoded, setisValueLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos`)
      .then((course) => {
          console.log(course.data)
          setobjectname(course.data);
            setisValueLoaded(true);
      })
      .catch((er)=>console.log(er));
    }, [`https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos`]);

    return !isValueLoded ? ( <Spin tip="Cargando..." size="large" style={{marginLeft:"40%",marginRight:"40%",marginTop:"10%"}}>
    </Spin>) : (
        <div>
            <Table
            dataSource={objectname}  
            columns={columns}
            scroll={{ x: 1300,y:350 }}         
            />
        </div>
    )
};