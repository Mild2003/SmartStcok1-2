import React from "react";
import TextField from "@mui/material/TextField";

export default function TextFieldComponent({
  label,
  value,
  onChange,
  width = "50ch", 
  height = "40px", 
  size = "small", 
}) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      size={size}
      sx={{
        m: 1,
        width: width,
        position: "flex-start",
        gap: 2,
        p: 2,
        "& .MuiInputBase-root": {
          height: height, 
        },
      }}
    />
  );
}
