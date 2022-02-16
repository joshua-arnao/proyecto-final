import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

export function PageCourseDetail() {
  return (
    <div className="Page-Course-Detail">
      <Button className="flex align-middle mb-8" type="link" icon={<LeftOutlined />}>
        Regresar
      </Button>
      <div>
        <div className="flex">
          <figure>
            <img className="w-full" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          </figure>
          <div>
            <div>
              <h1>¿Cómo desarrollar una cultura de aprendizaje en remoto?</h1>
              <p>
                Aprendiendo a desarrollar una cultura de aprendizaje y mejora
                continua como equipo en un contexto...
              </p>
            </div>
            <Button
              className="flex align-middle buttonPrimary"
              type="primary"
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>

      <div>
        Imagen:
        <img src="" alt="" />
      </div>
    </div>
  );
}
