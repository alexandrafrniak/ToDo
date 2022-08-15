import React from "react";
import { Route, Routes } from "react-router-dom";
import ToDoLists from "./MainPage/ListsPage";
import ToDoPage from "./DetailPage/ToDoPage";
import { Wrapper } from "../theme/customised";

const Pages: React.FC = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<ToDoLists />} />
        <Route path="/detail" element={<ToDoPage />} />
      </Routes>
    </Wrapper>
  );
};

export default Pages;
