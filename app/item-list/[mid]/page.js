'use client'
import { Badge, Box, Container, Grid, IconButton, Paper, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import PlaceIcon from '@mui/icons-material/Place';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarIcon from '@mui/icons-material/Star';
import { useParams, useRouter } from 'next/navigation';
import { BASE_URL } from '@/constant';
import axios from 'axios';
import AddToCart from '@/components/modals/AddToCart';
import "../../../components/style.css"

const ItemList = () => {
    const router = useRouter()
    const {mid} = useParams()
    const [allDetails , setAllDetails] = useState(null)
    const [categories , setCategories] = useState(null)
    const [catItems , setCatItems] = useState(null)
    const [addItem , setAddItem] = useState({open:false,data:{}})

    const getItems = async()=>{
        try{
    // console.log("categories",mid)
            const resp =  await axios.get(`${BASE_URL}api/pre-order/pro/${mid}`)
            if (resp.data.message === "success") {
                setAllDetails(resp?.data?.response)
                setCategories(resp?.data?.response?.allCategories);
                console.log("response line no 24", resp?.data?.response);
            
                const allItems = resp?.data?.response?.allCategories.flatMap(ele => ele.items || []);
                setCatItems(allItems)
                // console.log("response line no 33", allItems);
            }
        }catch(err){
            console.log("Error while fetching items",err)
        }
    }

    const handleSelectCatItems =(data)=>{
        console.log("items..",data.items)
        setCatItems(data.items)
    }

    const addToCartHandler =(ele)=>{
        console.log("ele",ele)
        setAddItem({...addItem,open:true,data:ele})
    }

    useEffect(()=>{
        getItems()
    },[])

    console.log("categories",catItems)
    return (
        <Container disableGutters maxWidth={'xl'}>
            <Grid container sx={{ bgcolor: "black" }}>
                <Grid item xs={12} sx={{}}>
                    <Paper sx={{ p: "20px",bgcolor:"black",borderBottom:"1px solid #8bc34a" }}>
                        <Typography variant='h6' sx={{ textTransform: "capitalize",color:"#8bc34a", fontWeight: 600 }}>
                           {allDetails?.ownerName ?? <Skeleton variant='text' sx={{width:"100px",fontSize:"22px"}}/>}
                        </Typography>
                        <Typography sx={{ textTransform: "capitalize", fontSize: "14px",color:"white" }}>{allDetails?.shopName ?? <Skeleton variant='text' sx={{width:"100px",fontSize:"17px"}}/>}</Typography>
                        <Typography sx={{ textTransform: "capitalize", fontSize: "11px", textTransform: "uppercase", color: "white" }}>{allDetails?.address ?? <Skeleton variant='text' sx={{width:"200px",fontSize:"17px"}}/>}</Typography>
                        
                        {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ textTransform: "capitalize", fontSize: "14px", display: "flex", alignItems: "center" }}><WatchLaterIcon sx={{ fontSize: "16px", mr: "3px" }} />{allDetails?.deliveryTime} | 9313.54 km away</Typography>
                            <Box>
                                <IconButton sx={{ bgcolor: "#8bc34a", p: "3px", mr: "10px" }}>
                                    <WifiCalling3Icon sx={{ color: "white", fontSize: "15px" }} />
                                </IconButton>
                                <IconButton sx={{ bgcolor: "#8bc34a", p: "3px" }}>
                                    <PlaceIcon sx={{ color: "white", fontSize: "16px" }} />
                                </IconButton>
                            </Box>
                        </Box> */}

                    </Paper>
                </Grid>

                <Grid item xs={12} sx={{}}>
                    <Paper sx={{ p: "20px",bgcolor:"black" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography align='center' sx={{ display: "flex", alignItems: "center", fontSize: "14px",color:"#8bc34a" }}><MenuBookIcon sx={{ fontSize: "40px", color: "#8bc34a", mr: "5px", mt: "-3px" }} /> Menu</Typography>
                        </Box>
                        <Box  sx={{ display: "flex", overflow: "auto", mt: "20px" }}>
                      
                        {
                            categories != null
                            ?
                                categories?.map((ele, i) => (
                                    <Box key={i} sx={{ display: "flex",cursor:"pointer", mr: "15px", flexDirection: "column", alignItems: "center", justifyContent: "center" }} onClick={()=>{handleSelectCatItems(ele)}}>
                                        <Box sx={{ height: "50px",backgroundImage:`url(${BASE_URL+ele.catImage})`,border:"1px solid #8bc34a", overflow: "hidden", width: "50px", borderRadius: "50px" }}>
                                            {/* <Image src={burger} alt='burger' style={{ height: "50px", position: "absolute", width: "auto" }} /> */}
                                        </Box>
                                        <Box sx={{ border: "1px solid #8bc34a", width: "fit-content", p: "3px 10px", mt: "5px", borderRadius: "25px" }}>
                                            <Typography sx={{ textTransform: "capitalize",whiteSpace:"nowrap", fontSize: "13px",color:"white" }}>{ele.catName}</Typography>
                                        </Box>
                                    </Box>
                                ))
                                :
                                new Array(6).fill(1).map((ele,i)=>(
                                    <Box key={i} sx={{ display: "flex",cursor:"pointer", mr: "15px", flexDirection: "column", alignItems: "center", justifyContent: "center" }} onClick={()=>{handleSelectCatItems(ele)}}>
                                        <Box sx={{ height: "50px",overflow: "hidden", width: "50px", borderRadius: "50px" }}>
                                            <Skeleton variant='circular' sx={{height:"100%",width:"100%"}}/>
                                        </Box>
                                        <Box sx={{width: "fit-content", p: "3px 10px", mt: "5px", borderRadius: "25px" }}>
                                           <Skeleton variant='text' sx={{width:"70px",height:"100%"}}/>
                                        </Box>
                                    </Box>
                                    )
                                )
                        }
                            
                            
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{ }}>
                    <Paper sx={{ bgcolor: "#8bc34a", p: "10px 0px" }}>
                        <Typography align='center' sx={{ fontWeight: 600, fontSize: "16px", color: "white" }}>Popular Item</Typography>
                    </Paper>
                </Grid>
                {
                    categories != null 
                    ?
                    catItems.length !=0 ?
                    catItems?.map((ele, i) => (
                        <Grid item xs={12} key={i} sx={{bgcolor:"black"}}>
                            <Paper sx={{ display: "flex",bgcolor:"black", justifyContent: "space-between", borderBottom: "1px solid #8bc34a", boxSizing: "border-box", width: "100%", p: "15px 30px 20px 10px" }}>

                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ height: "80px",backgroundImage:`url(${BASE_URL}${ele.itemImage})`,border:"1px solid #8bc34a",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%", position: "relative", width: "80px", borderRadius: "10px", overflow: "hidden" }}>
                                        <Box sx={{ position: "absolute", top: "0px", left: "0px", zIndex: 9, height: "17px", bgcolor: "#8bc34a", width: "60px" }}>
                                            <Typography align='center' sx={{ color: "white", fontSize: "10px", mt: "1px", fontWeight: 800 }}>33 %OFF</Typography>
                                        </Box>
                                        {/* <Image src={dhosa} alt='burger' style={{ position: "absolute", width: "100%", height: "100%" }} /> */}
                                    </Box>
                                    <Box sx={{ ml: "10px" }}>
                                        <Typography sx={{ fontSize: "14px",color:"#8bc34a" }}>{ele.itemName}</Typography>
                                        {/* <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "gray" }}>Category : Rasmalai</Typography> */}
                                        <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                        <Box sx={{mr:"10px"}}>
                                    
                                            
                                            <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "white" }}>₹{Math.min(...ele.sizeList.map((item)=>(item.srp)))}</Typography>
                                            {/* return <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "gray" }}><span style={{ color: "#8bc34a", marginRight: "10px" }}>{item?.itemSize}</span><span style={{ color: "#8bc34a", marginRight: "10px" }}>{item?.srp}</span> ₹<span style={{ textDecoration: "line-through" }}>{item?.srp}</span></Typography> */}
                                         
                                        
                                        </Box>
                                         <Box>
                                          <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "white" }}><StarIcon sx={{color:"#8bc34a",fontSize:"14px"}}/>{" "}{ele?.rating}</Typography>
                                         </Box>
                                        </Box>
                                        <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "white" }}>{ele?.longDescription}</Typography>

                                    </Box>
                                </Box>

                                <Box sx={{ height: "80px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "fit-content" }}>
                                    <Box>
                                        <StopCircleOutlinedIcon sx={{ color:ele.foodType == "Veg" ? "#8bc34a":"#b71c1c" }} />
                                    </Box>
                                    <Box sx={{bgcolor: "#8bc34a",border:"1px solid #689f38",borderRadius:"25px",p:"2px 10px",userSelect:"none",cursor:"pointer"}} onClick={()=>{addToCartHandler(ele)}}>
                                     <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "15px",color:"white" }}>Add To Cart</Typography>

                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                    :
                    <Box sx={{height:"60vh",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
                        <Typography align='center' sx={{ mt: "2px",fontSize: "20px",fontWeight:"bold", color: "gray" }}>No Records Found!</Typography>
                    </Box>
                    :
                    new Array(7).fill(1).map((ele, i) => (
                        <Grid item xs={12} key={i}>
                            <Paper sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #8bc34a", boxSizing: "border-box", width: "100%", p: "15px 30px 20px 10px" }}>

                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ height: "80px", width: "80px", borderRadius: "10px", overflow: "hidden" }}>
                                        <Skeleton variant='rectangular' sx={{height:"100%",width:"100%"}}/>
                                    </Box>
                                    <Box sx={{ ml: "10px" }}>
                                    <Skeleton variant='text' sx={{width:"100px",fontSize:"20px"}}/>
                                    <Skeleton variant='text' sx={{width:"100px",fontSize:"17px"}}/>
                                    <Skeleton variant='text' sx={{width:"100px",fontSize:"17px"}}/>

                                    </Box>
                                </Box>

                                <Box sx={{ height: "80px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "fit-content" }}>
                                    <Box>
                                    <Skeleton variant='circular' sx={{width:"30px",height:"30px"}}/>
                                       
                                    </Box>
                                    <Box sx={{display: "flex" }}>
                                          <Skeleton variant='text' sx={{width:"100px",fontSize:"35px"}}/>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
            <Paper sx={{ position: "fixed", border: "1px solid #e0e0e0", overflow: "hidden", cursor: "pointer", p: "5px", height: "50px", borderRadius: "50px", width: "50px", bottom: "20px", right: "20px" }} onClick={() => { router.push('/cart-page') }}>
                <Box sx={{ height: "100%", width: "100%", bgcolor: "#424242", display: "flex", alignItems: "center", borderRadius: "50px", justifyContent: "center", }}>
                    <Badge badgeContent={4} sx={{ color: "white" }}>
                        <ShoppingBagIcon sx={{ color: "white" }} />
                    </Badge>
                </Box>
            </Paper>
            <AddToCart addItem={addItem}  setAddItem={setAddItem}/>
        </Container>
    )
}

export default ItemList