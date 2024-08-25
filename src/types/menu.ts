export type SideMenu = {
    type: "item";
    label: string;
    icon: string;
    href: string;
} | {
    type: "item-tree";
    label: string;
    icon: string;
    subitems: SubMenu[];
};

export type SubMenu = {
    label: string;
    href: string;
}