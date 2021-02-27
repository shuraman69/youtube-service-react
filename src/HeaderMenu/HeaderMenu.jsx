import {Menu} from "antd";
import {NavLink} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><NavLink to="/search">Поиск</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/favorite">Избранное</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/login">Логин</NavLink></Menu.Item>
        </Menu>
    )
}
export default HeaderMenu