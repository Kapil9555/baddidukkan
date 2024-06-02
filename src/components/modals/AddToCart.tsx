'use client'
import AddBoxIcon from '@mui/icons-material/AddBox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Box, Button, CircularProgress, IconButton, Modal, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '@/constants/api_constant';


const AddToCartModal = ({ addItem, setAddItem}:{addItem:any,setAddItem:any}) => {
   
   
    interface ItemQty {
        [key: string]: { [key: string]: number };
    }
    

    // const BASE_URLN:string = 

    const [btnLoader, setBtnLoader] = useState(false)

    const [itemQty , setItemQty]= useState<ItemQty>({})

    const handleClose = () => { setAddItem({ ...addItem, open: false }) };


    const handleQtyInc = (it:any) => {
        console.log("it",it)
        setItemQty((prev:any) => ({
            ...prev,
            [addItem?.data?._id]: {
              ...prev[addItem?.data?._id],
              [it.itemSize]: (prev[addItem?.data?._id]?.[it.itemSize] || 0) + 1
            }
          }));

    }

    
    const handleQtyDec = (it:{itemSize:string}) => {
        // console.log("it",it)
        if (itemQty[addItem?.data?._id]?.[it.itemSize] > 0) {
            // console.log("it",it)
        setItemQty((prev:any) => ({
            ...prev,
            [addItem?.data?._id]: {
              ...prev[addItem?.data?._id],
              [it.itemSize]: prev[addItem?.data?._id]?.[it.itemSize] - 1
            }
          }));
        }

    }


    // console.log("qty data", addItem) 


    const addToCarthandler = async () => {
        setBtnLoader(true)
        const uid: string | null = localStorage.getItem('UID');
        if (!uid) {
            console.error("User Doesn't Exists");
            return;
        }
        const uiD: string = JSON.parse(uid);
        const dataToSend = { ...addItem.data, uid: uiD }
        console.log("response data here", dataToSend);
        try {
            const respData = await axios.post('/api/cart', dataToSend)

            if (respData.data.message == "Item Added Successfully") {
                // setOpen(true)
                setAddItem({ ...addItem, open: false })
                // fetchCartData()
                setBtnLoader(false)
            }
            else {
                alert(respData.data.message)
                setBtnLoader(false)
            }
        } catch (err) {
            console.log(err);
            alert(err)
        }
    }

   
    console.log("addItem?.data",itemQty)

    
   


    return (
        <>
            <Modal open={addItem.open} onClose={handleClose} sx={{ border: "none" }} disableAutoFocus>
               
                <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { lg: 400, md: 400, sm: 380, xs: 320 }, bgcolor: 'white', textAlign: 'center', borderRadius: "15px", overflow: "hidden", height: { lg: 200, md: 200, sm: 180, xs: 160 }}}>
                    <Box sx={{ height: "100%", width: "100%", display: "flex", position: "relative", bgcolor: "white" }}>

                        <IconButton sx={{ position: "absolute", top: "-5px", right: "-3px", zIndex: 9999 }} onClick={() => { setAddItem({ ...addItem, open: false }) }}>
                            <CancelOutlinedIcon sx={{ color: "#616161", fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "20px" } }} />
                        </IconButton>

                        <Box sx={{ height: "100%", backgroundImage: `url(${BASE_URL}${addItem?.data?.itemImage})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: { lg: 180, md: 180, sm: 160, xs: 130 }, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {/* <Image alt='img' src={cardImg} style={{ height: "85%", width: "95%" }} /> */}
                        </Box>

                        <Box sx={{ width: { lg: 220, md: 220, sm: 220, xs: 200 }, height: "100%", bgcolor: "#b2ebf2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ height: "100%", position: "relative",width:"80%",p:"0px 10px",mt:"5px" }}>
                                <Typography align='center' sx={{ fontSize: { lg: "20px", md: "20px", sm: "20px", xs: "20px" }, fontWeight: "800" }}>{addItem?.data?.itemName}</Typography>
                                <Box sx={{ display: "flex",justifyContent: "center",width:"100%", alignItems: "Center", mt: { lg: "15px", md: "15px", sm: "13px", xs: "8px" } }}>
                                    <Box sx={{ width:"100%"}}>
                                        {
                                            addItem?.data?.sizeList?.map((item:any) => {
                                                return <Box sx={{ display: "flex",justifyContent:"space-between",width:"100%"}}>
                                                    <Typography align='center' sx={{ display: "flex", mt: "2px", alignItems: "center", fontSize: "12px", color: "gray",mr:"10px",}}><span style={{ color: "green", marginRight: "10px" }}>{item?.itemSize}</span>₹<span style={{}}>{item?.srp}</span></Typography>
                                                    <Box sx={{ width: { lg: "60px", md: "60px", sm: "60px", xs: "60px" }, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <IconButton onClick={()=>{handleQtyDec(item)}} sx={{ p: "0px" }}>
                                                            <IndeterminateCheckBoxIcon sx={{ fontSize: { lg: "25px", md: "25px", sm: "25px", xs: "25px" }, color: "#37474f" }} />
                                                        </IconButton>
                                                          <Typography align='center' sx={{ fontSize: { lg: "24px", md: "24px", sm: "21px", xs: "15`px" }, fontWeight: 800 }}> {(itemQty[addItem?.data?._id]?.[item.itemSize])||0}</Typography>
                                                        <IconButton onClick={()=>{handleQtyInc(item)}} sx={{ p: "0px" }}>
                                                            <AddBoxIcon sx={{ fontSize: { lg: "25px", md: "25px", sm: "25px", xs: "25px" }, color: "#37474f" }} />
                                                        </IconButton>

                                                    </Box>

                                                </Box>
                                                {/* {itemQty[addItem?.data?._id]?.[ele.itemSize]} */}
                                            })
                                        }
                                    </Box>


                                </Box>

                                <Box sx={{ display: "flex", position: "absolute", bottom: "10px", justifyContent: "center", alignItems: "center", mt: { lg: "15px", md: "15px", sm: "13px", xs: "8px" }, width: "100%" }}>
                                    {
                                        btnLoader ?
                                            <CircularProgress color="inherit" size={25} />
                                            :
                                            <Button variant='contained' sx={{ bgcolor: "#8bc34a", fontSize: "13px", p: "2px 20px", "&:hover": { bgcolor: "#8bc34a" } }} onClick={addToCarthandler}> Add</Button>
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Modal>
        </>
    )
}

export default AddToCartModal



