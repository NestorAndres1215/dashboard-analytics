import React from "react";
import { AppBar, Toolbar, Typography, Avatar, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./Header.css";

export default function Header() {
  return (
    <AppBar position="fixed" className="header" sx={{ zIndex: 1201 }}>
      <Toolbar>
<Typography
  variant="h6"
  noWrap
  component="div"
  sx={{ flexGrow: 1, fontWeight: 500, ml: 3, mt: -1 }}
>
  Dashboard Analytics
</Typography>


        <IconButton color="inherit">
          <Avatar  sx={{ bgcolor: "#3b82f6"}}>
            <AccountCircle />
          </Avatar>
          <Typography variant="body1" sx={{ ml: 1, display: { xs: "none", sm: "block" } }}>
            User
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}