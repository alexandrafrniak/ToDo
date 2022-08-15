import { Collapse, Stack, TableCell, TextField } from "@mui/material";
import { Div } from "../../../theme/customised";

interface Props {
  text: string;
  state: boolean;
  handleTextChange: (newItemText: string) => void;
}

const ItemTextRow: React.FC<Props> = ({ text, state, handleTextChange }) => {
  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={state} timeout="auto" unmountOnExit>
        <Stack spacing={2}>
          <Div>{"Notes"}</Div>
          <TextField
            multiline
            style={{ width: "50%" }}
            InputProps={{
              rows: 3,
            }}
            defaultValue={text}
            onBlur={(event) => handleTextChange(event.target.value)}
          />
        </Stack>
      </Collapse>
    </TableCell>
  );
};

export default ItemTextRow;
