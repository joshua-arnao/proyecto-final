import { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/main/main";
import { LayoutPrivate } from "./layouts/layout-private/layout-private";
import { LayoutPublic } from "./layouts/layout-public/layout-public";
import "antd/dist/antd.css";
import "./assets/style/main.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState } from "react";
import { Layout, Menu, Tabs } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ReadOutlined,
  AppstoreAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { PageLogin } from "./pages/login/login";
 import { PageCourses } from "./pages/courses/courses";
 import { PageStore } from "./pages/store/store";
 import { PageUser } from "./pages/user/user";
 import { Link } from "react-router-dom";
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
      
  const { Header, Sider, Content } = Layout;
  const state = {
    collapsed: true,
  };
  const Toggle = () => {
    useState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <Router>
      <div className="wrapper">
        <Main>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={useState.collapsed}>
              <div className="logo" />
              <div
                className="flex-column navBar"
                style={{ minHeight: "100vh" }}
               >
                 <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                   <Menu.Item key="1" icon={<ReadOutlined />}>
                     <Link to="/courses">Mis cursos</Link>
                   </Menu.Item>
                   <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
                     <Link to="/store">Libreria</Link>
                   </Menu.Item>
                   <Menu.Item key="3" icon={<UserOutlined />}>
                     <Link to="/user">Mi perfil</Link>
                   </Menu.Item>
                 </Menu>
                 {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                  <Menu.Item key="4" icon={<UserOutlined />}>
                    Salir
                  </Menu.Item>
                </Menu> */}
              </div>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                  useState.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: Toggle,
                  }
                )}
                Mis Cursos
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                }}
              >
                Step/bar
                card 
                <div>
                  <Switch>
                    <Route path="/courses">
                      <PageCourses />
                    </Route>
                    <Route path="/store">
                      <PageStore />
                    </Route>
                    <Route path="/user">
                      <PageUser />
                    </Route>
                    <Route path="/login">
                      <PageLogin />
                    </Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Main>
      </div>
    </Router>
  );
}