import { TMenu } from "@/types/menu";
import { useState } from "react";
import styles from '../styles.module.scss'

const Menu = ({ menuItem, level }: { menuItem: TMenu[], level: number }) => {
    const whichMenu = level === 0 ? 'menu' : level === 1 ? 'subMenu' : 'subSubMenu';
    const classBasisOnMenu = whichMenu === 'subMenu' ? styles.sub_Menu : whichMenu === 'subSubMenu' ? styles.sub_Sub_Menu : styles.menu;
    const [activeMenu, setActiveMenu] = useState(-1)
    return (
        <>
            <ul className={classBasisOnMenu}>
                {
                    menuItem.map((menu, index) => (
                        <li key={index} className={menu?.specialClass} onMouseEnter={() => setActiveMenu(index)} onMouseLeave={() => setActiveMenu(-1)} onClick={menu?.onClick}>
                            {menu.label}
                            {!!menu?.subMenu?.length && activeMenu === index && <Menu menuItem={menu.subMenu} level={level + 1} />}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Menu