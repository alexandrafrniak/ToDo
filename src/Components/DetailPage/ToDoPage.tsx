import { Grid, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ItemType } from "../../types/ItemTypes";

import { GetListData, GetToDosData } from "../../types/others";
import ToDoItems from "./ToDoItems";
import Box from "@mui/material/Box";

import AddToDoItem from "./AddToDoItem";

import TableSearchBar from "./TableSearchBar";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  createItems,
  deleteItems,
  editItems,
  saveListName,
} from "../../functions/helpFunction";
import { StyledButton, Title, ToDoStack } from "../../theme/customised";

interface LocationState {
  listId: number;
  nameOfTheList: string;
}

export type deleteDataPair = {
  listId: number;
  itemId: number;
};

const ToDoItemPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { listId, nameOfTheList } = location.state as LocationState;
  const url = "https://62f51472ac59075124cae02c.mockapi.io/api/todo/lists/";

  const [itemsSearched, setItemsSearched] = useState<ItemType[]>([]);
  const [items, setItems] = useState<ItemType[]>([]);
  const [deleted, setDeleted] = useState<deleteDataPair[]>([]);
  const [listName, setListName] = useState<string>(nameOfTheList);

  const fetchToDos = async () => {
    try {
      const response: GetToDosData = await axios.get(url + listId + "/items");
      setItems(response.data); //
      setItemsSearched(response.data);
    } catch (err: any) {}
  };

  const fetchList = async () => {
    try {
      const response: GetListData = await axios.get(url + listId);
      setListName(response.data.listName); //
    } catch (err: any) {
      console.log(err);
    }
  };

  function listFinished(items: ItemType[]) {
    return items.some(function (itm) {
      return itm.itemState === false;
    });
  }

  const updateDatabase = (listName: string, allItems: ItemType[]): void => {
    saveListName(listName, listId, listFinished(allItems));

    deleted.map((item, i) => {
      deleteItems(item);
    });

    setDeleted([]);

    items.map((item, i) => {
      item.itemId <= 0 ? createItems(item) : editItems(item);
    });
  };

  const generateid = (): number => {
    const values = items;
    const min = Math.min(...values.map((o) => o.itemId), 0);
    return min < 0 ? min : -1;
  };

  const handleAdd = () => {
    const values = [...items];
    values.push({
      itemId: generateid(),
      itemState: false,
      itemName: "",
      deadline: null,
      itemText: "",
      listId: listId,
    });

    setItems(values);
    setItemsSearched(values);
  };

  useEffect(() => {
    fetchToDos();
    fetchList();
  }, []);

  const changeFilter = (searchItem: ItemType[]): void => {
    setItemsSearched(searchItem);
  };

  const updateRows = (todoS: ItemType[]) => {
    setItems(todoS);
  };

  function getIndex(items: ItemType[], idToSearch: number): number {
    return items.findIndex((obj) => obj.itemId === idToSearch);
  }

  const handleItemDelete = (delItemId: number, delListId: number) => {
    const index = getIndex(items, delItemId);
    const values = [...items];
    if (delItemId > -1) {
      setDeleted((current) => [
        ...current,
        { itemId: delItemId, listId: delListId },
      ]);
    }
    values.splice(index, 1);
    setItems(values);
    setItemsSearched(values);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Item name is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: listName,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateDatabase(values.name, items);
      navigate("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ height: "100%" }}>
        <Title>Your TO-DO</Title>
        <Paper sx={{ minWidth: "90%", align: "center", m: 3, height: "auto" }}>
          <ToDoStack direction="row" spacing={{ xs: 1, sm: 15, md: 40 }}>
            <TextField
              label="List Name"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TableSearchBar toDos={items} changeFilter={changeFilter} />
          </ToDoStack>
          <ToDoItems
            toDos={itemsSearched}
            updateRows={updateRows}
            handleItemDelete={handleItemDelete}
          />
          <Box sx={{ px: 4, py: 1 }}>
            <AddToDoItem handleAdd={handleAdd} />
          </Box>
        </Paper>
      </Box>

      <Grid container justifyContent="flex-end" sx={{ px: 5 }}>
        <StyledButton variant="contained" type="submit">
          Submit
        </StyledButton>
      </Grid>
    </form>
  );
};

export default ToDoItemPage;
