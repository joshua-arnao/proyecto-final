import { Button,Typography } from "antd";
import { useHistory } from "react-router";

export function PageMenuSetup() {
  const {Title} = Typography;
    return (
    <div className="pagemenusetup">
      <Title level={3}>Seleccione una acción:</Title>
      <MenuForm />
    </div>
  );
}

function MenuForm(){
    const history = useHistory();
    return (
        <div>
                <Button size={"large"} onClick={()=>{history.push("/setup/newuser")}} style={{marginBottom:"1rem"}}>Crear Nuevo Usuario</Button> <br/>
                <Button size={"large"} onClick={()=>{history.push("/setup/userlist")}}>Ver Lista de Usuarios</Button>
        </div>
    )
}