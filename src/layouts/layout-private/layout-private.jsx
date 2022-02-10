import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ReadOutlined,
  AppstoreAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Tabs } from "antd";

import { Header } from "../../components/header/header";
import { PageCourses } from "../../pages/courses/courses";
import { PageStore } from "../../pages/store/store";
import { PageUser } from "../../pages/user/user";
import { Link } from "react-router-dom";

export function LayoutPrivate(props) {
  const { Header, Sider, Content } = Layout;
  const state = {
    collapsed: true,
  };

  const Toggle = () => {
    useState({
      collapsed: !state.collapsed,
    });
  };

  const [Autorizado, SetAutorizado] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={useState.collapsed}>
          <div className="logo" />
          <div className="flex-column navBar" style={{ minHeight: "100vh" }}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<ReadOutlined />}>
                <Link to="/courses" autorizado={Autorizado}>
                  Mis cursos
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
                <Link to="/store" autorizado={Autorizado}>
                  Libreria
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                <Link to="/user" autorizado={Autorizado}>
                  Mi perfil
                </Link>
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
            Step/bar card
            <div>
              <Route path="/courses">
                <PageCourses autorizado={Autorizado} />
              </Route>
              <Route path="/store">
                <PageStore autorizado={Autorizado} />
              </Route>
              <Route path="/user">
                <PageUser autorizado={Autorizado} />
              </Route>
              <Redirect from="/" to="/login"></Redirect>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
