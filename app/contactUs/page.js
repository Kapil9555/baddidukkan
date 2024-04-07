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

<Grid item xs={12} sx={{ height: "50px",position:"fixed",top:0,width:"100%",zIndex:9 }}>
    <Box sx={{ display: "flex", alignItems: "center", color: "white", height: "100%", bgcolor: "#8bc34a" }}>
        <IconButton sx={{ mr: "20px" }} onClick={()=>{router.back()}}>
            <KeyboardBackspaceIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography variant='h6' sx={{ fontSize: "17px" }}>Contact Us</Typography>
    </Box>
</Grid>
<Grid container justifyContent={'center'} alignItems={'center'} sx={{height:{lg:"80vh",md:"80vh",sm:"60vh",xs:"60vh"},mt:"50px"}}>
        <Grid item xs={11} sm={9} md={6} lg={6} sx={{}}>
            <Box>
                <Box sx={{p:"2px 10px",borderRadius:"10px",display:"flex",alignItems:"center",border:"2px solid #bdbdbd"}}>
                    <Box>
                        <PersonIcon sx={{color:"gray"}}/>
                    </Box>
                    <Box>
                        <InputBase placeholder='Name' sx={{color:"#424242",fontSize:"16px",pl:"5px"}}/>
                    </Box>
                </Box>

                <Box sx={{mt:"20px",p:"2px 10px",borderRadius:"10px",display:"flex",alignItems:"center",border:"2px solid #bdbdbd"}}>
                    <Box>
                        <CallIcon sx={{color:"gray"}}/>
                    </Box>
                    <Box>
                        <InputBase placeholder='Contact Number' sx={{color:"#424242",fontSize:"16px",pl:"5px"}}/>
                    </Box>
                </Box>

                <Box sx={{mt:"20px",p:"2px 10px",borderRadius:"10px",display:"flex",alignItems:"center",border:"2px solid #bdbdbd"}}>
                    <Box>
                        <EmailIcon sx={{color:"gray"}}/>
                    </Box>
                    <Box>
                        <InputBase placeholder='Message' sx={{color:"#424242",fontSize:"16px",pl:"5px"}}/>
                    </Box>
                </Box>

                <Box sx={{mt:"20px",p:"2px 10px",borderRadius:"10px",display:"flex",alignItems:"center",border:"2px solid #bdbdbd"}}>
                    <Box>
                        <EmailIcon sx={{color:"gray"}}/>
                    </Box>
                    <Box>
                        <InputBase placeholder='Email' sx={{color:"#424242",fontSize:"16px",pl:"5px"}}/>
                    </Box>
                </Box>

                <Box sx={{mt:"30px",display:"flex",justifyContent:"center"}}>
                    <Button variant='contained' sx={{bgcolor:"#8bc34a",p:"2px 40px",whiteSpace:"nowrap",textTransform:"capitalize","&:hover":{bgcolor:"#8bc34a"}}}>Submit</Button>
                </Box>
            </Box>
        </Grid>
</Grid>
    </Grid>
    </Container>
    <Footer/>
    </>
  )
}

export default page