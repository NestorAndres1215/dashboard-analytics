import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  WbSunny as WbSunnyIcon,
  Newspaper as NewspaperIcon,
  CurrencyBitcoin as CurrencyBitcoinIcon,
  AttachMoney as AttachMoneyIcon,
  Analytics as AnalyticsIcon,
} from "@mui/icons-material";
import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
    { text: "Clima", icon: <WbSunnyIcon />, path: "/clima" },
    { text: "Noticias", icon: <NewspaperIcon />, path: "/noticias" },
    { text: "Cripto", icon: <CurrencyBitcoinIcon />, path: "/cripto" },
    { text: "Exchange", icon: <AttachMoneyIcon />, path: "/exchange" },
  ];

  return (
    <div>
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleDrawer}
        sx={{ margin: 1, position: "fixed", top: 8, left: 8, zIndex: 1300 }}
      >
        <MenuIcon sx={{color: "#ffffffff", }}/>
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250, bgcolor: "transparent" }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <Box sx={{ display: "flex", alignItems: "center", padding: "16px", gap: "10px"  }}>
            <AnalyticsIcon fontSize="large" sx={{ color: "#ffffff" }} />
            <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 500 }}>
              Dashboard Analytics
            </Typography>
          </Box>


          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
      
                selected={window.location.pathname === item.path}
              >
                <ListItemIcon sx={{ color: "#000000ff", minWidth: "40px" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "#0c0000ff" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}