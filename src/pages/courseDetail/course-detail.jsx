import { Button, Collapse, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

export function PageCourseDetail() {
  const history = useHistory();
  const { Panel } = Collapse;

  const text = `Los negocios que triunfan en la era digital son los que entienden que el éxito no está en adoptar la tecnología como su core, sino en el cómo utilizarla para potenciar sus propias fortalezas. En este curso podrás conocer mejor por qué es importante transformar al equipo y a uno mismo, para luego poder utilizar herramientas digitales que potencien tu negocio.`;
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
        <div className="flex gap-8 grid-cols-2">
          <figure>
            <img
              className="w-full"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </figure>
          <div className="flex-column">
            <div>
              <h1>¿Cómo desarrollar una cultura de aprendizaje en remoto?</h1>
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
          <Panel
            header="This panel can only be collapsed by clicking text"
            key="1"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="header" defaultActiveKey={["2"]}>
          <Panel header="This panel can't be collapsed" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Space>
      ,
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
