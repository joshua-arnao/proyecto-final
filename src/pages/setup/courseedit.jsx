import React, { useEffect, useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Button } from 'antd';
import "./courseedit.css";
import axios from 'axios';
import { useHistory } from 'react-router';

export function PageCourseEdit() {
  const {Title}=Typography;
  const history = useHistory();
    return (
        <div className="page-course-edit">
          <Title level={2}>Editar Cursos:</Title>
            <EditableTable />
            <Button onClick={()=>{history.push("/setup")}} style={{marginBottom:"1rem"}}>Regresar</Button>
        </div>
    )
};
   
  
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };



function EditableTable()  {
    const [originData,setorigindata] = useState([])

useEffect(()=>{
    axios.get("https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos")
    .then((destino)=>{
       setorigindata(destino.data);
       console.log(originData)
          
    }) 
},["https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos"]);

  const [form] = Form.useForm();

  const [data, setData] = useState(originData);

  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
    titulo: '',
      descripcion: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...originData];
      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
        console.log(newData[index].id);
        axios.put(`https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos/${newData[index].id}`,newData[index])
        .then((portafolio)=>{
            alert("exito")
            console.log(portafolio)})
        .catch((er)=>{console.log(er)})
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
        title: 'CourseID',
        dataIndex: 'id',
        width: '20%',
        editable: false,
      },
    {
      title: 'Titulo',
      dataIndex: 'title',
      width: '20%',
      editable: true,
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      width: '20%',
      editable: true,
    },
    {
      title: 'Acerca De',
      dataIndex: 'acercade',
      width: '15%',
      editable: true,
    },
    {
      title: 'Image URL',
      dataIndex: 'img',
      width: '20%',
      editable: true,
    },
    {
      title: 'Empezar-Descripcion',
      dataIndex: 'dempezar',
      width: '30%',
      editable: true,
    },
    {
      title: 'Sensib. Descrip',
      dataIndex: 'dsensibilizacion',
      width: '30%',
      editable: true,
    },
    {
        title: 'Aplica - Descrip.',
        dataIndex: 'daplicaloaprendido',
        width: '30%',
        editable: true,
      },
      {
        title: 'Evaluación - Descrip.',
        dataIndex: 'devaluacion',
        width: '30%',
        editable: true,
      },
    {
      title: 'Acción',
      dataIndex: 'operation',
      fixed:'right',
      width: '18%',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={originData}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        scroll={{ x: 1300,y:400 }}
      />
    </Form>
  );
};
