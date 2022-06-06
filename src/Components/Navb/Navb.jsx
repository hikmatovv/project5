import React from 'react'
import { Box, Typography, Container, Button, Grid } from '@mui/material/';
import navbimg from '../../Assets/images/images/working-girl.png'

const Navb = () => {
    return (
        <Grid>

            <Grid pt="5%" sx={{ backgroundColor: '#08788C', width: '100%', height: '700px', clipPath: 'polygon(0 0, 100% 0%, 100% 70%, 0% 100%)' }}>

                <Container>
                    <Grid mt="5%" container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Grid xs={12} md={6} sm={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <Grid>
                                <Typography variant="h3" color="white">We are ready  for your </Typography>

                            </Grid>

                            <Grid>
                                <Typography mt="3%" mb="3%" variant="h3" color="white">digital marketing</Typography>

                            </Grid>
                            <Grid>
                                <Button variant="outlined" sx={{ borderRadius: '40px', backgroundColor: 'white' }}>Let us discuss  together</Button>
                            </Grid>
                            <Grid> <Typography mt="3%" ml="8%" color="white">+99 080 070 424</Typography></Grid>


                        </Grid>

                        <Grid xs={12} md={6} sm={6} lg={6}>
                            <Grid>
                                <img width="100%" height="auto" src={navbimg}></img>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Grid>
        </Grid>
    )
}

export default Navb
