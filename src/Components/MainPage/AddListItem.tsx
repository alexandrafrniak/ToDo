import React from "react";

import AddIcon from "@mui/icons-material/Add";
import ListType from "../../types/ListTypes";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../theme/customised";

const AddListsItem: React.FC = () => {
  const navigate = useNavigate();

  async function AddList() {
    try {
      const { data } = await axios.post<ListType>(
        "https://62f51472ac59075124cae02c.mockapi.io/api/todo/lists"
      );
      navigate("/detail", {
        state: { listName: data.listName, listId: data.listId },
      });
      return data;
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <StyledButton
      variant="contained"
      startIcon={<AddIcon />}
      onClick={() => {
        AddList();
      }}
    >
      Add list
    </StyledButton>
  );
};

export default AddListsItem;
