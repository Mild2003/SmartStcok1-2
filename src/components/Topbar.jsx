import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Topbar.css";

export default function Topbar({ active }) {
  return (
    <AppBar className="topbar-appbar"
      position="fixed"
      color="transparent" // ป้องกัน MUI override สี
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}  // อยู่เหนือ Drawer
    >
      <Toolbar className="topbar-toolbar">
        <Typography variant="h6" className="topbar-left-title">
          Smart Stock
        </Typography>
        <Typography variant="h6" className="topbar-center-title">
          {active}
        </Typography>
        <Box className="topbar-admin-container" display="flex" alignItems="center">
          <AccountCircleIcon sx={{ mr: 1 }} />
          <Typography color="inherit">
            Admin
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
