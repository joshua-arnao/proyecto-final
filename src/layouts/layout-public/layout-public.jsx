import { Route } from "react-router-dom";
import { PageLogin } from "../../pages/login/login";



export function LayoutPublic(props) {
  return (
    <div>
      <Route path="/login">
        <PageLogin/>
      </Route>
    </div>
  );
}
