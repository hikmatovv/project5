import React from 'react'
import { Box, Typography, Button, Container, Grid } from '@mui/material/';
import bg1image from '../../Assets/images/images/project/project-image03.jpg'
import bg2image from '../../Assets/images/images/project/project-image04.jpg'
import bg3image from '../../Assets/images/images/project/project-image05.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Main2 = () => {
  return (
    <>
    
    <Grid mt="2%" ml="35%" position="absolute"  sx={{display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
<Typography variant="h5">Please  take  o look  through  our </Typography>
<Typography variant="h5" color="#D7B724">featured  Digital  Trends  </Typography>


    </Grid>
    <Grid pt="10%" pb="10%" container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#EFF8FD', width: '100%', height: '100%' }}>

      <Card xs={12} sm={4} md={4} lg={4} sx={{ maxWidth: 460 }}>
        <CardActionArea position='absolute'>
          <CardMedia
            component="img"
            height="auto"
            image={bg1image}
            alt="green iguana"

          />
        </CardActionArea>
        <Card sx={{width:'32%',height:'9%',marginLeft:'2%',position:'absolute',marginTop:'-15%'}}>
  <Typography  color="gray">Social Media  </Typography>
  <Typography mt="-2%"  variant="h5" color="#067588" sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><Typography>Race Bicycle</Typography> <Typography><ArrowCircleRightIcon /></Typography> </Typography>

</Card>
     
      </Card>

      <Card xs={12} sm={4} md={4} lg={4} sx={{ maxWidth: 460 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={bg2image}
            alt="green iguana"
          />

        </CardActionArea>

        <Card sx={{ width:'32%',height:'9%',marginLeft:'2%',position:'absolute',marginTop:'-15%'}}>
  <Typography   color="gray">Social Media  </Typography>
  <Typography mt="-2%"  variant="h5" color="#067588" sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><Typography>Race Bicycle</Typography> <Typography><ArrowCircleRightIcon /></Typography> </Typography>

</Card>
      </Card>

      <Card xs={12} sm={4} md={4} lg={4} sx={{ maxWidth: 460 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={bg3image}
            alt="green iguana"
          />

        </CardActionArea>
<Card sx={{width:'32%',height:'9%',marginLeft:'2%',position:'absolute',marginTop:'-15%'}}>
  <Typography   color="gray">Social Media  </Typography>
  <Typography mt="-2%"  variant="h5" color="#067588" sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}><Typography>Race Bicycle</Typography> <Typography><ArrowCircleRightIcon /></Typography> </Typography>

</Card>
      </Card>





    </Grid>

    </>
  )
}

export default Main2

