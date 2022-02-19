import { Card, Tabs, Button, Spin, } from "antd";
import { useHistory } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Meta } = Card;
const { TabPane } = Tabs;

export function PageStore() {
  const history = useHistory();
  const [objectname, setobjectname] = useState([]);
  const [isValueLoded, setisValueLoaded] = useState(false);
  function getCourses() {
    axios
    .get(`https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos`)
    .then((user) => {
      console.log(user.data);
      setobjectname(user.data);
      setisValueLoaded(true);
    })
    .catch((er) => console.log(er));
  }
  useEffect(() => {
    getCourses()
  }, []);
  
  function removeCourse (id) {
    fetch (`https://61ef3d44d593d20017dbb3a9.mockapi.io/Cursos/${id}`, {
      method: 'DELETE'
    })
    .then(() => getCourses())
    .then(() => alert('eliminada'))
    /* .then(res => res.json())
    .then(res => {
      if (res.success) {
        setobjectname(objectname.filter(user => user.id !== id));
        isValueLoded({ setobjectname });
        alert('eliminada');
      }
      console.log(setisValueLoaded)
    }); */
  }
  
  return !isValueLoded ? (
    <Spin tip="cargando.."></Spin>
  ) : (
    <div className="flex">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Destacados" key="1">
            <div className="coursesList flex flex-wrap gap-6">
              {objectname.map((courso) => (
                <Card
                  hoverable
                  style={{ width: 300 }}
                  cover={<img alt="cursos" src={courso.img} />}
                  
                  actions={[
                    <EditOutlined key="edit" />,
                    <DeleteOutlined key="delete"
                    onClick={() => {
                        window.confirm("Estas seguro que deseas eliminar")
                        removeCourse(courso.id);                        
                        console.log("eliminar!!!", courso);
                      }}
                    />
                  ]}
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
                </Card>
              ))}
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
