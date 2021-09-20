import { ChangeEventHandler, ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";

export interface NumberFieldProps {
  style?: object;
  className?: string;
  label?: string;
  onChange:
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
}
