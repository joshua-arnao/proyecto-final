import { Button, Card, Typography, card, Alert } from "antd";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export function PageMenuSetup() {
  const { Title } = Typography;
  return (
    <div className="pagemenusetup">
      <Title level={3}>Seleccione una acción:</Title>
      <MenuForm />
    </div>
  );
}

function MenuForm() {
  const globaluserID = useSelector((state) => state.userID);
  const history = useHistory();
  return globaluserID == 1 ? (
    <div>
      <Button
        size={"large"}
        onClick={() => {
          history.push("/setup/newuser");
        }}
        style={{ marginBottom: "1rem" }}
      >
        Crear Nuevo Usuario
      </Button>{" "}
      <br />
      <Button
        size={"large"}
        onClick={() => {
          history.push("/setup/userlist");
        }}
      >
        Ver Lista de Usuarios
      </Button>
    </div>
  ) : (
    <div>
      <Alert message="Permisos Insuficientes" type="error" />
      <Button
        style={{
          justifySelf: "flex-start",
          alignSelf: "flex-start",
          marginTop: "1rem",
        }}
        onClick={() => {
          history.push("/courses");
        }}
      >
        Regresar
      </Button>
    </div>
  );
}
