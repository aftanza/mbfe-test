import "./styles.scss";
import HeaderMenus from "./_components/headerMenus";
import { MenuItemType } from "../types";
import HeaderMenusDrawer from "./_components/headerMenusDrawer";

const menus: MenuItemType[] = [
    { name: "Homepage", page: "/", default: true },
    { name: "Kelas Gratis", page: "/kelas-gratis" },
    { name: "Modul belajar", page: "/modul-belajar" },
    { name: "Kontribusi", page: "/kontribusi" },
];

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">Logo here</div>
            <div className="header__menu">
                <HeaderMenus menus={menus} />
            </div>
            <HeaderMenusDrawer menus={menus} />
        </div>
    );
};

export default Header;
