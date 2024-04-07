'use client'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Image from 'next/image';
import foodstall from "../assests/foodStall.png"
import googleplay from "../assests/playstore.png"
import phone from "../assests/phone.jpg"
import Footer from './Footer';
import food1 from "../assests/food1.jpg"
import food2 from "../assests/food2.jpeg"
import food3 from "../assests/food3.jpeg"
import food4 from "../assests/food3.jpg"
// import food1 from "../assests/food1.jpg"

import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter()

    const navigateHandler =()=>{
        router.push('/qrreader')
    }
  return (
    <>
    <Container maxWidth={'xl'} disableGutters>
        <Grid container justifyContent={'center'} sx={{p:"10px"}}>
            <Grid item lg={6} md={6} sm={10} xs={12} sx={{mb:"25px"}}>
                <Grid container sx={{mt:"40px"}}>
                    <Grid item xs={12} sx={{}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <Typography variant='h3' sx={{fontWeight:600,fontFamily:"sans-serif"}}>
                                <span style={{color:"black"}}>Badi</span><span style={{color:"#8bc34a"}}>Dukkan</span>
                            </Typography>
                            <Box>
                            <IconButton sx={{bgcolor:"black","&:hover":{bgcolor:"black"},height:"fit-content"}}>
                                <PersonOutlineIcon sx={{color:"white"}}/>
                            </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{mt:"20px"}}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box sx={{pr:"15px"}}>
                                    <Typography variant='h4' sx={{color:"#212121"}}>
                                        Now, trusted stores around you are on <span style={{fontWeight:600}}>BadiDukkan.</span>
                                    </Typography>
                                    <Typography variant='h6' sx={{color:"#424242"}}>
                                        Your neighbourhood stores <br/> are now at your fingertips
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{position:"relative",height:"100%",display:"flex",justifyContent:"center"}}>
                                    <Image src={foodstall} alt='foodstall'  style={{position:"absolute",height:"170px",width:"auto"}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"150px"}}>
                                    <Image src={googleplay} alt='foodstall' style={{height:"40px",width:"auto",position:"absolute"}}/>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={7} sx={{height:"350px",display:"flex",alignItems:"center"}}>
                                        <Box sx={{boxSizing:"border-box"}}>
                                            <Typography variant='h5' sx={{color:"#424242"}}>
                                                One place <span style={{fontWeight:600}}>biryani, pizza</span>and<span style={{fontWeight:600}}>much more.</span>
                                            </Typography>
                                            <Typography variant='body2' sx={{color:"#424242"}}>Find everything you need in one! Explore and shop for the best quality snacks and meals</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={5} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <Box sx={{position:"relative",height:{lg:"350px",md:"350px",sm:"300px",xs:"230px"},width:"fit-content"}}>
                                            <Image src={food1} alt='foodstall' style={{height:"100%",borderRadius:"15px",width:"auto",boxSizing:"border-box"}}/>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                <Grid item xs={5} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <Box sx={{position:"relative",height:{lg:"350px",md:"350px",sm:"300px",xs:"230px"},width:"fit-content"}}>
                                            <Image src={food2} alt='foodstall' style={{height:"100%",borderRadius:"15px",width:"auto",boxSizing:"border-box"}}/>
                                        </Box>
                                    </Grid>
                                
                                    <Grid item xs={7} sx={{height:"350px",display:"flex",alignItems:"center"}}>
                                        <Box sx={{boxSizing:"border-box",p:"10px"}}>
                                            <Typography variant='h5' sx={{color:"#424242"}}>
                                                Explore the <span style={{fontWeight:600}}>widest range of products</span>
                                            </Typography>
                                            <Typography variant='body2' sx={{color:"#424242"}}>Checkout and choose from a variety of foods available from restaurants across the city</Typography>
                                        </Box>
                                    </Grid>
                                    </Grid>
                                
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={7} sx={{height:"350px",display:"flex",alignItems:"center"}}>
                                        <Box sx={{boxSizing:"border-box",p:"10px"}}>
                                            <Typography variant='h5' sx={{color:"#424242"}}>
                                               Shop from <span style={{fontWeight:600}}>local trusted restaurants</span>around you
                                            </Typography>
                                            <Typography variant='body2' sx={{color:"#424242"}}>from pizza to butter panner, order from local restaurants you trust.</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={5} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <Box sx={{position:"relative",height:{lg:"350px",md:"350px",sm:"300px",xs:"230px"},width:"fit-content"}}>
                                            <Image src={food3} alt='foodstall' style={{height:"100%",borderRadius:"15px",width:"auto",boxSizing:"border-box"}}/>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container>
                                <Grid item xs={5} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <Box sx={{position:"relative",height:{lg:"350px",md:"350px",sm:"300px",xs:"230px"},width:"fit-content"}}>
                                            <Image src={food4} alt='foodstall' style={{height:"100%",borderRadius:"15px",width:"auto",boxSizing:"border-box"}}/>
                                        </Box>
                                    </Grid>
                                
                                    <Grid item xs={7} sx={{height:"350px",display:"flex",alignItems:"center"}}>
                                        <Box sx={{boxSizing:"border-box",p:"10px"}}>
                                            <Typography variant='h5' sx={{color:"#424242"}}>
                                                You can now <span style={{fontWeight:600}}>preorder</span>the food.
                                            </Typography>
                                            <Typography variant='body2' sx={{color:"#424242"}}>Pre-order your food as per your convenience.</Typography>
                                        </Box>
                                    </Grid>
                                    </Grid>
                                
                            </Grid>
                           
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <Box sx={{position:"fixed",cursor:"pointer",bottom:"0px",left:"50%",right:"50%",transform: "translate(-50%, -50%)",width:"fit-content"}} onClick={navigateHandler}>
            <Box sx={{height:"40px",width:"fit-content",p:"0px 25px",borderRadius:"25px",bgcolor:"#4caf50",display:"flex",alignItems:"center",justifyContent:"center"}} >
                <Typography sx={{fontWeight:700,color:"white",whiteSpace:"nowrap",display:"flex",alignItems:"center"}}>Scan Me <QrCode2Icon sx={{ml:"5px"}}/></Typography>
            </Box>
        </Box>
            </Grid>
        </Grid>
    </Container>
    
    <Footer/>
    </>
  )
}

export default HomePage