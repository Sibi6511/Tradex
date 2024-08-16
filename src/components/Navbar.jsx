import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Typography, Box, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import { CurrencyBitcoinSharp, Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';

const Sidebar = () => {
  const linkStyle = { textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto Slab, serif' };
  const listItemStyle = { fontFamily: 'Roboto Slab, serif', color: 'white' };

  const [isOpen, setIsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [analysesOpen, setAnalysesOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleLearnClick = () => {
    setLearnOpen(!learnOpen);
  };

  const handleAnalysesClick = () => {
    setAnalysesOpen(!analysesOpen);
  };

  const menuList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      style={{ backgroundColor: '#200E3A', height: '100%', color: 'white' }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <CurrencyBitcoinSharp style={{ color: 'white' }} />
          </ListItemIcon>
          <Typography variant="h6" component="div" style={{ fontFamily: 'Roboto Slab, serif' }}>
            <Link to="/" style={linkStyle}>
              Tradex
            </Link>
          </Typography>
        </ListItem>
        <ListItem button onClick={handleLearnClick} style={listItemStyle}>
          <ListItemText primary="Learn" />
          {learnOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={learnOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={{ paddingLeft: 32 }}>
              <Link to="/beginner" style={linkStyle}>
                <ListItemText primary="Beginner" />
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: 32 }}>
              <Link to="/intermediate" style={linkStyle}>
                <ListItemText primary="Intermediate" />
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: 32 }}>
              <Link to="/expert" style={linkStyle}>
                <ListItemText primary="Expert" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleAnalysesClick} style={listItemStyle}>
          <ListItemText primary="Analyses" />
          {analysesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={analysesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={{ paddingLeft: 32 }}>
              <Link to="/chart" style={linkStyle}>
                <ListItemText primary="Chart" />
              </Link>
            </ListItem>
            <ListItem button style={{ paddingLeft: 32 }}>
              <Link to="/data" style={linkStyle}>
                <ListItemText primary="Data" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button style={listItemStyle}>
          <Link to="/trade" style={linkStyle}>
            <ListItemText primary="Trade" />
          </Link>
        </ListItem>
        <ListItem button style={listItemStyle}>
          <Link to="/about" style={linkStyle}>
            <ListItemText primary="About" />
          </Link>
        </ListItem>
        <ListItem button style={listItemStyle}>
          <Link to="/login" style={linkStyle}>
            <ListItemText primary="Login" />
          </Link>
        </ListItem>
        <ListItem button style={listItemStyle}>
          <Link to="/signup" style={linkStyle}>
            <ListItemText primary="Signup" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        {menuList()}
      </Drawer>
    </div>
  );
};

export default Sidebar;
