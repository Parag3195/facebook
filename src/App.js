import './App.css';
import Button  from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { styled, ThemeProvider, Typography } from '@mui/material';
import { Navbar } from './components/Navbar';
import {Sidebar}  from './components/Sidebar';
import {Rightbar}  from './components/Rightbar';
import Feed from './components/Feed';
import { Box, Container, createTheme, Stack } from '@mui/system';
import Add from './components/Add';
import { useState } from 'react';


function App() {

//   const BlueButton = styled(Button)(({theme}) =>({
//     backgroundColor:theme.palette.otherColor.main,
// color:"black",
//  margin:5,
//  "&:hover": {backgroundColor:"skyblue"},
 
//   }));
  return (
    <div >
      {/* <Button sx={{margin:3}} variant="contained"  startIcon={<SettingsIcon />}>Settings</Button>
      <Button  sx={{margin:3}} variant="contained" startIcon={<AddIcon />}>Add new post</Button>
      <Button sx={{margin:3}} variant="contained" startIcon={<AcUnitIcon />}>Outlined</Button>
      
      <Typography variant="h1" component="h2">
  Hi, I am paragraph element only but i look like h1
</Typography>;
<Button variant="contained" disabled
 sx={{backgroundColor:"coral",
color:"black",
 margin:5,
 "&:hover": {backgroundColor:"red"},
 "&:disabled": {backgroundColor:"grey",color:"white"},

}}>My custom button</Button>
<BlueButton>My custom Button</BlueButton> */}



<Box bgcolor={"Background.default"} color={"text.primary"}>
  <Navbar/>
  {/* Navbar */}
  <Stack direction="row" spacing={2} justifyContent="space-evenly">
<Sidebar />
<Feed/>
<Rightbar/>

</Stack>
<Add/>
</Box>
    </div>
    
   
    
  );
}

export default App;
