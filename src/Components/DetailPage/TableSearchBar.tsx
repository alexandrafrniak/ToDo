import { TextField } from "@mui/material";
import { useState } from "react";
import { ItemType } from "../../types/ItemTypes";

interface Props {
  toDos: ItemType[];
  changeFilter: (searchItem: ItemType[], allItems: ItemType[]) => void;
}

const TableSearchBar: React.FC<Props> = ({ toDos, changeFilter }) => {
  const [searched, setSearched] = useState<string>();

  const requestSearch = (e: any) => {
    const filteredRows = toDos.filter((row) => {
      return row.itemName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    changeFilter(filteredRows, toDos);
    setSearched(e.target.value);
  };

  return <TextField label="Search" value={searched} onChange={requestSearch} />;
};

export default TableSearchBar;
