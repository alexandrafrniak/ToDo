import React from "react";

import {
  Button,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import ListType from "../../types/ListTypes";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

interface Props {
  item: ListType;
  handleDelete: (listId: number) => void;
}

const ListsTable: React.FC<Props> = ({ item, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2}>
      <ListItem
        onClick={() => {
          navigate("/detail", {
            state: { listId: item.listId, nameOfTheList: item.listName },
          });
        }}
      >
        <ListItemButton>
          <ListItemText primary={item.listName} />
          {item.listState === true ? <CheckCircleIcon /> : <CircleIcon />}
        </ListItemButton>
      </ListItem>
      <Button
        startIcon={<DeleteIcon />}
        onClick={() => {
          handleDelete(item.listId);
        }}
      />
    </Stack>
  );
};

export default ListsTable;
