import { Redirect } from "react-router";

export function PageUser(autorizado) {
    if (!autorizado == true) {
        <Redirect to="/login"/>
    }
    return <div>Page User</div>;
}