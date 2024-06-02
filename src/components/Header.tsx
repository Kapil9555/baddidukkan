import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <Grid container>
            <Grid item xs={12} sx={{ height: "50px", position: "fixed", top: 0, width: "100%" }}>
                <Box sx={{ display: "flex",justifyContent:'center', alignItems: "center", color: "white", height: "100%", bgcolor: "#8bc34a" }}>
                    <Typography align='center' variant='h3' sx={{ fontWeight: 600, fontFamily: "sans-serif" }}>
                        BadiDukkan
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Header