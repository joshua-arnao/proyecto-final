import { Redirect } from "react-router";

export function PageStore(autorizado) {
    if (!autorizado == true) {
        <Redirect to="/login"/>
    }

    return <div>Page Store</div>;
}