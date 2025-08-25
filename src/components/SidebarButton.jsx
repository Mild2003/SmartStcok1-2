import React from "react";
import Button from "@mui/material/Button";
import "./SidebarButton.css";

export default function SidebarButton({ children, onClick }) {
  return (
    <Button
      className="sidebar-btn"
      variant="contained"
      onClick={onClick}
      fullWidth
    >
      {children}
    </Button>
  );
}
