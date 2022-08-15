import { Checkbox, TableCell } from "@mui/material";
import { useState } from "react";
import CircleChecked from "@mui/icons-material/CheckCircleOutline";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";

interface Props {
  itemState: boolean;
  handleCheckChange: (newItemCheck: boolean) => void;
}

const ItemCheckbox: React.FC<Props> = ({ itemState, handleCheckChange }) => {
  const [state, setState] = useState(itemState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
    handleCheckChange(event.target.checked);
  };

  return (
    <TableCell>
      <Checkbox
        icon={<CircleUnchecked />}
        checkedIcon={<CircleChecked />}
        checked={state}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event);
        }}
        inputProps={{ "aria-label": "controlled" }}
      />
    </TableCell>
  );
};

export default ItemCheckbox;
