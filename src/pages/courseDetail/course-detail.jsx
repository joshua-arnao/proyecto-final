import { Button, Collapse, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

export function PageCourseDetail() {
  const history = useHistory();
  const { Panel } = Collapse;
  const text = `Los negocios que triunfan en la era digital son los que entienden que el éxito no está en adoptar la tecnología como su core, sino en el cómo utilizarla para potenciar sus propias fortalezas. En este curso podrás conocer mejor por qué es importante transformar al equipo y a uno mismo, para luego poder utilizar herramientas digitales que potencien tu negocio.`;
  const textDos = `En esta unidad podrás encontrar más información sobre nuestro Curso introductorio, así como la estructura, objetivos de aprendizaje e información acerca de las facilitadores.`;
  const subTitleUno = `Antes de empezar`;
  const textTres = `Encontrarás contenido para entender mejor ¿Por qué la transformación no consiste en invertir en tecnología y tornar a la utilización de herramientas y/o productos digitales? y ¿Cómo puede uno transformarse para realmente potenciar su trabajo o negocio, más allá de la utilización de herramientas tecnológicas? El objetivo de esta unidad es la sensibilización y reflexión.`;
  const subTitleDos = `Sensibilización y Reflexión`;
  const textCuatro = `En esta unidad es donde pondrás las manos en la masa. Te propondremos un reto para aplicar todo lo que has aprendido a lo largo del curso. Un tip para los que aman aprender: resolver el reto te dará acceso a una sesión en remoto exclusiva con nuestrxs facilitadores.`;
  const subTitleTres = `Aplica lo Aprendido`;
  const textCinco = `El curso se acabó, pero eso no quiere decir que tu experiencia de aprendizaje lo hizo. En Laboratoria creemos que se debe aprender y pedir feedback constantemente para seguir evolucionando. Es por eso que en esta unidad los invitamos a darnos feedback, explorar nuevo contenido y unirte a nuestra comunidad de estudiantes. Nos vemos pronto!`;
  const subTitleCuatro = `Evaluación & Aprende Más`;

  return (
    <div className="Page-Course-Detail">
      <Button
        className="flex align-middle mb-8"
        type="link"
        icon={<LeftOutlined />}
        onClick={() => {
          history.push("/store");
        }}
      >
        Regresar
      </Button>
      <div>
        <div className="flex gap-8 grid grid-cols-2">
          <figure>
            <img
              className="w-full"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </figure>
          <div className="flex-column">
            <div>
              <h1 className="mb-2">¿Cómo desarrollar una cultura de aprendizaje en remoto?</h1>
              <p>
                Aprendiendo a desarrollar una cultura de aprendizaje y mejora
                continua como equipo en un contexto...
              </p>
            </div>
            <div className="flex justify-end">
              <Button className="buttonPrimary m-8" type="primary">
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Space direction="vertical">
        <Collapse collapsible="header" defaultActiveKey={["1"]}>
          <Panel header="Acerca del curso" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="header" defaultActiveKey={["2"]}>
          <Panel header="Temario" key="1">
            <h4 className="mb-4">{subTitleUno}</h4>
            <p className="mb-6">{textDos}</p>
            <h4 className="mb-4">{subTitleDos}</h4>
            <p className="mb-6">{textTres}</p>
            <h4 className="mb-4">{subTitleTres}</h4>
            <p className="mb-6">{textCuatro}</p>
            <h4 className="mb-4">{subTitleCuatro}</h4>
            <p>{textCinco}</p>
          </Panel>
        </Collapse>
      </Space>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
