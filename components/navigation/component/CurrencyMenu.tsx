import { TMenu } from "@/types/menu"
import { useState } from "react"
import Menu from "./Menu"

const CurrencyMenu = () => {
    const [currencyMenu, setCurrencyMenu] = useState<TMenu[]>([
        {
            label: 'USD',
            subMenu: [
                {
                    label: 'USD',
                    onClick: function () {
                        let newCurrency = [...currencyMenu]
                        newCurrency[0].label = 'USD'
                        setCurrencyMenu(newCurrency)
                    }
                },
                {
                    label: 'INR',
                    onClick: function () {
                        let newCurrency = [...currencyMenu]
                        newCurrency[0].label = 'INR'
                        setCurrencyMenu(newCurrency)
                    }
                },
                {
                    label: 'EURO',
                    onClick: function () {
                        let newCurrency = [...currencyMenu]
                        newCurrency[0].label = 'EURO'
                        setCurrencyMenu(newCurrency)
                    }
                }
            ]
        }
    ])

    return (
        <>
            <Menu menuItem={currencyMenu} level={0} />
        </>
    )
}

export default CurrencyMenu