export type MenuItemType = {
    default?: boolean;
    name: string;
    page: string;
};

export type HeaderMenusProps = {
    menus: MenuItemType[];
};
