import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
  
import { PageLogin } from "./pages/login/login";
import { PageCourses } from "./pages/courses/courses";
import { PageStore } from "./pages/store/store";
import { PageUser } from "./pages/user/user";
import { PageNotFound } from "./pages/not-found/not-found";

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
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Main>
            </div>
        </Router>
    )
}