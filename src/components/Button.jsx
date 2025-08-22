import Button from "@mui/material/Button";
import "./SidebarButton.css"; // import css

export default function SidebarButton({ children }) {
  return (
    <Button className="Sidebar-btn" variant="contained">
      {children}
    </Button>
  );
  
}
