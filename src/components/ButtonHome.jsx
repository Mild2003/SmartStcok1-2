import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function ButtonHome({ label, value, onChange, options }) {
  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
