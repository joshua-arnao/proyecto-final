import { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/main/main";
import { LayoutPrivate } from "./layouts/layout-private/layout-private";
import { LayoutPublic } from "./layouts/layout-public/layout-public";
import "antd/dist/antd.css";
import "./assets/style/main.scss";

/* 
COMPONENTES WRAPPER
*/
export function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Main>
            {isLogin && <LayoutPrivate />}
            {!isLogin && <LayoutPublic />}
            {/* <div className="navBar flex-column min-h-full space-y-[500px]">
            <div>
              <Menu
                onClick={handleClick}
                className="min-h-full"
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                //   mode={mode}
                //   theme={theme}
              >
                <Menu.Item key="1" icon={<ReadOutlined />}>
                  Mis cursos
                </Menu.Item>
                <Menu.Item key="2" icon={<AppstoreOutlined />}>
                  Libreria
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                  Mi perfil
                </Menu.Item>
              </Menu>
            </div>
            <div>
              <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                //   mode={mode}
                //   theme={theme}
              >
                <Menu.Item key="4" icon={<ReadOutlined />}>
                  Salir
                </Menu.Item>
              </Menu>
            </div>
          </div> */}
          </Main>
        </Switch>
      </div>
    </Router>
  );
}
