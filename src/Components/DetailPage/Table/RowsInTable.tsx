import { Button, IconButton, Stack, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ItemType } from "../../../types/ItemTypes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ItemCheckbox from "./ItemCheckbox";
import ItemName from "./ItemName";
import ItemDate from "./ItemDate";
import ItemTextRow from "./ItemTextRow";

interface Props {
  toDo: ItemType;
  updateRow: (newToDo: ItemType) => void;
  handleItemDelete: (delItemId: number, delListId: number) => void;
}

const RowsInTable: React.FC<Props> = ({
  toDo,
  updateRow,
  handleItemDelete,
}) => {
  const [open, setOpen] = useState(false);

  const handleNameChange = (newItemName: string): void => {
    toDo.itemName = newItemName;
    updateRow(toDo);
  };

  const handleTextChange = (newTextName: string): void => {
    toDo.itemText = newTextName;
    updateRow(toDo);
  };

  const handleDateChange = (newDate: Date): void => {
    toDo.deadline = newDate;
    updateRow(toDo);
  };

  const handleCheckChange = (newCheck: boolean): void => {
    toDo.itemState = newCheck;
    updateRow(toDo);
  };

  return (
    <React.Fragment>
      <TableRow
        key={toDo.itemId}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <ItemCheckbox
          itemState={toDo.itemState}
          handleCheckChange={handleCheckChange}
        />

        <Stack direction="row" spacing={2}>
          <ItemName
            itemName={toDo.itemName}
            handleNameChange={handleNameChange}
          />

          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Stack>
        <ItemDate
          deadline={toDo.deadline}
          handleDateChange={handleDateChange}
        />
        <TableCell align="right">
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => {
              handleItemDelete(toDo.itemId, toDo.listId);
            }}
          />
        </TableCell>
      </TableRow>
      <TableRow key={toDo.itemId + "b"}>
        <ItemTextRow
          text={toDo.itemText}
          state={open}
          handleTextChange={handleTextChange}
        />
      </TableRow>
    </React.Fragment>
  );
};

export default RowsInTable;
