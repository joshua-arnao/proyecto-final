import { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/main/main";
import { LayoutPrivate } from "./layouts/layout-private/layout-private";
import { LayoutPublic } from "./layouts/layout-public/layout-public";
import "antd/dist/antd.css";
import "./assets/style/main.scss";
import { Provider,useSelector } from "react-redux";
import {store} from "./store/store";
/* 
COMPONENTES WRAPPER
*/


export function App() {
  
  return (
    <Provider store={store} >
    <Router>
      <div className="wrapper">
        <Switch>
          <Main>
          <LayoutPrivate/>
          </Main>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
