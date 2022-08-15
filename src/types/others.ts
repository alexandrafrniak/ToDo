import { ItemType } from "./ItemTypes";
import ListType from "./ListTypes";

export type GetListsData = {
  data: ListType[];
};

export type GetListData = {
  data: ListType;
};

export type GetToDosData = {
  data: ItemType[];
};
