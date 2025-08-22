import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import ButtonHome from "./ButtonHome";
import "./Header.css";

export default function Header() {
  const [menu1, setMenu1] = useState("");
  const [menu2, setMenu2] = useState("");
  const [menu3, setMenu3] = useState("");
  const [active, setActive] = useState("รับเข้า");

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar active={active} />
      <Sidebar active={active} setActive={setActive} />

      {/* ===== Content ด้านขวา ===== */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box className="menu-container">
            <Box className="menu-row">
          <ButtonHome
            label="คลัง:"
            value={menu1}
            onChange={(e) => setMenu1(e.target.value)}
            options={[
              { value: 1, label: "คลัง 1" },
              { value: 2, label: "คลัง 2" },
              { value: 3, label: "คลัง 3" },
            ]}
          />
        </Box>

        <Box className="menu-row">
          <ButtonHome
            label="บริษัท / โรงพยาบาล:"
            value={menu2}
            onChange={(e) => setMenu2(e.target.value)}
            options={[
              { value: 1, label: "บริษัท / โรงพยาบาล" },
              { value: 2, label: "บริษัท / โรงพยาบาล 2" },
              { value: 3, label: "บริษัท / โรงพยาบาล 3" },
            ]}
          />
        </Box>

        <Box className="menu-row">
          <ButtonHome
            label="สินค้า:"
            value={menu3}
            onChange={(e) => setMenu3(e.target.value)}
            options={[
              { value: 1, label: "สินค้า 1" },
              { value: 2, label: "สินค้า 2" },
              { value: 3, label: "สินค้า 3" },
            ]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
