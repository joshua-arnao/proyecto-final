import { Card, Tabs, Button } from "antd";
import { Redirect, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { TabPane } = Tabs;

export function PageStore() {
  const history = useHistory();
  return (
    <div className="flex">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Destacados" key="1">
            <div className="coursesList flex flex-wrap gap-6">
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
                  title="¿Cómo desarrollar una cultura de aprendizaje en remoto?"
                  description="Aprendiendo a desarrollar una cultura de aprendizaje y mejora continua como equipo en un contexto..."
                />
                <div className="grid mt-8">
                    <Button className="buttonPrimary" type="primary" onClick={()=>{history.push("/course-detail")}}>VER MAS</Button>
                </div>
              </Card>
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
                  title="¿Cómo desarrollar una cultura de aprendizaje en remoto?"
                  description="Aprendiendo a desarrollar una cultura de aprendizaje y mejora continua como equipo en un contexto..."
                />
                <div className="grid mt-8">
                    <Button className="buttonPrimary" type="primary" onClick={()=>{history.push("/course-detail")}}>VER MAS</Button>
                </div>
              </Card>
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
                  title="¿Cómo desarrollar una cultura de aprendizaje en remoto?"
                  description="Aprendiendo a desarrollar una cultura de aprendizaje y mejora continua como equipo en un contexto..."
                />
                <div className="grid mt-8">
                    <Button className="buttonPrimary" type="primary" onClick={()=>{history.push("/course-detail")}}>VER MAS</Button>
                </div>
              </Card>
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
                  title="¿Cómo desarrollar una cultura de aprendizaje en remoto?"
                  description="Aprendiendo a desarrollar una cultura de aprendizaje y mejora continua como equipo en un contexto..."
                />
                <div className="grid mt-8">
                    <Button className="buttonPrimary" type="primary" onClick={()=>{history.push("/course-detail")}}>VER MAS</Button>
                </div>
              </Card>
            </div>
          </TabPane>
          <TabPane tab="Innovación" key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab="Soft skills" key="3">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab="Tecnología" key="4">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}