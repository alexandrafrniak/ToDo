import { StyledButton } from "../../theme/customised";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  handleAdd: () => void;
}

const AddToDoItem: React.FC<Props> = ({ handleAdd }) => {
  return (
    <StyledButton
      // style={{ justifyContent: "left" }}
      variant="contained"
      startIcon={<AddIcon />}
      onClick={() => {
        handleAdd();
      }}
    >
      Add Item
    </StyledButton>
  );
};

export default AddToDoItem;
