import { Button, Tree } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

export function PageLearnCourse() {
  const history = useHistory();
  const treeData = [
    {
      title: "¿Cómo desarrollar una cultura de aprendizaje en remoto?",
      key: "0-0",
      children: [
        {
          title: "Antes de empezar",
          key: "0-0-0",
          children: [
            {
              title: "¿Para qué sirve Aprende?",
              key: "0-0-0-0",
            },
            {
              title: "¿Qué esperar del curso?",
              key: "0-0-0-1",
            },
            {
                title: "¿Organízate & Aprende?",
                key: "0-0-0-2",
            },
            {
                title: "Comunidad",
                key: "0-0-0-3",
            },
          ],
        },
        {
          title: "Ejemplos y herramientas que utilizamos",
          key: "0-0-1",
          children: [
            {
              title: (
                <span
                  style={{
                    color: "#1890ff",
                  }}
                >
                  Principios de una cultura de aprendizaje en remoto
                </span>
              ),
              key: "0-0-1-0",
            },
            {
                title: "Confianza sobre control",
                key: "0-0-2-0",
            },
            {
                title: "Organización y priorización",
                key: "0-0-3-0",
            },
            {
                title: "Virtual es igual a presencial",
                key: "0-0-4-0",
            },
            {
                title: "El poder de la reflexión",
                key: "0-0-5-0",
            },
            {
                title: "Explica lo que has aprendido",
                key: "0-0-6-0",
            },
          ],
        },
        {
            title: "Cultura de aprendizaje",
            key: "0-0-2",
            children: [
              {
                  title: "Cultura ganadora en la nueva era digital",
                  key: "0-1-0-0",
              },
              {
                  title: "Explica lo que has aprendido",
                  key: "0-2-0-0",
              },
            ],
        },
        {
            title: "Acompañamiento",
            key: "0-0-3",
            children: [
              {
                  title: "Evaluación del curso",
                  key: "1-0-0-0",
              },
              {
                  title: "Sigue aprendiendo",
                  key: "2-0-0-0",
              },
              {
                title: "Visita nuestro hub de contenidos",
                key: "3-0-0-0",
            },
            ],
          },
      ],
    },
  ];

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  return (
    <div>
      <Button
        className="flex align-middle mb-8"
        type="link"
        icon={<LeftOutlined />}
        onClick={() => {
          history.push("/courses");
        }}
      >
        Regresar
      </Button>
      <Tree
        checkable
        defaultExpandAll
        defaultSelectedKeys={[""]}
        defaultCheckedKeys={[""]}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        className="treeData"
      />
    </div>
  );
}
