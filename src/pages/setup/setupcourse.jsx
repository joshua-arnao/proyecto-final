import { Form, Button, Input, Alert,Typography, message } from "antd";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export function PageSetupCourse() {
    const { Title } = Typography;
  return (
    <div className="pagesetupcourse">
      <Title level={2}>Registrar Nuevo Curso:</Title>
      <SetupCourse />
    </div>
  );
}

export function SetupCourse() {
  //validación de admin user ID:
  const globaluserID = useSelector((state) => state.userID);

  const history = useHistory();

  //POST request after form submitted.
  const onFinish = (values) => {
    //Object to save form data retrieved after submit:
    const NewCourseData = {
      title: values.title,
      description: values.description,
      dempezar: values.dempezar,
      dsensibilizacion: values.dsensibilizacion,
      daplicaloaprendido: values.daplicaloaprendido,
      devaluacion: values.devaluacion,
      acercade:values.acercade,
      img:values.img,
    };
    //post request to create a course in the api with form values.
    axios
      .post("https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos", NewCourseData)
      .then((updatecourse) => {
        alert("Curso creado con éxito");
        form.resetFields();
        console.log(updatecourse);
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
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Please input a Title.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description" rules={[{required:true,message:"Curso necesita descripción"}]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="acercade" label="Acerca de" rules={[{required:true,message:"Curso necesita una imagen"}]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="img" label="Imagen URL" rules={[{required:true,message:"Curso necesita una imagen"},{type:"url",message:"Ingrese el url de la imgaen"}]}>
        <Input />
      </Form.Item>

      <Form.Item name="dempezar" label="Empezar-Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="dsensibilizacion" label="Sensibilización-Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="daplicaloaprendido"
        label="Aplica lo Aprendido-Description"
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="devaluacion" label="Evaluación-Description">
        <Input.TextArea />
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
            form.resetFields();
            history.push("/setup");
          }}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <div>
      <Alert message="Permisos Insuficientes" type="error" />
      <Button
        style={{ justifySelf: "flex-start", alignSelf: "flex-start" }}
        onClick={() => {
          history.push("/courses");
        }}
      >
        Regresar
      </Button>
    </div>
  );
}
