import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import SellIcon from '@mui/icons-material/Sell';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const page = () => {
    return (
        <Container maxWidth disableGutters>
            <Grid container alignItems={"flex-start"} sx={{ bgcolor: "#e0e0e0"}}>
                <Grid item xs={12} sx={{}}>
                    <Paper elevation={0} sx={{ p: "10px 20px", display: "flex", alignItems: "center" }}>
                        <Box sx={{ mr: "20px" }}>
                            <KeyboardBackspaceIcon sx={{ fontSize: "25px" }} />
                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ textTransform: "capitalize", fontSize: "14px" }}>
                                Baba Vishwanath
                            </Typography>
                            <Typography sx={{ textTransform: "capitalize", fontSize: "9px", mt: "-3px", textTransform: "uppercase", color: "gray" }}>2 Items</Typography>
                        </Box>

                    </Paper>
                </Grid>

                <Grid item xs={12} sx={{ p: "15px"}}>
                    <Paper elevation={0} sx={{ p: "1px 30px 20px 10px", borderRadius: "8px" }}>
                        {
                            new Array(2).fill(1).map((ele, index) => (
                                <Box key={index} sx={{ display: "flex", mt: "10px", justifyContent: "space-between", boxSizing: "border-box", width: "100%" }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ fontSize: "14px", color: "gray" }}>dosa</Typography>
                                    </Box>
                                    <Box sx={{ border: "1px solid #8bc34a", display: "flex" }}>
                                        <Box sx={{ width: "22px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <DeleteIcon sx={{ color: "#8bc34a", fontSize: "20px" }} />
                                        </Box>
                                        <Box sx={{ bgcolor: "#8bc34a", width: "22px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Typography align='center' sx={{ color: "white", fontSize: "14px" }}>1</Typography>
                                        </Box>
                                        <Box sx={{ width: "22px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <AddIcon sx={{ color: "#8bc34a", fontSize: "20px" }} />
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }

                        <Box sx={{ mt: "10px", borderTop: "2px solid #bdbdbd", p: "5px 0px" }}>
                            <Typography sx={{ fontSize: "12px", color: "gray" }}>+ Add more items</Typography>
                        </Box>
                    </Paper>
                    <Box sx={{ mt: "10px", borderTop: "2px solid #bdbdbd", p: "5px 0px", mt: "10px" }}>
                        <Typography sx={{ fontSize: "12px", color: "gray", display: "flex", alignItems: "center" }}><MessageIcon sx={{ fontSize: "16px", mr: "5px" }} />Add additional message</Typography>
                    </Box>

                    <Box sx={{ mt: "10px", borderTop: "2px solid #bdbdbd", p: "5px 0px", }}>
                        <Typography sx={{ fontSize: "13px", color: "black", display: "flex", alignItems: "center" }}><SellIcon sx={{ fontSize: "16px", mr: "5px" }} />Add additional message</Typography>
                    </Box>

                    <Box sx={{ mt: "10px", borderBottom: "2px solid #bdbdbd", p: "5px 0px", }}>
                        <Typography sx={{ fontSize: "13px", color: "black", display: "flex", alignItems: "center" }}>Price Details</Typography>
                    </Box>

                    <Paper elevation={0} sx={{ p: "1px 30px 0px 10px", borderRadius: "8px", mt: "10px" }}>
                        <Typography sx={{ fontSize: "13px", color: "black" }}>Bill Details</Typography>

                        <Box sx={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box", width: "100%" }}>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "14px", color: "gray" }}>dosa</Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "14px", color: "gray" }}>₹120</Typography>

                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", mt: "20px", justifyContent: "space-between", boxSizing: "border-box", width: "100%" }}>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "14px", color: "gray" }}>Platform fees</Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography sx={{ fontSize: "14px", color: "gray" }}>₹120</Typography>

                            </Box>
                        </Box>

                        <Box sx={{ borderTop: "2px solid #bdbdbd", mt: "3px", p: "5px 0px" }}>

                        </Box>
                    </Paper>

                    <Box sx={{ borderTop: "2px solid #bdbdbd", mt: "25px", p: "5px 0px" }}>

                    </Box>

                    <Box sx={{ mt: "10px" }}>
                        <Typography sx={{ fontSize: "13px", color: "black" }}>Review your order and details to avoid cancellations</Typography>
                    </Box>

                    <Paper elevation={0} sx={{ p: "1px 30px 0px 10px", borderRadius: "8px", mt: "10px" }}>
                        <Box sx={{ display: "flex" }}>
                            <Typography sx={{ fontSize: "14px", color: "gray" }}>dosa</Typography>
                        </Box>
                        <Box>
                            <a href='#' style={{ textDecorationColor: "#8bc34a" }}>
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#8bc34a" }}>Read Cancellation Policy</Typography>
                            </a>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
            <Paper elevation={0} sx={{ p: "10px",width:"100%", position: "fixed", bottom: "0px", borderRadius: "8px", mt: "10px" }}>
                <Box sx={{display:"flex",justifyContent:"space-between",mr:"10px"}}>
                <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: "14px", color: "black" }}>PreOrder/Delivery</Typography>
                </Box>
                <Box sx={{mr:"10px"}}>
                    <Button variant='contained'  sx={{textTransform:"capitalize",p:"0px 5px",bgcolor:"#8bc34a","&:hover":{bgcolor:"#8bc34a"}}}>
                        Place Order <ArrowRightIcon sx={{fontSize:"30px",ml:"-2px",p:"0px"}}/>
                    </Button>
                </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default page