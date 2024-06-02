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

                    <Grid item xs={12} sx={{ height: "50px",width:"100%",position:"fixed",top:0 }}>
                        <Box sx={{ display: "flex", alignItems: "center", color: "white", height: "100%", bgcolor: "#8bc34a" }}>
                            <IconButton sx={{ mr: "20px" }} onClick={()=>{router.back()}}>
                                <KeyboardBackspaceIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Typography variant='h6' sx={{ fontSize: "17px" }}>Delivery Policy</Typography>
                        </Box>
                    </Grid>
                    <Grid container justifyContent={'center'} alignItems={'center'} sx={{mb:"15px",p:"15px",mt:"60px"}}>
                        <Grid item xs={12} sx={{}}>
                            <Typography sx={{fontSize:"15px",fontWeight:"bold",color: '#C8C8C8'}}>Delivery Policy</Typography>
                            <Typography sx={{fontSize:"15px",fontWeight:"bold",mt:"10px",color: '#C8C8C8'}}>Delivery timeline-</Typography>
                            
                            <Typography variant='h6' sx={{ fontSize: "12px",mt:"10px",color: '#C8C8C8'  }}>Once the order placed successfully and accepted by shop that will take generally 10 minutes - 20 minutes estimated to Prepare the particular food items by shop either max upto 30 minutes - 40 minutes estimated as per multiple food items ordered by customer. After it Estimated 15-20 minutes general time to deliver the order upto 2km of deliver address, for above 2Km of delivery addess the particular delivery timing is totally depends upon Below factor-</Typography>
                 
                            <Typography variant='h6' sx={{ fontSize: "12px",color: '#C8C8C8'  }}>1. We do not / never allow our riders to cross the 40 Kmph of speed limit and never avoid/ violate the traffic rules.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px",color: '#C8C8C8'  }}>2. Traffic conditions, weather conditions and others unavoidable circumstances.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px",color: '#C8C8C8'  }}>3. Other safety concerns/measurements related to particular rider.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>a. Badi Dukkan provides food ordering and delivery services by entering into contractual arrangements with restaurant partners ("Restaurant Partners") and Stores (as defined below) on a principal-to-principal basis for the purpose of listing their menu items or the Products (as defined below) for food ordering and delivery by the Customers on the BadiDukkan Platform.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>b. The Customers can access the menu items or Products listed on the BadiDukkan Platform and place orders against the Restaurant Partner(s)/Store(s) through BadiDukkan.</Typography>


                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>c. Your request to order food and beverages or Products from a Restaurant Partner or a Store page on the BadiDukkan Platform shall constitute an unconditional and irrevocable authorization issued in favor of BadiDukkan to place orders for food and beverages or Products against the Restaurant Partner(s)/Store(s) on your behalf.</Typography>


                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>d. Delivery of an order placed by you through the BadiDukkan Platform may either be undertaken directly by the Restaurant Partner or the Store against whom you have placed an order, or facilitated by BadiDukkan through a third-party who may be available to provide delivery services to you ("Delivery Partners"). In both these cases, BadiDukkan is merely acting as an intermediary between you and the Delivery Partners, or you and the Restaurant Partner or the Store, as the case may be.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>e. The acceptance by a Delivery Partner of undertaking delivery of your order shall constitute a contract of service under the Consumer Protection Act, 2019 or any successor legislations, between you and the Delivery Partner, to which BadiDukkan is not a party under any applicable law. It is clarified that Badi Dukkan does not provide any delivery or logistics services and only enables the delivery of food and beverages or Products ordered by the Customers through the BadiDukkan Platform by connecting the Customers with the Delivery Partners or the Restaurant Partners or the Store, as the case may be.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>f. Where BadiDukkan is facilitating delivery of an order placed by you, BadiDukkan shall not be liable for any acts or omissions on part of the Delivery Partner including deficiency in service, wrong delivery of order, time taken to deliver the order, order package tampering, etc.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>g. You may be charged a delivery fee for delivery of your order by the Delivery Partner or the Restaurant Partner or the Store, as the Delivery Partner or the Restaurant Partner or the Store may determine ("Delivery Charges). You agree that BadiDukkan is authorized to collect, on behalf of the Restaurant Partner or the Delivery Partner or the Store, the Delivery Charges for the delivery service provided by the Restaurant Partner or the Store or the Delivery Partner, as the case may be. The Delivery Charges may vary from order to order, which may be determined on multiple factors which shall include but not be limited to Restaurant Partner / Store, order value, distance, time of the day. BadiDukkan will inform you of the Delivery Charges that may apply to you, provided you will be responsible for Delivery Charges incurred for your order regardless of your awareness of such Delivery Charges.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>h. In addition to the Delivery Charges, you may also be charged an amount towards delivery surge for delivery of your order facilitated by the Delivery Partner or the Restaurant Partner or the Store, which is determined on the basis of various factors including but not limited to distance covered, time taken, demand for delivery, real time analysis of traffic and weather conditions, seasonal peaks or such other parameters as may be determined from time to time ("Delivery Surge"). You agree that BadiDukkan is authorized to collect, on behalf of the Restaurant Partner or the Delivery Partner or the Store, the Delivery Surge for the delivery service provided by the Restaurant Partner or the Store or the Delivery Partner, as the case may be. The Delivery Surge may vary from order to order, which may be determined on multiple factors which shall include but not be limited to Restaurant Partner / Store, order value, distance, demand during peak hours. Badi Dukkan will use reasonable efforts to inform you of the Delivery Surge that may apply to you, provided you will be responsible for the Delivery Surge incurred for your order regardless of your awareness of such Delivery Surge.</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>i. In respect of the order placed by You, BadiDukkan shall issue documents like order summary, tax invoices, etc. as per the applicable legal regulations and common business practices</Typography>

                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>j. You are expected to respect the dignity and diversity of Delivery Partners and accordingly you agree to not discriminate against any Delivery Partner on the basis of Discrimination Characteristics (as defined below). You are also expected to enable provision of a secure and fearless gig/ platform work environment for the delivery partners including prevention and deterrence of harassment (including sexual harassment) towards Delivery Partners.</Typography>
                            <Typography variant='h6' sx={{ fontSize: "12px", color: '#C8C8C8',mt:"10px"  }}>Discrimination Characteristics shall mean discrimination based on race, community, religion, disability, gender, sexual orientation, gender identity, age (insofar as permitted by applicable laws to undertake the relevant gig work), genetic information, or any other legally protected status.</Typography>

                            


                           
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default page