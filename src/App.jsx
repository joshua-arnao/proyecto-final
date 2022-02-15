import { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/main/main";
import { PageLogin } from "../src/pages/login/login";
import { LayoutPrivate } from "./layouts/layout-private/layout-private";
import { LayoutPublic } from "./layouts/layout-public/layout-public";
import "antd/dist/antd.css";
import "./assets/style/main.scss";
import { Provider,useSelector } from "react-redux";
import {store,persistor} from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
/* 
COMPONENTES WRAPPER
*/


export function App() {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <div className="wrapper">
        <Switch>
        <PageLogin/> 
          <Main>
          <LayoutPrivate/>
          </Main>
          </Switch>
      </div>
    </Router>
    </PersistGate>
    </Provider>
  );
}