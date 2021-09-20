import React from "react";
import { Select, MenuItem, InputLabel, OutlinedInput } from "@mui/material";

import { DropdownProps } from "./Dropdown.type";

const Dropdown = ({
  style,
  className,
  label,
  data,
  value,
  onChange
}: DropdownProps) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  return (
    <>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        style={style}
        className={className}
        id="dropdown"
        value={value}
        onChange={onChange}
        MenuProps={MenuProps}
      >
        {data.map((item: string) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
