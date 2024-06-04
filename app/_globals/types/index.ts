export type MenuItemType = {
    default?: boolean;
    name: string;
    page: string;
};

export type HeaderMenusProps = {
    menus: MenuItemType[];
};

export type BoxHighlightProps = {
    children: React.ReactNode;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    highlightStyle?: React.CSSProperties;
    highlightClassName?: string;
};

export type TujuanUtamaPointProps = {
    lines: React.ReactNode[];
};

export type PisaScoreProps = {
    pisaScore: number;
    pisaTitle: string;
    pisaOECDAverage: number;
};

export type MbStatsType = {
    title: string;
    description: string;
};

export type MbStatsProps = {
    stats: MbStatsType;
};

export type ProvinsiProps = {
    provinsi: string[];
};
