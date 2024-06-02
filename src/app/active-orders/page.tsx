import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import burger from "../../../public/burger.webp";
import Image from 'next/image';
import ShareIcon from '@mui/icons-material/Share';

const page = () => {
    return (
        <Container disableGutters>
            <Grid container justifyContent={'center'} sx={{ p: "10px" }}>
                <Grid item lg={6} md={6} sm={10} xs={12} sx={{ border:{lg:"4px solid #8bc34a",md:"4px solid #8bc34a",sm:"none",xs:"none"}, pb: "10px", minHeight: "95vh" }}>
                    <Grid container sx={{ cursor: "pointer" }}>
                        <Grid item xs={12} sx={{ p: "10px 20px", display: "flex", alignItems: "center" }}>
                            <Box sx={{ mr: "20px" }}>
                                <KeyboardBackspaceIcon sx={{ fontSize: "25px", color: "#eeeeee" }} />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ textTransform: "capitalize", color: "#8bc34a", fontSize: "18px", fontWeight: "bold" }}>
                                    Active Orders
                                </Typography>
                            </Box>

                        </Grid>

                        <Grid item xs={12} sx={{ mt: "20px", p: "10px" }}>
                            <Box sx={{ bgcolor: "#181414", borderRadius: "15px", border: "1px solid #181414", p: "10px" }}>
                                <Box sx={{display:"flex"}}>
                                    <Box sx={{ height: "60px", border: "1px solid #8bc34a", position: "relative", width: "60px", borderRadius: "10px", overflow: "hidden" }}>
                                        <Image src={burger} alt='img' style={{ height: "100%", width: "auto" }} />
                                    </Box>
                                    <Box sx={{ ml: "10px" }}>
                                        <Typography sx={{ fontSize: "14px", color: "#8bc34a" }}>kapil</Typography>
                                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Box sx={{ mr: "10px" }}>
                                                <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "#bdbdbd" }}>Best in pizza category</Typography>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{borderBottom:"1px solid gray",pb:"10px"}}>
                                <Box sx={{mt:"7px",display:"flex",justifyContent:"space-between",width:"100%"}}>
                                 <Typography sx={{ textTransform: "capitalize", fontSize: "15px", color: "white" }}>Order ID : 251125</Typography>
                                 <Typography sx={{ textTransform: "capitalize",bgcolor:"#ffa726", fontSize: "15px",p:"1px 5px",  color: "white" }}>Placed</Typography>
                                </Box>

                                <Box sx={{mt:"7px",display:"flex",justifyContent:"space-between",width:"100%"}}>
                                 <Typography sx={{ textTransform: "capitalize", fontSize: "15px", color: "white" }}>Order ID : 251125</Typography>
                                 <Typography sx={{ textTransform: "capitalize",bgcolor:"#ffa726", fontSize: "15px",p:"1px 5px",  color: "white"}}>COD</Typography>
                                </Box>
                                <Box>
                                   <Typography sx={{ textTransform: "capitalize", fontSize: "10px", mt: "-3px", color: "gray" }}>Delivery Distance: 2.79 K.M</Typography>
                                </Box>
                                </Box>
                                <Box sx={{mt:"10px",borderBottom:"1px solid gray",pb:"10px"}}>
                                 <Typography sx={{ fontSize: "15px", color: "white" }}>4 x Chocolate(Full)</Typography>
                                 <Typography sx={{ fontSize: "15px", color: "white" }}>4 x Butter Masala(Full)</Typography>
                                 <Typography sx={{ fontSize: "15px", color: "white" }}>4 x Veg Roll(Full)</Typography>
                               
                                </Box>
                                <Box sx={{mt:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                                 <Typography sx={{ fontSize: "15px", color: "white",fontWeight:600 }}>Ordering For : <span style={{fontWeight:400}}>Bunny Chaudhary</span></Typography>
                                    <IconButton>
                                        <ShareIcon sx={{color:"#ffa726"}}/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sx={{ mt: "20px", p: "10px" }}>
                            <Box sx={{ bgcolor: "#181414", borderRadius: "15px", border: "1px solid #181414", p: "10px" }}>
                                <Box sx={{display:"flex"}}>
                                    <Box sx={{ height: "60px", border: "1px solid #8bc34a", position: "relative", width: "60px", borderRadius: "10px", overflow: "hidden" }}>
                                        <Image src={burger} alt='img' style={{ height: "100%", width: "auto" }} />
                                    </Box>
                                    <Box sx={{ ml: "10px" }}>
                                        <Typography sx={{ fontSize: "14px", color: "#8bc34a" }}>kapil</Typography>
                                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                            <Box sx={{ mr: "10px" }}>
                                                <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "#bdbdbd" }}>Best in pizza category</Typography>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{borderBottom:"1px solid gray",pb:"10px"}}>
                                <Box sx={{mt:"7px",display:"flex",justifyContent:"space-between",width:"100%"}}>
                                 <Typography sx={{ textTransform: "capitalize", fontSize: "15px", color: "white" }}>Order ID : 251125</Typography>
                                 <Typography sx={{ textTransform: "capitalize",bgcolor:"#ffa726", fontSize: "15px",p:"1px 5px",  color: "white" }}>Placed</Typography>
                                </Box>

                                <Box sx={{mt:"7px",display:"flex",justifyContent:"space-between",width:"100%"}}>
                                 <Typography sx={{ textTransform: "capitalize", fontSize: "15px", color: "white" }}>Order ID : 251125</Typography>
                                 <Typography sx={{ textTransform: "capitalize",bgcolor:"#ffa726", fontSize: "15px",p:"1px 5px",  color: "white"}}>COD</Typography>
                                </Box>
                                <Box>
                                   <Typography sx={{ textTransform: "capitalize", fontSize: "10px", mt: "-3px", color: "gray" }}>Delivery Distance: 2.79 K.M</Typography>
                                </Box>
                                </Box>
                                <Box sx={{mt:"10px",borderBottom:"1px solid gray",pb:"10px"}}>
                                 <Typography sx={{ fontSize: "15px", color: "white" }}>4 x Chocolate(Full)</Typography>
                                 <Typography sx={{ fontSize: "15px", color: "white" }}>4 x Butter Masala(Full)</Typography>
                                 <Typography sx={{ fontSize: "15px", color: "white" }}>4 x Veg Roll(Full)</Typography>
                               
                                </Box>
                                <Box sx={{mt:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                                 <Typography sx={{ fontSize: "15px", color: "white",fontWeight:600 }}>Ordering For : <span style={{fontWeight:400}}>Bunny Chaudhary</span></Typography>
                                    <IconButton>
                                        <ShareIcon sx={{color:"#ffa726"}}/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default page