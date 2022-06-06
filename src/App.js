import React from 'react'
import './App.css';
import { Grid, Container } from '@mui/material/'
import Navbar from './Components/Navbar/Navbar'
import Navb from './Components/Navb/Navb'
import Main1 from './Components/Main1/Main1'
import Main2 from './Components/Main2/Main2'
import Main3 from './Components/Main3/Main3'
import Footer from './Components/Footer/Footer'






function App() {
  return (
    <Grid >

      <Navbar />
      <Navb />
      <Main1 />
      <Main2 />
      <Main3 />
      <Footer/>
      
    </Grid>


  );
}

export default App;
