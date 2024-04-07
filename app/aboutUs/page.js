'use client'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
    return (
        <>
            <Container maxWidth={'xl'} disableGutters>
        <Grid container justifyContent={'center'} sx={{minHeight:"60vh",mb:"20px"}}>
        
            <Grid item xs={12} sx={{ height: "50px",width:"100%",position:"fixed",top:0}}>
                <Box sx={{ display: "flex", alignItems: "center", color: "white", height: "100%", bgcolor: "#8bc34a" }}>
                    <IconButton sx={{ mr: "20px" }} onClick={()=>{router.back()}}>
                        <KeyboardBackspaceIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography variant='h6' sx={{ fontSize: "17px" }}>About Us</Typography>
                </Box>
            </Grid>
            <Grid item xs={10} sx={{ mt:{lg:"60px",md:"60px",sm:"65px",xs:"70px"}}}>
                <Box>
                    <Typography variant='h6' sx={{ fontSize: "17px", fontWeight: 600 }}>About Us</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: "14px", mt: "5px" }}>We are delivery and pre ordering service providers,
                        working with the small restaurant owners to make
                        them the perfect QSR and we also deliver food on the
                        Cluster basis.</Typography>
                    <Typography sx={{ fontSize: "12px", mt: "5px", color: "gray" }}>We incorporated in June 2021 in Ayodhya, U.P India</Typography>
                    <Typography sx={{ fontSize: "14px", mt: "5px" }}>Started our services initially through WhatsApp in
                        February 2022.</Typography>
                    <Typography sx={{ fontSize: "14px", mt: "5px" }}>By placing more than 10000+ orders with in 4 months
                        of incorporation,</Typography>
                    <Typography sx={{ fontSize: "14px", mt: "5px" }}>We continued by introducing application in November
                        2022.</Typography>
                    <Typography sx={{ fontSize: "14px", mt: "5px" }}>And sucessfully have placed 10000+ orders through
                        application as wel</Typography>
                    <Typography sx={{ fontSize: "14px", mt: "5px" }}>Now expanding to other loactions of Lucknow Uttar
                        Pradesh.</Typography>
                    <Typography sx={{ fontSize: "14px", mt: "5px" }}>We started our working with single handded and lots
                        of courage today we are a team working for the
                        sucesses divided but working as one on technicals,
                        marketing, expansion, sales, customer support ect.</Typography>


                </Box>
            </Grid>
        </Grid>
            </Container>
            <Footer/>
        </>
    )
}

export default page