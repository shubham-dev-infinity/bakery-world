import { TMenu } from "@/types/menu"
import { useState } from "react"
import Menu from "./Menu"

const LanguageMenu = () => {
    const [languageMenu, setLanguageMenu] = useState<TMenu[]>([
        {
            label: 'English',
            subMenu: [
                {
                    label: 'Englsih',
                    onClick: function () {
                        let newCurrency = [...languageMenu]
                        newCurrency[0].label = 'Englsih'
                        setLanguageMenu(newCurrency)
                    }
                },
                {
                    label: 'Hindi',
                    onClick: function () {
                        let newCurrency = [...languageMenu]
                        newCurrency[0].label = 'Hindi'
                        setLanguageMenu(newCurrency)
                    }
                },
                {
                    label: 'Gujarati',
                    onClick: function () {
                        let newCurrency = [...languageMenu]
                        newCurrency[0].label = 'Gujarati'
                        setLanguageMenu(newCurrency)
                    }
                }
            ]
        }
    ])

    return (
        <>
            <Menu menuItem={languageMenu} level={0} />
        </>
    )
}

export default LanguageMenu