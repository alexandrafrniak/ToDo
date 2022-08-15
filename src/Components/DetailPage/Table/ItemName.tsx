import { Input, TableCell } from "@mui/material";

interface Props {
  itemName: string;
  handleNameChange: (newItemName: string) => void;
}

const ItemName: React.FC<Props> = ({ itemName, handleNameChange }) => {
  return (
    <TableCell>
      <Input
        placeholder="What to do?"
        defaultValue={itemName}
        onBlur={(event) => handleNameChange(event.target.value)}
      />
    </TableCell>
  );
};

export default ItemName;
