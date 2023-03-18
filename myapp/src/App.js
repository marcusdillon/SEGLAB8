
    

import React, {Component} from 'react';
import News from './News';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import InvestingResources from './InvestingResources';
import Appointment from './Appointment';
import Portoflio from './Portfolio';
function App() {
  return (
    
    <div className="App">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>  
      <div className="wholeBody"> 
        <div className='navHeader'>
        <Banner/>
        </div>
        <div className='navNav'>
          <Navbar/>
        </div>
        <div className='navNews'>
          <News/>
        </div>
        <div className='navResources'>
          <InvestingResources/>
        </div>
        <div className='navAppointment'>
          <Appointment/>
        </div>
        <div className='navPortfolio'>
          <Portoflio/>
        </div>
        <div className='navFooter'>
          <Footer/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
