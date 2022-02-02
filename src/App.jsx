import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
  
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

import { PageLogin } from "./pages/login/login";
import { PageCourses } from "./pages/courses/courses";
import { PageStore } from "./pages/store/store";
import { PageUser } from "./pages/user/user";

/* 
COMPONENTES WRAPPER
*/
export function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Main>
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
                </Main>
            </div>
        </Router>
    )
}