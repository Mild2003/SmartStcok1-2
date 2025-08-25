import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "./Header.css";

function Header() {
  const [receiveDate, setReceiveDate] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [active, setActive] = useState("รับเข้า");
  const [menu1, setMenu1] = useState("");
  const [menu2, setMenu2] = useState("");
  const [menu3, setMenu3] = useState("");
  const [boxQty, setBoxQty] = useState("");
  const [pieceQty, setPieceQty] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState("");
  const [vat, setVat] = useState("");
  const [billNo, setBillNo] = useState("");
  const [lotNumber, setLotNumber] = useState("");
  const [autoGen, setAutoGen] = useState(false);
  const [barcode, setBarcode] = useState("");
  const [comment, setComment] = useState("");

  const handleSave = () => {
    const formData = {
      receiveDate,
      expiryDate,
      menu1,
      menu2,
      menu3,
      boxQty,
      pieceQty,
      price,
      discount,
      total,
      vat,
      billNo,
      lotNumber,
      autoGen,
      barcode,
      comment,
    };
    console.log("📌 บันทึกข้อมูล:", formData);
  };

  const handleClear = () => {
    setReceiveDate(null);
    setExpiryDate(null);
    setMenu1("");
    setMenu2("");
    setMenu3("");
    setBoxQty("");
    setPieceQty("");
    setPrice("");
    setDiscount("");
    setTotal("");
    setVat("");
    setBillNo("");
    setLotNumber("");
    setAutoGen(false);
    setBarcode("");
    setComment("");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar active={active} setActive={setActive} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, position: "relative" }}>
        <Topbar active={active} />
        <Toolbar />

        <div className="menu-container">
          {/* วันที่รับ */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="วันที่รับ"
              value={receiveDate}
              onChange={(newValue) => setReceiveDate(newValue)}
            />
          </LocalizationProvider>

          {/* คลัง */}
          <TextField select label="คลัง" value={menu1} onChange={(e) => setMenu1(e.target.value)}>
            <MenuItem value="1">คลัง 1</MenuItem>
            <MenuItem value="2">คลัง 2</MenuItem>
            <MenuItem value="3">คลัง 3</MenuItem>
          </TextField>

          {/* บริษัท / โรงพยาบาล */}
          <TextField
            select
            label="บริษัท/โรงพยาบาล"
            value={menu2}
            onChange={(e) => setMenu2(e.target.value)}
          >
            <MenuItem value="1">บริษัท A</MenuItem>
            <MenuItem value="2">บริษัท B</MenuItem>
            <MenuItem value="3">โรงพยาบาล C</MenuItem>
            <MenuItem value="4">โรงพยาบาล D</MenuItem>
          </TextField>

          {/* สินค้า */}
          <TextField select label="สินค้า" value={menu3} onChange={(e) => setMenu3(e.target.value)}>
            <MenuItem value="1">สินค้า 1</MenuItem>
            <MenuItem value="2">สินค้า 2</MenuItem>
            <MenuItem value="3">สินค้า 3</MenuItem>
          </TextField>

          {/* จำนวน */}
          <div className="quantity-group">
            <TextField label="จำนวน/กล่อง" value={boxQty} onChange={(e) => setBoxQty(e.target.value)} />
            <TextField label="จำนวน/ชิ้น" value={pieceQty} onChange={(e) => setPieceQty(e.target.value)} />
          </div>

          {/* ราคา */}
          <div className="pricing-group">
            <TextField label="ราคา/กล่อง" value={price} onChange={(e) => setPrice(e.target.value)} />
            <TextField label="ส่วนลด" value={discount} onChange={(e) => setDiscount(e.target.value)} />
            <TextField label="ราคารวม" value={total} onChange={(e) => setTotal(e.target.value)} />
            <TextField label="VAT" value={vat} onChange={(e) => setVat(e.target.value)} />
          </div>

          <TextField label="เลขที่บิล/ใบรับ" value={billNo} onChange={(e) => setBillNo(e.target.value)} />
          <TextField label="Lot Number" value={lotNumber} onChange={(e) => setLotNumber(e.target.value)} />

          {/* Auto gen และ วันหมดอายุ */}
          <div className="expiry-row">
            <FormControlLabel
              control={<Checkbox checked={autoGen} onChange={(e) => setAutoGen(e.target.checked)} />}
              label="Auto gen"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="วันหมดอายุ"
                value={expiryDate}
                onChange={(newValue) => setExpiryDate(newValue)}
              />
            </LocalizationProvider>
          </div>

          <TextField label="Barcode สินค้า" value={barcode} onChange={(e) => setBarcode(e.target.value)} />
          <TextField label="Comment *" value={comment} onChange={(e) => setComment(e.target.value)} />

          {/* ปุ่ม Save / Clear */}
          <div className="button-container">
            <Button className="save-button" startIcon={<SaveIcon />} onClick={handleSave} variant="contained">
              Save
            </Button>
            <Button className="clear-button" startIcon={<ClearIcon />} onClick={handleClear} variant="contained">
              Clear
            </Button>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Header;
