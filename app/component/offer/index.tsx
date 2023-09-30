'use client'
import  Slider  from "@/components/slider";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import styles from './style.module.scss'

type TOffer = {
    isSlider?: boolean;
    sliderItem?: string[];
    offerItem?: string[];
}

const banners = [
    {
        src: 'https://beta.apinouthemes.com/uploads/slide_3_1fcb990278.jpeg',
        alt: 'image 1'
    },
    {
        src: 'https://beta.apinouthemes.com/uploads/slide_3_1fcb990278.jpeg',
        alt: 'image 1'
    },
    {
        src: 'https://beta.apinouthemes.com/uploads/slide_3_1fcb990278.jpeg',
        alt: 'image 1'
    },
]

const offerBanners = [
    {
        src: 'https://beta.apinouthemes.com/uploads/slide_3_1fcb990278.jpeg',
        alt: 'offer 1'
    },
    {
        src: 'https://beta.apinouthemes.com/uploads/slide_3_1fcb990278.jpeg',
        alt: 'offer 1'
    },
]

const Offer = ({ isSlider = true, sliderItem, offerItem }: TOffer) => {
    return (
        <>
            {!!isSlider && <Grid container>
                <Grid item lg={8}>
                    <Slider slides={banners} />
                </Grid>
                <Grid item lg={4}>
                    <Stack spacing={2}>
                        {
                            offerBanners?.map(offerBanner => <img src={offerBanner.src} alt={offerBanner.alt} width={390} height={193} />)
                        }
                    </Stack>
                </Grid>
            </Grid>}
            <section className={styles.offer}>
                {
                    offerBanners?.map(offerBanner => <img src={offerBanner.src} alt={offerBanner.alt} width={390} height={193} />)
                }
            </section>
        </>
    )
}

export default Offer