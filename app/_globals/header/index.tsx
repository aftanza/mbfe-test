import "./styles.scss";
import HeaderMenus from "./_components/headerMenus";
import { MenuItemType } from "../types";
import HeaderMenusDrawer from "./_components/headerMenusDrawer";
import Image from "next/image";
import Link from "next/link";

const menus: MenuItemType[] = [
    { name: "Homepage", page: "/", default: true },
    { name: "Kelas Gratis", page: "/kelas-gratis" },
    { name: "Modul belajar", page: "/modul-belajar" },
    { name: "Kontribusi", page: "/kontribusi" },
];

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Link
                    href={{
                        pathname: `/`,
                    }}
                >
                    <Image
                        src={"/mb-logo.png"}
                        width={2186}
                        height={406}
                        alt={"mb-logo"}
                    />
                </Link>
            </div>
            <div className="header__menu">
                <HeaderMenus menus={menus} />
            </div>
            <HeaderMenusDrawer menus={menus} />
        </div>
    );
};

export default Header;
