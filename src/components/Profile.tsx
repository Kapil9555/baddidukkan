'use client'
import { Box, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Profile = () => {


    return (
        <>
            <Container maxWidth={'xl'} disableGutters>

                <Grid container justifyContent={'center'} sx={{ p: "10px" }}>
                    <Grid item lg={6} md={6} sm={10} xs={12} sx={{ border:"4px solid #8bc34a",pb:"10px",minHeight:"95vh"}}>
                        <Grid container sx={{ mt: "40px",cursor:"pointer" }}>
                            <Grid item xs={12} sx={{borderBottom:"4px solid #8bc34a",minHeight:"100%"}}>
                                <Box sx={{}}>
                                    <Typography align='center' sx={{ fontSize: '2rem', color: "#8bc34a", fontWeight: "600" }}>Profile</Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column",p:1 }}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",height:"50px",width:"50px",borderRadius:"50px"}}>
                                            <PersonIcon sx={{ fontSize: "3.2rem", color: "#ff9800" }} />
                                        </Box>
                                    <Typography align='center' sx={{ color: "#8bc34a", fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "15px" },textTransform:"capitalize" }}>Kapil Behwal</Typography>
                                    <Typography align='center' sx={{ color: "#8bc34a", fontSize:"11px",textTransform:"capitalize" }}>I Love Food</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{mt:"20px",p:"10px"}}>
                                <Box sx={{bgcolor:"#181414",borderRadius:"15px",border:"1px solid #181414",p:"10px"}}>
                                     <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"black",height:"40px",width:"40px",borderRadius:"50px",mr:"5px"}}>
                                            <PersonIcon sx={{ fontSize: "1.8rem", color: "#ff9800" }} />
                                        </Box>
                                            <Typography  sx={{ color: "#bdbdbd", fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "15px" },textTransform:"capitalize" }}>Kapil Behwal</Typography>
                                        </Box>
                                        <Box sx={{}}>
                                            <KeyboardArrowRightIcon sx={{ fontSize: "1.8rem",fontWeight:"bold", color: "white" }} />
                                        </Box>
                                     </Box>

                                     <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center",mt:"20px"}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"black",height:"40px",width:"40px",borderRadius:"50px",mr:"5px"}}>
                                            <LocationOnIcon sx={{ fontSize: "1.5rem", color: "#03a9f4" }} />
                                        </Box>
                                            <Typography  sx={{ color: "#bdbdbd", fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "15px" },textTransform:"capitalize" }}>Addresses</Typography>
                                        </Box>
                                        <Box sx={{}}>
                                            <KeyboardArrowRightIcon sx={{ fontSize: "1.8rem",fontWeight:"bold", color: "white" }} />
                                        </Box>
                                     </Box>


                                     <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center",mt:"20px"}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"black",height:"40px",width:"40px",borderRadius:"50px",mr:"5px"}}>
                                            <CardGiftcardIcon sx={{ fontSize: "1.5rem", color: "#8bc34a" }} />
                                        </Box>
                                            <Typography  sx={{ color: "#bdbdbd", fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "15px" },textTransform:"capitalize" }}>Wallet balance</Typography>
                                        </Box>
                                        <Box sx={{}}>
                                            <KeyboardArrowRightIcon sx={{ fontSize: "1.8rem",fontWeight:"bold", color: "white" }} />
                                        </Box>
                                     </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{p:"10px"}}>
                                <Box sx={{bgcolor:"#181414",borderRadius:"15px",border:"1px solid #181414",p:"10px"}}>
                                     <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"black",height:"40px",width:"40px",borderRadius:"50px",mr:"5px"}}>
                                            <PersonIcon sx={{ fontSize: "1.8rem", color: "#ff9800" }} />
                                        </Box>
                                            <Typography  sx={{ color: "#bdbdbd", fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "15px" },textTransform:"capitalize" }}>Cart</Typography>
                                        </Box>
                                        <Box sx={{}}>
                                            <KeyboardArrowRightIcon sx={{ fontSize: "1.8rem",fontWeight:"bold", color: "white" }} />
                                        </Box>
                                     </Box>

                                     <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center",mt:"20px"}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"black",height:"40px",width:"40px",borderRadius:"50px",mr:"5px"}}>
                                            <LocationOnIcon sx={{ fontSize: "1.5rem", color: "#03a9f4" }} />
                                        </Box>
                                            <Typography  sx={{ color: "#bdbdbd", fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "15px" },textTransform:"capitalize" }}>Past Orders</Typography>
                                        </Box>
                                        <Box sx={{}}>
                                            <KeyboardArrowRightIcon sx={{ fontSize: "1.8rem",fontWeight:"bold", color: "white" }} />
                                        </Box>
                                     </Box>
                                </Box>
                            </Grid>


                            <Grid item xs={12} sx={{p:"10px"}}>
                                <Box sx={{bgcolor:"#181414",borderRadius:"15px",border:"1px solid #181414",p:"10px"}}>
                                     <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                                        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",bgcolor:"black",height:"40px",width:"40px",borderRadius:"50px",mr:"5px"}}>
                                            <PersonIcon sx={{ fontSize: "1.8rem", color: "#ff9800" }} />
                                        </Box>
                                            <Typography  sx={{ color: "#bdbdbd", fontSize: { lg: "16px", md: "16px", sm: "15px", xs: "15px" },textTransform:"capitalize" }}>Log Out</Typography>
                                        </Box>
                                        <Box sx={{}}>
                                            <KeyboardArrowRightIcon sx={{ fontSize: "1.8rem",fontWeight:"bold", color: "white" }} />
                                        </Box>
                                     </Box>                 
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default Profile