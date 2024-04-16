import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import { useNFTContext } from '../context/NFTContext';
import LoginLogoutButton from '../components/LoginLogoutButton';
import '../styles/_sidebar.sass';
import CustomIcon from '../images/person_icon.jpg'; 

const Sidebar = () => {
  const { renderUserNFTs } = useNFTContext();
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
          <li><NavLink to="/" activeClassName="active" onClick={closeMenu}>HOME</NavLink></li>
          <li><NavLink to="/quests" activeClassName="active" onClick={closeMenu}>QUESTS</NavLink></li>
          <li><NavLink to="/ai" activeClassName="active" onClick={closeMenu}>AI</NavLink></li>
          <li><NavLink to="/market" activeClassName="active" onClick={closeMenu}>MARKET</NavLink></li>
          <li><NavLink to="/rewards" activeClassName="active" onClick={closeMenu}>NFTs</NavLink></li>
          <li><NavLink to="/leaderboard" activeClassName="active" onClick={closeMenu}>LEADERBOARD</NavLink></li>
          {hasFarcasterAccount && <li><NavLink to="/farcaster" activeClassName="active" onClick={closeMenu}>FARCASTER</NavLink></li>}
          {isLoggedIn && <li><NavLink to="/mywallet" activeClassName="active" onClick={closeMenu}>MY COLLECTION</NavLink></li>}
          {isAdmin && <li><NavLink to="/admin" activeClassName="active" onClick={closeMenu}>ADMIN</NavLink></li>}
        </ul>
        <div className="connected">
          <LoginLogoutButton size="small" />
          <span className="nft">{renderUserNFTs()}</span>
         
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Sidebar;
