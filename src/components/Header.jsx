import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField"; // ✅ import ให้ถูก
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import ButtonHome from "./ButtonHome";
import ButtonHome2 from "./ButtonHome2";

import "./Header.css";

export default function Header() {
  const [menu1, setMenu1] = useState("");
  const [menu2, setMenu2] = useState("");
  const [menu3, setMenu3] = useState("");
  const [active, setActive] = useState("รับเข้า");
  const [inputValue, setInputValue] = useState("");

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar active={active} />
      <Sidebar active={active} setActive={setActive} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, position: "relative" }}>
        <Toolbar />

        <Box
          sx={{
            position: "absolute",
            top: -150,
            left: -620,
          }}
        >
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

        <Box
          sx={{
            position: "absolute",
            top: -80,
            left: -620,
          }}
        >
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

        <Box
          sx={{
            position: "absolute",
            top: -10,
            left: -620,
          }}
        >
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
        <Box
          sx={{
            position: "absolute",
            top: 45,
            left: -635,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="จำนวน / กล่อง"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 45,
            left: -385,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="จำนวน / ชิ้น"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 117,
            left: -635,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="ราคา / กล่อง"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 117,
            left: -385,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="ส่วนลด"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 117,
            left: -135,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="ราคารวม"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",

            top: 117,
            left: 115,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="VAT"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 189,
            left: -635,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="เลขที่บิล / ใบรับ"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>
         <Box
          sx={{
            position: "absolute",
            top: 261,
            left: -635,
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="LotNumber"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            height="50px"
            size="medium"
          />
        </Box>
      </Box>
    </Box>
  );
}
