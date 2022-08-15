import React, { useEffect, useState } from "react";

import axios from "axios";
import ListType from "../../types/ListTypes";
import { Box, List, Paper } from "@mui/material";
import ToDoListsItem from "./ListTable";
import AddListItem from "./AddListItem";
import { GetListsData } from "../../types/others";
import { ListBox, Title } from "../../theme/customised";

const ListsPage: React.FC = () => {
  const [toDoList, setToDoList] = useState<ListType[]>([]);

  const fetchLists = async () => {
    try {
      const response: GetListsData = await axios.get(
        "https://62f51472ac59075124cae02c.mockapi.io/api/todo/lists"
      );
      setToDoList(response.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  const deleteList = async (listId: number) => {
    const url = "https://62f51472ac59075124cae02c.mockapi.io/api/todo/lists/";
    try {
      const response: GetListsData = await axios.delete(url + listId);
      setToDoList(response.data);

      const filtered = toDoList.filter((list) => {
        return list.listId !== listId;
      });
      setToDoList(filtered);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      <Title>Your TO-DO</Title>
      <Paper sx={{ minWidth: "90%", align: "center", m: 3, height: "auto" }}>
        <ListBox style={{ height: 400, overflow: "auto" }}>
          <nav aria-label="main mailbox folders">
            {toDoList.map((toDoLis) => {
              return (
                <List key={toDoLis.listId}>
                  <ToDoListsItem item={toDoLis} handleDelete={deleteList} />
                </List>
              );
            })}
          </nav>
        </ListBox>
        <Box sx={{ px: 4, py: 1 }}>
          <AddListItem />
        </Box>
      </Paper>
    </Box>
  );
};

export default ListsPage;
