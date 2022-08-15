import axios from "axios";
import { deleteDataPair } from "../Components/DetailPage/ToDoPage";
import { ItemType } from "../types/ItemTypes";
import { GetListData } from "../types/others";

const URL = "https://62f51472ac59075124cae02c.mockapi.io/api/todo/lists/";

export const saveListName = async (
  listName: string,
  listId: number,
  state: boolean
) => {
  try {
    const article = { listName: listName, listState: !state };
    const response: GetListData = await axios.put(URL + listId, article);
    console.log(response);
  } catch (err: any) {
    console.log(err);
  }
};

export const deleteItems = async (deleted: deleteDataPair) => {
  try {
    //   const article = { listName: listName };
    const response: GetListData = await axios.delete(
      URL + deleted.listId + "/items/" + deleted.itemId
    );
    console.log(response);
  } catch (err: any) {
    console.log(err);
  }
};

export const createItems = async (newItem: ItemType): Promise<void> => {
  try {
    const article = {
      itemState: newItem.itemState,
      itemName: newItem.itemName,
      deadline: newItem.deadline,
      itemText: newItem.itemText,
      listId: newItem.listId,
      itemId: 0, // inak to generuje id ktore sa aj opakuju ?!?!
    };
    const response: GetListData = await axios.post(
      URL + newItem.listId + "/items",
      article
    );
    console.log(response);
  } catch (err: any) {
    console.log(err);
  }
};

export const editItems = async (editedItem: ItemType): Promise<void> => {
  try {
    const article = {
      itemId: editedItem.itemId,
      itemState: editedItem.itemState,
      itemName: editedItem.itemName,
      deadline: editedItem.deadline,
      itemText: editedItem.itemText,
      listId: editedItem.listId,
    };

    const response: GetListData = await axios.put(
      URL + editedItem.listId + "/items/" + editedItem.itemId,
      article
    );
    console.log(response);
  } catch (err: any) {
    console.log(err);
  }
};
