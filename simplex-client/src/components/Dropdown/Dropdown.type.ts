import { SelectChangeEvent } from "@mui/material";

export interface DropdownProps {
  style?: object;
  className?: string;
  label?: string;
  data: string[];
  value: string;
  onChange(event: SelectChangeEvent<string>, child: React.ReactNode): void;
}
