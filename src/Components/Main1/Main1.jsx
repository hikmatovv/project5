import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material/';
import mainimg from '../../Assets/images/images/office.png'


const Main1 = () => {
    return (
        <>
            <Grid container >

                <Grid mt="5%" ml="30%" mr="20%" xs={12} sm={12} md={12} >
                    <Typography sx={{ display: 'flex', flexDirection: 'row' }}><Typography variant='h4'>the best</Typography>  <Typography variant='h4' color="yellow">Digital Marketin</Typography></Typography>
                    <Typography sx={{ display: 'flex', flexDirection: 'row' }}>  <Typography color="yellow" variant='h4'>Agency </Typography> <Typography variant='h4' textAlign="center">in Ri</Typography></Typography>

                    <Typography mt="3%" mb="3%">Lorem, ipsum  consectetur adipisicing elit. Autem ipsam aspernatur minima laborum  fuga quis voluptates illo odit non, corrupti et quae officiis corporis doloremque, eveniet velit soluta voluptatem?</Typography>
                    <Typography>Lorem, ipsum dolor sit Lorem  dolor sit amet consectetur adipisicing elit. Iste, dolorem? amet consectetur adipisicing elit. Autem ipsam aspernatur minima laborum  fuga quis voluptates illo odit non, coti et quae officiis corporis doloremque, eveniet velit soluta voluptatem?</Typography>


                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img width="60%" src={mainimg}></img>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Main1
