import React from 'react';
import LoginLogoutButton from '../components/LoginLogoutButton';
import { usePrivy } from '@privy-io/react-auth';
import '../styles/_home.sass';
import Footer from '../components/Footer';
import sdv from '../images/sdv.jpg';
import lottery from '../images/lottery.png';  

const Homepage = () => {
  const { user, authenticated } = usePrivy(); 

  return (
    <>
    <div className="wrapper">
      <div className="intro">
      <p className="intro-text">SDV Loyalty Group is a new way
         of enjoying performances, fantastic merch, 
         and get a higher $Purpose by being together</p>
         </div>
         <div className="images">
         <img src={sdv} alt="Saloranta de Vylder portrait" width="500" className="image-home" /> 
         <img src={lottery} alt="Lottery" className="image-lottery" />
         </div>
    </div>
    <Footer /> 
    </>
    
  );
};

export default Homepage;
