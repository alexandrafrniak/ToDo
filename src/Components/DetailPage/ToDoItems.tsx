import { Box, Paper, Table, TableBody, TableContainer } from "@mui/material";

import { ItemType } from "../../types/ItemTypes";

import React from "react";
import RowsInTable from "./Table/RowsInTable";

interface Props {
  toDos: ItemType[];
  updateRows: (todoS: ItemType[]) => void;
  handleItemDelete: (delItemId: number, delListId: number) => void;
}

const ToDoItems: React.FC<Props> = ({
  toDos,
  updateRows,
  handleItemDelete,
}) => {
  const updateRow = (newToDo: ItemType) => {
    updateRows(toDos);
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{ height: 400, overflow: "auto" }}
      >
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableBody>
            {toDos.map((toDo: ItemType) => (
              <RowsInTable
                key={toDo.itemId + "c"}
                toDo={toDo}
                updateRow={updateRow}
                handleItemDelete={handleItemDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ToDoItems;
