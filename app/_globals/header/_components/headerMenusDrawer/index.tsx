"use client";

import { HeaderMenusProps } from "@/app/_globals/types";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "@/app/_utils/redux/hooks";
import Link from "next/link";
import { Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { setToggle } from "@/app/_utils/redux/features/drawer/drawerSlice";

const HeaderMenusDrawer = ({ menus }: HeaderMenusProps) => {
    const dispatch = useAppDispatch();

    const pathname = usePathname();

    const [activePage, setActivePage] = useState<string>(pathname);

    const isDrawerOpen = useAppSelector((state) => state.drawer.open);

    useEffect(() => {
        setActivePage(pathname);
        console.log("current page: ", pathname);
    }, [pathname]);

    return (
        <div
            className={
                "burger-drawer " +
                (isDrawerOpen ? "drawer-open" : "drawer-closed")
            }
        >
            {menus.map((menuItem, index) => {
                return (
                    <div className="burger-drawer__item" key={index}>
                        <Link
                            className="burger-drawer__item__link"
                            href={{
                                pathname: `${menuItem.page}`,
                            }}
                            onClick={() => {
                                dispatch(setToggle());
                            }}
                        >
                            <Text
                                size="md"
                                className={
                                    menuItem.page === activePage ? "active" : ""
                                }
                            >
                                {menuItem.name}
                            </Text>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default HeaderMenusDrawer;
