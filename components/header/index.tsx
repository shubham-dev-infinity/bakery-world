'use client'
import { Box, Container, SelectChangeEvent } from "@mui/material"
import styles from './styles.module.scss'
import Select from "../select"
import Input from "../input"
import Button from "../button"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser"
import Link from "next/link"


const categoryOptions = [
    {
        label: 'All',
        value: 'All'
    }
]

const Header = () => {
    const [category, setCategory] = useState<string>('all')
    const [search, setSearch] = useState<string>('')

    const handleCategoryChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value)
    }
    return (
        <>
            <header className={styles.header}>
                <Container className={styles.container}>
                    <section className={styles.left_Header}>
                        <div className={styles.logo_Header}>
                            <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>H's</Box><Box component='span' sx={{ color: 'white', fontWeight: 'bold' }}>bakery</Box>
                        </div>
                    </section>
                    <section className={styles.center_Header}>
                        <div className={styles.search_header}>
                            <Select value={category} options={categoryOptions} onChange={handleCategoryChange} />
                            <Input value={search} placeholder={'I Am Looking For'} />
                            <Button className={styles.search_Button}><b> Search</b></Button>
                        </div>
                    </section>
                    <section className={styles.right_Header}>
                        <div className={styles.header__Actions}>
                            <Link className={styles.wishlist} href='/wishlist'>
                                <FontAwesomeIcon icon={faHeart} size="2xl" />
                                <span><i>0</i></span>
                            </Link>
                            <div className={styles.cart}>
                                <Link className="header__extra" href="/cart">
                                    <FontAwesomeIcon icon={faCartShopping} size="2xl" />
                                    <span><i>0</i></span>
                                </Link>
                            </div>
                            <div className={styles.auth}>
                                <div><FontAwesomeIcon icon={faCircleUser} size="2xl" /></div>
                                <div className={styles.user_Action}>
                                    <Link href="/login">Login</Link>
                                    <Link href="account/register.html">Register</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </header >
        </>)
}

export default Header