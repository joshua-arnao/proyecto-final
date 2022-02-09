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
import "antd/dist/antd.css";
import "./assets/style/main.scss";

/* 
COMPONENTES WRAPPER
*/
export function App() {
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
                    Mis cursos
                  </Menu.Item>
                  <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
                    Libreria
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UserOutlined />}>
                    Mi perfil
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
      </div>
    </Router>
  );
}
