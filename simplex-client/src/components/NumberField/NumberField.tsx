import React, { useState } from "react";
import { InputLabel, TextField } from "@mui/material";
import { NumberFieldProps } from "./NumberField.type";

const NumberField = ({
  testId,
  style,
  className,
  label,
  onChange
}: NumberFieldProps) => {
  const [_value, setValue] = useState("");
  const onChangeBefore = ({ target: { validity, value }, ...rest }: any) => {
    const regexp = /^\d+(\.\d{1,2})?$/;
    if ((value === "" || regexp.test(value)) && onChange) {
      setValue(value);
      onChange({ target: { validity, value }, ...rest });
      return;
    }

    setValue(_value);
  };

  return (
    <>
      <InputLabel id="text-field-label">{label}</InputLabel>
      <TextField
        type="number"
        value={_value}
        style={style}
        className={className}
        onChange={onChangeBefore}
        inputProps={{ "data-testid": testId }}
      />
    </>
  );
};

export default NumberField;
