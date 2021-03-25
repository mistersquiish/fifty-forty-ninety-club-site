import React from 'react';
import Box from '@material-ui/core/Box';

const Menu = () => {


  return (
    <Box display="flex" width="100%" flexDirection="row">
      <div className="menu-container">
      <input id="toggle" type="checkbox"/>


      
      <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle"></span>
      </label>
      <nav className="nav">
          <a className="nav-item" href="https://504090club.info/">Home</a>
          <a className="nav-item" href="https://504090club.info/members">50-40-90 Club</a>
          <a className="nav-item" href="https://504090club.info/contact">Contact</a>
      </nav>
      
      </div>

    </Box>

  )
}

export default Menu;