'use client'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box, Button, Container, Grid, InputBase, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { THEME_COLOR } from '@/constant';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Signup = ({ logSign, setLogSign }) => {
    const router = useRouter()
    const [data, setData] = useState({})

    return (
        <Container maxWidth={'xl'} disableGutters>
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{ height: "100vh",bgcolor:"black",p:"0px 10px" }}>
                <Grid item xs={12} sm={8} md={6} lg={5} sx={{bgcolor:"black",borderRadius:"12px",border:"4px solid #8bc34a"}}>
                    <Box sx={{borderBottom:"4px solid #8bc34a"}}>
                        <Typography align='center' sx={{ fontSize: '2rem', color: "#8bc34a", fontWeight: "600" }}>Register</Typography>
                        <Typography align='center' sx={{ color: "#8bc34a", fontSize: { lg: "13px", md: "14px", sm: "13px", xs: "12px" } }}>Create a new account with us</Typography>
                        <Box sx={{ p: 1.5}}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                                <HowToRegIcon sx={{ fontSize: "3rem",color:"white" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Paper sx={{ bgcolor: "#000000",borderRadius:"15px" }}>
                        <Grid container sx={{ p: 2, pt: 1.5 }}>
                            <Grid item xs={12} sx={{ mt: "10px", pr: "7px" }}>
                                <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>First Name</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: "3px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "5px", height: "40px" }} >
                                    <PersonOutlineOutlinedIcon sx={{ color: THEME_COLOR, fontSize: "19px", ml: "5px" }} />
                                    <InputBase sx={{ fontSize: "13px", ml: "10px", color: "#ffffff" }} placeholder='Type your first name' />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: "10px", pr: "7px" }}>
                                <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>Last Name</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: "3px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "5px", height: "40px" }} >
                                    <PersonOutlineOutlinedIcon sx={{ color: THEME_COLOR, fontSize: "19px", ml: "5px" }} />
                                    <InputBase sx={{ fontSize: "13px", ml: "10px", color: "#ffffff" }} placeholder='Type your last name' />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: "10px", pr: "7px" }}>
                                <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>Mobile</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: "3px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "5px", height: "40px" }} >
                                    <CallOutlinedIcon sx={{ color: THEME_COLOR, fontSize: "19px", ml: "5px" }} />
                                    <InputBase sx={{ fontSize: "13px", ml: "10px", color: "#ffffff" }} placeholder='Type your mobile number' />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: "15px", pr: "7px" }}>
                                <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>Password</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: "3px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "5px", height: "40px" }} >
                                    <LockOutlinedIcon sx={{ color: THEME_COLOR, fontSize: "18px", ml: "5px" }} />
                                    <InputBase sx={{ fontSize: "13px", ml: "10px", color: "#ffffff" }} placeholder='Type your password' />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: "15px", pr: "7px" }}>
                                <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>Repeat Password</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: "3px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "5px", height: "40px" }} >
                                    <LockOutlinedIcon sx={{ color: THEME_COLOR, fontSize: "18px", ml: "5px" }} />
                                    <InputBase sx={{ fontSize: "13px", ml: "10px", color: "#ffffff" }} placeholder='Type your password again' />
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography align='right' sx={{ color: "#ffffff", fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" }, mr: "10px" }}>Already have an account? <span style={{ color: "#8bc34a" }}>Login</span></Typography>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: "15px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                <Button variant='contained' sx={{ bgcolor: "#8bc34a", color: "white",textTransform:"capitalize",fontSize:"1rem", borderRadius: "50px", p: 1, '&:hover': { bgcolor: "#8bc34a" } }} fullWidth>Create Account</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Signup
