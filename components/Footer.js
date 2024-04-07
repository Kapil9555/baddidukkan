'use client'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRouter } from 'next/navigation';


const Footer = () => {
    const router = useRouter()
    const footDetail = [
        { title: 'Company', list: [{ tit: 'About Us', link: '/aboutUs' }, { tit: 'Career', link: '/' }, { tit: 'Contact Us', link: '/contactUs' }, { tit: 'Report Fraud', link: '/' }] },
        { title: 'Useful Links', list: [{ tit: 'Privacy Policy', link: '/privacy' }, { tit: 'Terms & condition', link: '/terms' }, { tit: 'Cancellation & Refund', link: '/cancellation' }, { tit: 'Delivery Policy', link: '/delivery' }] },
        { title: 'Areas of services', list: [{ tit: 'Lucknow', link: '/' }, { tit: 'Ayodhya', link: '/' }, { tit: 'Bengaluru', link: '/' }, { tit: 'Office Address', link: '/' }, , { tit: 'Legal address', link: '/' }, , { tit: 'Basement,beside Bansal cold storage near guru nanak school raibareli road faizabad ayodhya U.P india 224001', link: '/' }, , { tit: 'Alternate address muneshwar nagar bagalgunte near nagsandra metro station banglore karnataka india 560073', link: '/' }] },

    ]
    const year = new Date().getFullYear()

    const handleNavigator =(ele)=>{
        router.push(ele.link)
    }

    const handleSocialIcons =(links)=>{
        window.open(links)
    }
    return (
        <>
        <Grid container sx={{ bgcolor: "#c5e1a5", p: "10px" }}>
            <Grid item xs={12} sx={{ mt: "10px", }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Typography variant='h4' sx={{ fontWeight: 600, fontFamily: "sans-serif" }}>
                        <span style={{ color: "black" }}>Badi</span><span style={{ color: "#8bc34a" }}>Dukkan</span>
                    </Typography>
                    <Box>
                        <IconButton sx={{ height: "fit-content" }}>
                            <EmailOutlinedIcon sx={{ color: "black" }} />
                        </IconButton>

                        <IconButton sx={{ height: "fit-content" }}>
                            <PhoneOutlinedIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
            <Grid container sx={{ mt: "10px" }}>
                {
                    footDetail.map((ele,i) => {
                        return (
                            <Grid key={i} item xs={6} sm={6} md={3} lg={3} sx={{mt:"15px"}}>
                                <Typography variant='body2' sx={{ color: "black", fontWeight: "bold", mb: "10px" }}>{ele.title}</Typography>
                                {
                                    ele.list.map((item,ind) => {
                                        return (
                                            <Box key={ind} sx={{ mt: "3px" }}>
                                                <Typography variant='body2' sx={{ color: "#424242",cursor:"pointer" }} onClick={()=>{handleNavigator(item)}}>{item.tit}</Typography>
                                            </Box>
                                        )

                                    })
                                }
                            </Grid>
                        )

                    })
                }
                <Grid item xs={6} sm={6} md={3} lg={3} sx={{mt:"15px"}}>
                    <Box sx={{display:"flex",justifyContent:"flex-start"}}>
                    <Box>
                        <Typography  variant='body2' sx={{ color: "black", fontWeight: "bold", mb: "10px" }}>Reach Us</Typography>
                        <Box sx={{display:"flex",width:"fit-content",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

                            <Box>
                                <IconButton onClick={()=>{handleSocialIcons('https://www.instagram.com/badidukkan/')}} >
                                    <InstagramIcon sx={{color:"#ff1744"}} />
                                </IconButton>
                                <IconButton>
                                    <YouTubeIcon sx={{color:"#CD201F"}}/>
                                </IconButton>
                                <IconButton onClick={()=>{handleSocialIcons('https://www.linkedin.com/company/badi-dukkan-india/')}}>
                                    <LinkedInIcon sx={{color:"#0077B5"}}/>
                                </IconButton>
                            </Box>
                            <Box>
                            <IconButton onClick={()=>{handleSocialIcons('https://www.facebook.com/badidukkan')}}>
                                <FacebookIcon sx={{color:"#1877F2"}}/>
                            </IconButton>
                            <IconButton >
                                <WhatsAppIcon sx={{color:"#128C7E"}}/>
                            </IconButton>
                                
                            </Box>
                        </Box>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{mt:"10px"}}>
            <Typography align='center' variant='body2' sx={{ color: "#424242", }}>All Rights Reserved @ {year} BadiDukkan</Typography>
            </Grid>
        </Grid>

       
        </>
    )
}

export default Footer