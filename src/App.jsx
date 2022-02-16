import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/main/main";
import { LayoutPrivate } from "./layouts/layout-private/layout-private";
import "antd/dist/antd.css";
import "./assets/style/main.scss";
import { Provider} from "react-redux";
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