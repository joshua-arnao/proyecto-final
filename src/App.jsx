import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./components/main/main";
import { PageLogin } from "../src/pages/login/login";
// import { HashRouter as Router, Switch } from "react-router-dom";
import { LayoutPrivate } from "./layouts/layout-private/layout-private";
import "antd/dist/antd.css";
import "./assets/style/main.scss";
import {store,persistor} from "./store/store";
import { Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
/* 
COMPONENTES WRAPPER
*/

export function App() {

  return (
    <Provider store={store}>
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
        <Router>
          <div className="wrapper">
              <LayoutPrivate/>
          </div>
        </Router>
    </Provider>
  );
}
