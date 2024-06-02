'use client'
import { Box, Button, Container, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';


const page = () => {
    const router = useRouter()
    return (
        <>
            <Container disableGutters maxWidth='xl'>
                <Grid container justifyContent={'center'} >

                    <Grid item xs={12} sx={{ height: "50px",position:"fixed",top:0,width:"100%" }}>
                        <Box sx={{ display: "flex", alignItems: "center", color: "white", height: "100%", bgcolor: "#8bc34a" }}>
                            <IconButton sx={{ mr: "20px" }} onClick={()=>{router.back()}}>
                                <KeyboardBackspaceIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Typography variant='h6' sx={{ fontSize: "17px" }}>Cancellation and refund Policy</Typography>
                        </Box>
                    </Grid>
                    <Grid container justifyContent={'center'} alignItems={'center'} sx={{mb:"15px",mt:"60px",p:"15px"}}>
                        <Grid item xs={12} sx={{}}>
                            <Typography sx={{fontSize:"15px",fontWeight:"bold", color: '#C8C8C8'}}>Canceling and Refund Policy</Typography>
                            <Typography sx={{fontSize:"15px",fontWeight:"bold",mt:"10px", color: '#C8C8C8'}}>Refund timeline-</Typography>
                            
                            <Typography variant='h6' sx={{ fontSize: "12px",mt:"10px", color: '#C8C8C8'  }}>Any kind of Refund shall we initiated within 24 hrs of time. After approval. through UPI which has been provided by particular customer. Due to uncertain/unavoidable resons either issues from bank servor / downtime from bank might get delayed upto 14 Working days.</Typography>
                 

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>i. You acknowledge that (1) your cancellation, or attempted or purported cancellation of an order or (2) cancellation due to reasons not attributable to BadiDukkan, that is, in the event you provide incorrect particulars, contact number, delivery address etc., or that you were unresponsive, not reachable or unavailable for fulfillment of the services offered to you, shall amount to breach of your unconditional and irrevocable authorization in favor of BadiDukkan to place that order against the Restaurant Partners/Store(s) on your behalf ("Authorization Breach. In the event you commit an Authorization Breach, you shall be liable to pay the liquidated damages of an amount equivalent to the order value. You hereby authorize BadiDukkan to deduct or collect the amount payable as liquidated damages through such means as BadiDukkan may determine in its discretion, including without limitation, by deducting such amount from any payment made towards your next Order.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>ii. There may be cases where BadiDukkan is either unable to accept your order or cancels the order, due to reasons including without limitation, technical errors, unavailability of the item(s) ordered, or any other reason attributable to BadiDukkan, Restaurant Partner/Store or Delivery Partner. In such cases, BadiDukkan shall not charge a cancellation charge from you. If the order is canceled after payment has been charged and you are eligible for a refund of the order value or any part thereof, the said amount will be reversed to you.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>iii. No replacement / refund/ or any other resolution will be provided without Restaurant Partner's/Store(s)' permission.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>iv. Any complaint, with respect to the order which shall include instances but not be limited to food spillage, foreign objects in food, delivery of the wrong order or food and beverages or Products, poor quality, You will be required to share the proof of the same before any resolution can be provided.</Typography>
                            
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>v. You shall not be entitled to a refund in case instructions placed along with the order are not followed in the form and manner You had intended. Instructions are followed by the Restaurant Partner /Store on a best-efforts basis.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>vi. All refunds shall be processed in the same manner as they are received, unless refunds have been provided to You in the form of credits, refund amount will reflect in your account based on respective banks policies.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>V. If the customer is unable to accept order for any reason once the order placed and accepted, the same would be considered as cancelation of order, the order would be completely</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>chargeable and the further orders of the customer would be accepted only on online or prepayment for the order placed and we reserve all the right to reject the order if refused by the customer to follow the above.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>vi. If the customer refuses to make the payment for the canceled order and has not placed the order since then for the period of 30 days the BadiDukkan reserves all rights to send the legal notice towards the same as it is considered as the customer's liability towards the company.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>vii. We request you to kindly check twice before placing the order, as once after you place the order you will only have 5 min to cancel it if not canceled within 5 min you will be liable to pay the full amount of the order as well as the service.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "15px",fontWeight:"bold", mt:"10px", color: '#C8C8C8'  }}>Returns and Refund Policy.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>Our policy lasts 03 Hours. If 03 Hours have gone by since your purchase, unfortunately we can't offer you a refund or exchange.</Typography>
                            
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>If any kind of refund is processed on request of the customer and the restaurant approves only the item amount will be refunded, the service charges charged by the platform will not be remitted back.</Typography>
                            
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>Several types of food are exempt from being returned. Based on the taste and the quantity the return or refund will not be processed as it is the complete call of the restaurant determining the quantity and taste so we kindly request you to choose the restaurant carefully while ordering.</Typography>
                           
                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>To complete your return, we require a receipt or proof of purchase.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>Please do not send your purchase back to the Restaurant Owner.</Typography>


                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>There are certain situations where only partial refunds are granted: (if applicable)</Typography>

                            <Typography variant='h6' sx={{ fontSize: "15px",fontWeight:"bold", mt:"10px", color: '#C8C8C8'  }}>Refunds (if applicable)</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px",mt:"10px",color: '#C8C8C8'  }}>Once your return is received and inspected, we will also notify you of the approval or rejection of your refund. We will initiate the refund once applicable complete or partial as applicable.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px",color: '#C8C8C8'  }}>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "15px",fontWeight:"bold", mt:"10px" , color: '#C8C8C8' }}>Late or missing refunds (if applicable)</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>If you haven't received a refund yet, first check your bank account again.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8'  }}>Then contact your credit card company, it may take some time before your refund is officially posted.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8' }}>Next contact your bank. There is often some processing time before a refund is posted.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px",  color: '#C8C8C8' }}>If you've done all of this and you still have not received your refund yet, please WhatsApp us at 9336969302 or mail us at info@badidukkan.com</Typography>

                            <Typography variant='h6' sx={{ fontSize: "15px",fontWeight:"bold",mt:"10px", color: '#C8C8C8'  }}>Sale items (if applicable)</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "15px",fontWeight:"bold", mt:"10px", color: '#C8C8C8'  }}>Exchanges (if applicable)</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px", color: '#C8C8C8'  }}>We only replace items if they are wrong or perished. If you need to exchange it for the same item, WhatsApp us at 9336969302.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "15px",fontWeight:"bold", mt:"10px", color: '#C8C8C8'  }}>Disclaimer:</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", mt:"10px" , color: '#C8C8C8' }}>The cancellation and the refund or exchange policy can be edited as per the company convenience according to the requirement without providing any kind of notice to the customer.</Typography>




                           
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default page