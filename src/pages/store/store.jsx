import { Card, Tabs, Button, Spin } from "antd";
import { useHistory } from "react-router";
import axios from 'axios';
import { useState, useEffect } from "react";
const { Meta } = Card;
const { TabPane } = Tabs;

export function PageStore() {
  const history = useHistory();

  const [objectname, setobjectname] = useState([]);
  const [isValueLoded, setisValueLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(`https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos`)
      .then((user) => {
          console.log(user.data)
          setobjectname(user.data);
            setisValueLoaded(true);
      })
      .catch((er)=>console.log(er));
    },[`https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos`]);

  return !isValueLoded ? (<Spin tip="cargando.."></Spin>) :
    (
    <div className="flex">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Destacados" key="1">
            <div className="coursesList flex flex-wrap gap-6">
                {objectname.map((courso) =>
                  <Card
                    style={{ width: 300 }}
                    cover={<img alt="cursos" src={courso.img} />}
                  >
                    <Meta title={courso.title} description={courso.description} />
                    <div className="grid mt-8">
                  <Button
                    className="buttonPrimary w-full"
                    type="primary"
                    onClick={() => {
                      history.push("/course-detail");
                    }}
                  >
                    VER MAS
                  </Button>
                </div>
                  </Card>)}
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
