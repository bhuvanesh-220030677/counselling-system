// Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: 'pink', position: 'fixed', top: 0 }} elevation={0}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            {/* Link to the Home component */}
            <img src={logo} alt="Logo" width={90} style={{ marginRight: '8px' }} />
            <Typography variant="h7" sx={{ color: '#000000' }}>
              <strong>COUNSELLING AND VISITOR MANAGEMENT SYSTEM</strong>
            </Typography>
          </Link>

          <Tabs
            sx={{ ml: 'auto' }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
            style={{ color: 'white' }}
          >
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/signup"
              label="Sign Up"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/signin"
              label="Sign In"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/councellor"
              label="Add Councellor"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/visitor"
              label="Add Visitor"
            />
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/appointment"
              label="Appointment"
            />
            {/* Add the new tab for the Contact component */}
            <Tab
              sx={{ color: '#000000' }}
              component={NavLink}
              to="/contact"
              label="Contact"
            />
            <Tab LinkComponent={NavLink} to='/fetch-registrations' label='Registrations'/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;