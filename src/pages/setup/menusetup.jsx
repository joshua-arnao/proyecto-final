import { Button, Card, Typography, card, Alert } from "antd";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export function PageMenuSetup() {
  const { Title } = Typography;
  return (
    <div className="pagemenusetup">
      <Title level={3}>Setup Manager:</Title>
      <MenuForm />
    </div>
  );
}

function MenuForm() {
  const globaluserID = useSelector((state) => state.userID);
  const history = useHistory();
  const { Title } = Typography;
  return globaluserID == 1 ? (
    <div>
      <Title level={5}>Usuarios:</Title>
      <div>
        <Button
          size={"large"}
          onClick={() => {
            history.push("/setup/newuser");
          }}
          style={{ marginBottom: "1rem",width:"160px" }}
        >
          Nuevo Usuario
        </Button>
        <br />
        <Button
          size={"large"}
          style={{marginBottom: "1rem",width:"160px"}}
          onClick={() => {
            history.push("/setup/userlist");
          }}
        >
          Lista de Usuarios
        </Button>
        <br/>
        <Title level={5}>Cursos:</Title>
        <Button
          size={"large"}
          style={{width:"160px"}}
          onClick={() => {
            history.push("/setup/newcourse");
          }}
        >
          Nuevo Curso
        </Button>
      </div>
      {/* <div>
        
      </div> */}
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
          window.location.reload();
          history.push("/courses");
        }}
      >
        Regresar
      </Button>
    </div>
  );
}
