import { ChangeEventHandler, ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";

export interface NumberFieldProps {
  testId?: string;
  style?: object;
  className?: string;
  label?: string;
  onChange:
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
}
