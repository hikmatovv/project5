import React from 'react'
import { Box, Typography, CardActionArea, CardMedia, Card, Button, Container, Grid } from '@mui/material/';
import image from '../../Assets/images/images/female-avatar.png'

const Main3 = () => {
    return (
        <>
           
           <Grid mt="5%" item container sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}> 
                  <Grid pl="7%" xs={12} sm={6} md={6} lg={6}>
                  
                        
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image}
                                alt="green iguana"
                                sx={{width:'100%'}}
                            />

                        
                                                                

                </Grid>
                    <Grid pl='10%' pr="10%" xs={12} sm={6} md={6} lg={6} >
                        <Typography color="gray">CLIENT TESTIMONIALS</Typography>
                        <Typography mt="4%" mb="4%" variant="h5" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex odit nulla impedit iste incidunt, officiis, nam doloribus eligendi vero sed qui eum explicabo, neque iusto doloremque necessitatibus ullam asperiores ipsam.</Typography>
                        <Typography  sx={{display:'flex',flexDirection:'row'}}><Typography variant="h6" color="yellow">    MARY ZOE</Typography> <Typography variant="h6" color="gray">/Digital Agency(CEO)</Typography></Typography>

                    </Grid>





            </Grid>
          
        </>
    )
}

export default Main3
