import { Card, Avatar, Tabs, Button } from "antd";
const { Meta } = Card;
const { TabPane } = Tabs;

export function PageCourses() {
  return (
    <div className="flex">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Mis cursos" key="1">
            <div className="coursesList">
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="¿Cómo desarrollar una cultura de aprendizaje en remoto?"
                  description="Aprendiendo a desarrollar una cultura de aprendizaje y mejora continua como equipo en un contexto..."
                />
                <div className="grid mt-8">
                    <Button className="buttonPrimary" type="primary">INGRESAR</Button>
                </div>
              </Card>
            </div>
          </TabPane>
          <TabPane tab="Lista de deseos" key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
