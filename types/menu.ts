export type TMenu = {
    label: string;
    link?: string;
    subMenu?: TMenu[];
    specialClass?: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void
}