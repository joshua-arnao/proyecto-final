import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router";
const { SubMenu } = Menu;

export function PageCourses(autorizado) {
    if (!autorizado == true) {
        <Redirect to="/login"/>
    }


    return (
        <div className="flex">
            <div className="p-4">CONTENIDO</div>
        </div>
    );
}