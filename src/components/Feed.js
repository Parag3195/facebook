import React, { useState } from "react";
import { Box } from '@mui/system';

import { Post } from "./Post";


export const Feed =() =>{
  
    return(
        <Box  flex={4} p={2}>
       <Post name="Parag" img="https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
       <Post name="Utkarsha" img="https://images.pexels.com/photos/4562685/pexels-photo-4562685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
       <Post name="Bhushan" img="https://images.pexels.com/photos/1886487/pexels-photo-1886487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>

    
        </Box>
    )
}
export default Feed;