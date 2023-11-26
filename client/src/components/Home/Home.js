import React from 'react';
import Navbar from '../navbar/navbar';
 
 
import Carouselle from '../carousel/carousel';
import Footer from '../Footer/Footer';
import Aboutus from '../Aboutus/Aboutus';

function Home() {
  return (
    <div>
    
      <Carouselle />
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default Home;
