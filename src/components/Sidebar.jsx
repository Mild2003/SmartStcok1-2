import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Sidebar.css";

const drawerWidth = 100;
const menus = ["รับเข้า", "ตัดออก", "ยืม - คืน", "ย้าย", "ตั้งค่า"];

export default function Sidebar({ active, setActive }) {
  return (
    <Drawer className="custom-sidebar"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {menus.map((text) => (
          <ListItem
            button
            key={text}
            selected={active === text}
            onClick={() => setActive(text)}
            className={active === text ? "sidebar-item active" : "sidebar-item"}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
