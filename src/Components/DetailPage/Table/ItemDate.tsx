import { TableCell, TextField } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

interface Props {
  deadline: Date | null;
  handleDateChange: (newDate: Date) => void;
}

const ItemDate: React.FC<Props> = ({ deadline, handleDateChange }) => {
  const [itemDeadline, setItemDeadline] = useState(deadline);

  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      setItemDeadline(newValue);
      handleDateChange(newValue);
    }
  };

  return (
    <TableCell>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {" "}
        <DateTimePicker
          label="Finish by"
          value={itemDeadline}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </TableCell>
  );
};

export default ItemDate;
