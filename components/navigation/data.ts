import { TMenu } from "@/types/menu"
import styles from './styles.module.scss'

export const leftMenu: TMenu[] = [{
    label: 'Shop By Department',
    specialClass: styles.font_Bold,
    subMenu: [
        {
            label: 'Hot Promotions',
            link: '/shop',
            subMenu: []
        },
        {
            label: 'Consumer Electronics',
            link: '/shop',
            subMenu: [
                {
                    label: 'New Arrivals',
                    link: '/shop'
                },
                {
                    label: 'New Arrivals',
                    link: '/shop'
                },
                {
                    label: 'New Arrivals',
                    link: '/shop'
                },
            ]
        },
    ]
}]
export const centerMenu: TMenu[] = [
    {
        label: 'Home',
        subMenu: [
            {
                label: 'Hot Promotions',
                link: '/shop',
                subMenu: []
            },
            {
                label: 'Consumer Electronics',
                link: '/shop',
                subMenu: [
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                ]
            },
        ]
    },
    {
        label: 'Pages',
        subMenu: [
            {
                label: 'Hot Promotions',
                link: '/shop',
                subMenu: []
            },
            {
                label: 'Consumer Electronics',
                link: '/shop',
                subMenu: [
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                ]
            },
        ]
    },
    {
        label: 'Shop',
        subMenu: [
            {
                label: 'Hot Promotions',
                link: '/shop',
                subMenu: []
            },
            {
                label: 'Consumer Electronics',
                link: '/shop',
                subMenu: [
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                ]
            },
        ]
    },
    {
        label: 'Blogs',
        subMenu: [
            {
                label: 'Hot Promotions',
                link: '/shop',
                subMenu: []
            },
            {
                label: 'Consumer Electronics',
                link: '/shop',
                subMenu: [
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                    {
                        label: 'New Arrivals',
                        link: '/shop'
                    },
                ]
            },
        ]
    },
]
