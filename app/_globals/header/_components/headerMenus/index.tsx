"use client";

import { Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./styles.scss";

import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderMenusProps } from "@/app/_globals/types";

import { useAppDispatch, useAppSelector } from "@/app/_utils/redux/hooks";
import { setToggle } from "@/app/_utils/redux/features/drawer/drawerSlice";

const HeaderMenus = ({ menus }: HeaderMenusProps) => {
    const pathname = usePathname();
    const [activePage, setActivePage] = useState<string>(pathname);
    const [
        burgerOpened,
        { open: burgerOpen, close: burgerClose, toggle: burgerToggle },
    ] = useDisclosure();

    const isDrawerOpen = useAppSelector((state) => state.drawer.open);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setActivePage(pathname);
        // console.log("current page: ", pathname);
    }, [pathname]);

    useEffect(() => {
        if (!isDrawerOpen) {
            burgerClose();
        }
    }, [isDrawerOpen, burgerClose]);
    return (
        <>
            <div className="menu">
                {menus?.map((menuItem, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="menu__item">
                                <Link
                                    className="menu__item__link"
                                    href={{
                                        pathname: `${menuItem.page}`,
                                    }}
                                >
                                    <Text
                                        size="md"
                                        className={
                                            menuItem.page === activePage
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {menuItem.name}
                                    </Text>
                                </Link>
                            </div>

                            {index < menus.length - 1 ? (
                                <div className="menu__divider" />
                            ) : (
                                ""
                            )}
                        </Fragment>
                    );
                })}
            </div>
            <div className="burger-menu">
                <Burger
                    opened={burgerOpened}
                    onClick={() => {
                        burgerToggle();
                        dispatch(setToggle());
                    }}
                    aria-label="Toggle navigation"
                />
            </div>
        </>
    );
};

export default HeaderMenus;
