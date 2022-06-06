import React from 'react'
import { Box, Typography, CardActionArea, CardMedia, Card, Button, Container, Grid } from '@mui/material/';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
    return (
        <>
            <Grid pt="10%" sx={{ backgroundColor: '#18191D', width: '100%', height: '600px' }}>

                <Grid container sx={{ display: 'flex', flexDirection: 'row',width:'100%'}}>
                    <Grid pl="15%" xs={12} sm={6} md={6} lg={6} >
                        <Typography variant="h3" color="white">We make  creative</Typography>
                        <Typography variant="h3" color="yellow"> brands only </Typography>

                    </Grid>

                    <Grid pl="15%" container xs={12} sm={6} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Grid xs={12} sm={4} md={4} >
                            <Typography variant="h5" color="white">Contact Info </Typography>
                            <Typography color="gray"><PhoneIcon sx={{color:'yellow' ,marginRight:'2%'}}/> -998-965-000-880</Typography>
                            <Typography color="gray"> <EmailIcon sx={{color:'yellow'}}/>hello@company.com</Typography>



                        </Grid>

                        <Grid xs={12} sm={4} md={4}>
                            <Typography variant="h5" color="white">Our Studio </Typography>
                            <Typography color="gray"><HomeIcon sx={{color:'yellow'}} /> Av .Lucio Costa Barne da </Typography>
                            <Typography color="gray">Tijuca  Rio De janerio-RJ.</Typography>


                        </Grid>
                    </Grid>

                </Grid>

               <Container>
               <Grid mt="13%"container sx={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-evenly'}}>

<Grid xs={12} sm={3} md={4} lg={4} sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
<Typography color="gray">Copyright 2020 Your Company </Typography>
<Typography ml="7%" color="gray">Design TemplateMo </Typography>


</Grid>

<Grid  xs={12} sm={4} md={4} lg={4} sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
<Typography color="gray">Stories </Typography>
<Typography color="gray">Work with us </Typography>
<Typography color="gray">Privacy </Typography>


</Grid>


<Grid  xs={12} sm={4} md={4} lg={4} sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
<Typography color="gray"><InstagramIcon/></Typography>
<Typography ml="3%" mr="3%" color="gray"><TwitterIcon/></Typography>
<Typography color="gray"><LanguageIcon/></Typography>
<Typography ml="3%" color="gray"><TwitterIcon/></Typography>


</Grid>



</Grid>
               </Container>

            </Grid>
        </>
    )
}

export default Footer
