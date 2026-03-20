export interface MenuItem {
    id: string;
    title: string;
    href?: string;
    submenu?: MenuItem[];
}