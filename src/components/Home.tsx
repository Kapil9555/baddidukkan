'use client'
import { Box, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Image from 'next/image';
import foodstall from "../../public/foodStall.png"
import googleplay from "../../public/playstore.png"
import phone from "../../public/phone.jpg"
import Footer from './Footer';
import food1 from "../../public/food1.jpg"
import food2 from "../../public/food2.jpeg"
import food3 from "../../public/food3.jpeg"
import food4 from "../../public/food3.jpg"
// import food1 from "../../public/food1.jpg"

import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const HomePage = () => {
    const router = useRouter()

    const menuItems = [
        {
            content: 'Login',
            url: '/login'
        },
        {
            content: 'Register',
            url: '/signup'
        },
        {
            content: 'About Us',
            url: '/aboutUs'
        },
        {
            content: 'Contact Us',
            url: '/contactUs'
        },
        {
            content: 'Privacy Policy',
            url: '/privacy'
        },
        {
            content: 'Delivery Policy',
            url: '/delivery'
        },
        {
            content: 'Terms / Condition Policy',
            url: '/terms'
        },
        {
            content: 'Cancellation / Refund Policy',
            url: '/cancellation'
        },
        {
            content: 'Log Out',
            url: '/logout'
        },

    ]

    const navigateHandler = () => {
        router.push('/item-list/65bfcad6b33fd8b324f87b25')
    }


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Container maxWidth={'xl'} disableGutters>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        menuItems.map((l: any) => {
                            if(l.content =="Log Out"){
                                return (
                                    <MenuItem onClick={handleClose} sx={{color : 'red',fontWeight:'800'}}>Logout</MenuItem>
                                )
                            }
                            else{
                                return (
                                    <MenuItem onClick={handleClose}>
                                        <Link
                                            href={l.url}
                                            style={{ color: 'black', textDecoration: 'none' }}
                                        >
                                            {l.content}
                                        </Link>
                                    </MenuItem>
                                )
                            }
                        })
                    }

                    {/* <MenuItem onClick={handleClose} sx={{color : 'red',fontWeight:'800'}}>Logout</MenuItem> */}
                </Menu>
                <Grid container justifyContent={'center'} sx={{ p: "10px" }}>
                    <Grid item lg={6} md={6} sm={10} xs={12} sx={{ mb: "25px" }}>
                        <Grid container sx={{ mt: "40px" }}>
                            <Grid item xs={12} sx={{}}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <Typography variant='h3' sx={{ fontWeight: 600, fontFamily: "sans-serif" }}>
                                        <span style={{ color: "white" }}>Badi</span><span style={{ color: "#8bc34a" }}>Dukkan</span>
                                    </Typography>
                                    <Box>
                                        <IconButton sx={{ bgcolor: "black", "&:hover": { bgcolor: "black" }, height: "fit-content", border: '3px solid green' }} onClick={handleClick}>
                                            <PersonOutlineIcon sx={{ color: "white" }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Box sx={{ pr: "15px" }}>
                                            <Typography variant='h4' sx={{ color: "#E8E8E8" }}>
                                                Now, trusted stores around you are on <span style={{ fontWeight: 600 }}>BadiDukkan.</span>
                                            </Typography>
                                            <Typography variant='h6' sx={{ color: "#C8C8C8" }}>
                                                Your neighbourhood stores <br /> are now at your fingertips
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ position: "relative", height: "100%", display: "flex", justifyContent: "center" }}>
                                            <Image src={foodstall} alt='foodstall' style={{ position: "absolute", height: "170px", width: "auto" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }}>
                                            <Image src={googleplay} alt='foodstall' style={{ height: "40px", width: "auto", position: "absolute", border: '1px solid white', borderRadius: '7px' }} onClick={() => { window.open("https://play.google.com/store/apps/details?id=badidukkan.customer.app") }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={7} sx={{ height: "350px", display: "flex", alignItems: "center" }}>
                                                <Box sx={{ boxSizing: "border-box" }}>
                                                    <Typography variant='h5' sx={{ color: "#E8E8E8" }}>
                                                        One place <span style={{ fontWeight: 600 }}>biryani, pizza</span>and<span style={{ fontWeight: 600 }}>much more.</span>
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: "#C8C8C8" }}>Find everything you need in one! Explore and shop for the best quality snacks and meals</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Box sx={{ position: "relative", height: { lg: "350px", md: "350px", sm: "300px", xs: "230px" }, width: "fit-content" }}>
                                                    <Image src={food1} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "auto", boxSizing: "border-box" }} />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Box sx={{ position: "relative", height: { lg: "350px", md: "350px", sm: "300px", xs: "230px" }, width: "fit-content" }}>
                                                    <Image src={food2} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "auto", boxSizing: "border-box" }} />
                                                </Box>
                                            </Grid>

                                            <Grid item xs={7} sx={{ height: "350px", display: "flex", alignItems: "center" }}>
                                                <Box sx={{ boxSizing: "border-box", p: "10px" }}>
                                                    <Typography variant='h5' sx={{ color: "#E8E8E8" }}>
                                                        Explore the <span style={{ fontWeight: 600 }}>widest range of products</span>
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: "#C8C8C8" }}>Checkout and choose from a variety of foods available from restaurants across the city</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={7} sx={{ height: "350px", display: "flex", alignItems: "center" }}>
                                                <Box sx={{ boxSizing: "border-box", p: "10px" }}>
                                                    <Typography variant='h5' sx={{ color: "#E8E8E8" }}>
                                                        Shop from <span style={{ fontWeight: 600 }}>local trusted restaurants</span>around you
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: "#C8C8C8" }}>from pizza to butter panner, order from local restaurants you trust.</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Box sx={{ position: "relative", height: { lg: "350px", md: "350px", sm: "300px", xs: "230px" }, width: "fit-content" }}>
                                                    <Image src={food3} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "auto", boxSizing: "border-box" }} />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={5} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Box sx={{ position: "relative", height: { lg: "350px", md: "350px", sm: "300px", xs: "230px" }, width: "fit-content" }}>
                                                    <Image src={food4} alt='foodstall' style={{ height: "100%", borderRadius: "15px", width: "auto", boxSizing: "border-box" }} />
                                                </Box>
                                            </Grid>

                                            <Grid item xs={7} sx={{ height: "350px", display: "flex", alignItems: "center" }}>
                                                <Box sx={{ boxSizing: "border-box", p: "10px" }}>
                                                    <Typography variant='h5' sx={{ color: "#E8E8E8" }}>
                                                        You can now <span style={{ fontWeight: 600 }}>preorder</span>the food.
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: "#C8C8C8" }}>Pre-order your food as per your convenience.</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ position: "fixed", cursor: "pointer", bottom: "0px", left: "50%", right: "50%", transform: "translate(-50%, -50%)", width: "fit-content" }} >
                            <Link href="/item-list/65bfcad6b33fd8b324f87b25" style={{textDecoration:'none'}}>
                                <Box sx={{ height: "40px", width: "fit-content", p: "0px 25px", borderRadius: "25px", bgcolor: "#4caf50", display: "flex", alignItems: "center", justifyContent: "center" }} >
                                    <Typography sx={{ fontWeight: 700, color: "white", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>Demo Menu <QrCode2Icon sx={{ ml: "5px" }} /></Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </>
    )
}

export default HomePage