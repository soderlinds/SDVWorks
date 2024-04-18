import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import { useNFTContext } from '../context/NFTContext';
import LoginLogoutButton from '../components/LoginLogoutButton';
import '../styles/_sidebar.sass';
import CustomIcon from '../images/person_icon.jpg'; 

const Sidebar = () => {
  const { user } = usePrivy();
  const contractCreatorAddress = '0x2dCb11EeD42F6199658B66BC45D24470CcE2B710';
  const isAdmin = user && user.wallet && user.wallet.address.toLowerCase() === contractCreatorAddress.toLowerCase();
  const isLoggedIn = user;
  const hasFarcasterAccount = user && user.farcaster;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="sidebar">
        <div className="branding">
          <span>SDV WORKS</span>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
      <img src={CustomIcon} alt="Custom Icon" /> 
      </button>
      <nav
        className={`nav ${isMenuOpen ? 'open' : ''}`}
        onMouseLeave={closeMenu} 
      >
        <ul className="menu">
          <li><NavLink to="/" activeClassName="active" onClick={closeMenu}>_HOME</NavLink></li>
          {isLoggedIn && <li><NavLink to="/welcome" activeClassName="active" onClick={closeMenu}>_WELCOME</NavLink></li>}
          <li><NavLink to="/quests" activeClassName="active" onClick={closeMenu}>_QUESTS</NavLink></li>
          <li><NavLink to="/ai" activeClassName="active" onClick={closeMenu}>_AI</NavLink></li>
          <li><NavLink to="/market" activeClassName="active" onClick={closeMenu}>_MARKET</NavLink></li>
          <li><NavLink to="/rewards" activeClassName="active" onClick={closeMenu}>_NFTs</NavLink></li>
          <li><NavLink to="/leaderboard" activeClassName="active" onClick={closeMenu}>_LEADERBOARD</NavLink></li>
          {hasFarcasterAccount && <li><NavLink to="/farcaster" activeClassName="active" onClick={closeMenu}>_FARCASTER</NavLink></li>}
          {isLoggedIn && <li><NavLink to="/mywallet" activeClassName="active" onClick={closeMenu}>_MY COLLECTION</NavLink></li>}
          {isAdmin && <li><NavLink to="/admin" activeClassName="active" onClick={closeMenu}>_ADMIN</NavLink></li>}
        </ul>
        <div className="connected">
          <LoginLogoutButton size="small" />
         
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Sidebar;
