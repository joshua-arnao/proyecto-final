main
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
main
import { Main } from "./components/main/main";
import { LayoutPrivate } from "./layouts/layout-private/layout-private";
import "antd/dist/antd.css";
import "./assets/style/main.scss";
main
import { Provider} from "react-redux";
import {store,persistor} from "./store/store";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./store/store";
main
import { PersistGate } from "redux-persist/integration/react";
import { PageCourses } from "./pages/courses/courses";
import { PageStore } from "./pages/store/store";
import { PageUser } from "./pages/user/user";
import { PageLogin } from "./pages/login/login";
import { PageCourseDetail } from "./pages/courseDetail/course-detail";
import history from "./utils/history";
/* 
COMPONENTES WRAPPER
*/

export function App() {
  const [stateStore, setStateStore] = useState({});

  store.subscribe((state) => {
    console.log("state", store.getState());
    setStateStore(store.getState());
  });

  useEffect(() => {
    console.log("stateStore", stateStore);
  }, [stateStore]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="wrapper">
            <Switch>
              <Main>
                <Route path="/login" render={() => <PageLogin />} />
                <Route
                  exact
                  path="/courses"
                  render={() =>
                    stateStore.isLogin ? (
                      <LayoutPrivate>
                        <PageCourses />
                      </LayoutPrivate>
                    ) : (
                      history.push("/login")
                    )
                  }
                />
                <Route
                  path="/course-detail"
                  render={() =>
                    stateStore.isLogin ? (
                      <LayoutPrivate>
                        <PageCourseDetail />
                      </LayoutPrivate>
                    ) : (
                      history.push("/login")
                    )
                  }
                />
                <Route
                  path="/store"
                  render={() =>
                    stateStore.isLogin ? (
                      <LayoutPrivate>
                        <PageStore />
                      </LayoutPrivate>
                    ) : (
                      history.push("/login")
                    )
                  }
                />
                <Route
                  path="/user"
                  render={() =>
                    stateStore.isLogin ? (
                      <LayoutPrivate>
                        <PageUser />
                      </LayoutPrivate>
                    ) : (
                      history.push("/login")
                    )
                  }
                />
                {/* <Redirect exact from="/" to="/login"></Redirect> */}
                {/* <Redirect exact from="/" to="/courses"></Redirect>
                <Redirect exact from="/" to="/login"></Redirect> */}
                {/* <LayoutPrivate /> */}
              </Main>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}
