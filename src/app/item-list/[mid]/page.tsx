import { ItemScreen } from '@/components/ItemScreen';
import axios from 'axios';
import "../../../components/style.css";
import { BASE_URL, MENU } from '../../../constants/api_constant';
import { Box, Typography } from '@mui/material';

const getItems = async(mid : string)=>{
    try{
        const resp =  await axios.get(`${MENU}${mid}`)
        if(resp.data.message == 'success'){
            return resp.data.response
        }
        else{
            return null;
        }
    }catch(err){
        console.log("Error while fetching items",err);
        return null;
    }
}

const ItemList = async ({params,searchParams}: {params: any, searchParams: any}) => {
    
    const data = await getItems(params.mid);

    if(!data){
        return(
            <Box sx={{height:'99vh',width :'99vw',display:'flex',justifyContent:'center',alignItems:'center'}} >
                <Typography textAlign={'center'} sx={{color:"green",fontWeight:800}}>
                    Refresh The Page or Try Again Later
                </Typography>
            </Box>
        )
    }
    else{
        return (
            <Box component={'div'}>
                <ItemScreen data={data}/>
            </Box>
        )

    }
}

export default ItemList