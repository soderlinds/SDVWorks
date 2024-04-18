import React from 'react'
import LoggedInScreen from '../pages/LoggedInScreen';
import Footer from '../components/Footer';
import '../styles/_welcome.sass';

const Welcome = () => {
  return (
    <>
    <div className="welcome-wrapper">
<div>
    Welcome to SDV Loyalty Group.
    We're happy you're here. We're starting slowly and intentionally, prioritizing hands-on support and celebration of quality creative work. 
    
    More info to come.</div>
    <LoggedInScreen />
    <Footer />
    </div>
    </>
  )
}

export default Welcome