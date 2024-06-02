'use client'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { Badge, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { BASE_URL } from '../constants/api_constant';
import "./style.css";
import { useEffect, useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddToCartModal from './modals/AddToCart';
import { useRouter } from 'next/navigation';

export const ItemScreen = ({ data }: any) => {

    const router = useRouter()
    const [record, setRecord] = useState(data);
    const [addItem, setAddItem]=useState<{open:boolean,data:any}>({open:false,data:null})


 
    const handleAddToCart =(ele:any)=>{
        // console.log("ele",ele)
        setAddItem({...addItem,open:true,data:ele})
    }

    useEffect(() => {
        setRecord(data);
    }, [data])

    return (
        <Container disableGutters maxWidth={'xl'}>
            <Grid container sx={{ bgcolor: "black" }}>
                <Grid item xs={12} sx={{}}>
                    <Paper sx={{ p: "20px", bgcolor: "black", borderBottom: "1px solid #8bc34a" }}>
                        <Typography variant='h6' sx={{ textTransform: "capitalize", color: "#8bc34a", fontWeight: 600 }}>
                            {record.shopName}
                        </Typography>
                        <Typography sx={{ textTransform: "capitalize", fontSize: "14px", color: "white" }}>{record.ownerName}</Typography>
                        <Typography sx={{ textTransform: "capitalize", fontSize: "11px", color: "white" }}>{record.address}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sx={{}}>
                    <Paper sx={{ p: "20px", bgcolor: "black" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography align='center' sx={{ display: "flex", alignItems: "center", fontSize: "14px", color: "#8bc34a" }}><MenuBookIcon sx={{ fontSize: "40px", color: "#8bc34a", mr: "5px", mt: "-3px" }} /> Menu</Typography>
                        </Box>
                        <Box sx={{ display: "flex", overflow: "auto", mt: "20px" }}>
                            {
                                record.allCategories.map((ele: any, i: number) => {
                                    if (ele.items.length > 0) {
                                        return (

                                            <Box key={i} sx={{ display: "flex", cursor: "pointer", mr: "15px", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                                                <Box sx={{ height: "50px", backgroundImage: `url(${BASE_URL + ele.catImage})`, border: "1px solid #8bc34a", overflow: "hidden", width: "50px", borderRadius: "50px" }}>
                                                    {/* <Image src={burger} alt='burger' style={{ height: "50px", position: "absolute", width: "auto" }} /> */}
                                                </Box>
                                                <Box sx={{ border: "1px solid #8bc34a", width: "fit-content", p: "3px 10px", mt: "5px", borderRadius: "25px" }}>
                                                    <Typography sx={{ textTransform: "capitalize", whiteSpace: "nowrap", fontSize: "13px", color: "white" }}>{ele.catName}</Typography>
                                                </Box>
                                            </Box>

                                        )
                                    }
                                })
                            }
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{}}>
                    <Paper sx={{ bgcolor: "#8bc34a", p: "10px 0px" }}>
                        <Typography align='center' sx={{ fontWeight: 600, fontSize: "16px", color: "white" }}>Popular Item</Typography>
                    </Paper>
                </Grid>
                <Grid container >
                    {
                        record.allCategories.length != 0 ?
                            record.allCategories.map((cat: any, ind: number) => {
                                if (cat.items.length != 0) {
                                    return (
                                        <Grid item xs={12} key={cat._id} sx={{ mt: 5 }}>
                                            <Typography sx={{ color: 'green' }} fontWeight={800}>{cat.catName} Section</Typography>
                                            {
                                                cat.items.map((ele: any, i: number) => (
                                                    <Grid item xs={12} key={ele._id} sx={{ bgcolor: "black" }}>
                                                        <Paper sx={{ display: "flex", bgcolor: "black", justifyContent: "space-between", borderBottom: "1px solid #8bc34a", boxSizing: "border-box", width: "100%", p: "15px 30px 20px 10px" }}>

                                                            <Box sx={{ display: "flex" }}>
                                                                <Box sx={{ height: "80px", backgroundImage: `url(${BASE_URL}${ele.itemImage})`, border: "1px solid #8bc34a", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", position: "relative", width: "80px", borderRadius: "10px", overflow: "hidden" }}>
                                                                    <Box sx={{ position: "absolute", top: "0px", left: "0px", zIndex: 9, height: "17px", bgcolor: "#8bc34a", width: "60px" }}>
                                                                        <Typography align='center' sx={{ color: "white", fontSize: "10px", mt: "1px", fontWeight: 800 }}>33 %OFF</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box sx={{ ml: "10px" }}>
                                                                    <Typography sx={{ fontSize: "14px", color: "#8bc34a" }}>{ele.itemName}</Typography>
                                                                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                                        <Box sx={{ mr: "10px" }}>
                                                                            <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "white" }}>₹{Math.min(...ele.sizeList.map((item: any) => (item.srp)))}</Typography>
                                                                        </Box>
                                                                        <Box>
                                                                            <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "white" }}><StarIcon sx={{ color: "#8bc34a", fontSize: "14px" }} />{" "}{ele.rating}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                    <Typography align='center' sx={{ display: { lg: "flex", md: "none", sm: "none", xs: "none" }, mt: "2px", alignItems: "center", fontSize: "12px", color: "white" }}>{ele.longDescription.length > 20 ? ele.longDescription.slice(0, 150) + "..." : ele.longDescription}</Typography>
                                                                </Box>
                                                            </Box>

                                                            <Box sx={{ height: "80px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "fit-content" }}>
                                                                <Box>
                                                                    <StopCircleOutlinedIcon sx={{ color: ele.foodType == "Veg" ? "#8bc34a" : "#b71c1c" }} />
                                                                </Box>
                                                                <Box sx={{ bgcolor: "#8bc34a", border: "1px solid #689f38", borderRadius: "25px", p: "2px 10px", userSelect: "none", cursor: "pointer" }} >
                                                                    <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "15px", color: "white" }} onClick={()=>{handleAddToCart(ele)}}>Add To Cart</Typography>

                                                                </Box>
                                                            </Box>
                                                        </Paper>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    )
                                }
                            })
                            :
                            <Box sx={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                <Typography align='center' sx={{ mt: "2px", fontSize: "20px", fontWeight: "bold", color: "gray" }}>No Records Found!</Typography>
                            </Box>
                    }
                </Grid>
            </Grid>
            <Paper sx={{ position: "fixed", border: "1px solid #e0e0e0", overflow: "hidden", cursor: "pointer", p: "5px", height: "50px", borderRadius: "50px", width: "50px", bottom: "20px", right: "20px" }} onClick={() => { router.push('/cart-page') }}>
                <Box sx={{ height: "100%", width: "100%", bgcolor: "#424242", display: "flex", alignItems: "center", borderRadius: "50px", justifyContent: "center", }}>
                    <Badge badgeContent={4} sx={{ color: "white" }}>
                        <ShoppingBagIcon sx={{ color: "white" }} />
                    </Badge>
                </Box>
            </Paper>
            <AddToCartModal addItem={addItem}  setAddItem={setAddItem}/>
        </Container>
    )
}