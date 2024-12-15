import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {FC, useId} from "react";

interface SelectBoxProps {
  label: string;
  values: number[];
  value: number;
  onValueChanged: (value: number) => void;
}

export const SelectBox: FC<SelectBoxProps> = ({value, values, label, onValueChanged}) => {
  const id = useId();
  const labelId = `${id}-select-box-label`;

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        value={value}
        label={label}
        onChange={(e) => onValueChanged(e.target.value as number)}
      >
        {values.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
}