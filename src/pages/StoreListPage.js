import React from "react";
import { Responsive } from "../components/Responsive";
import Navbar from "../components/common/Navbar";
import StoreList from "../components/store/StoreList";
import HeaderPlus from "../components/common/HeaderPlus";

const StoreListPage = () => {
  return (
    <Responsive>
      <HeaderPlus content={"가게목록"} type={true} />
      <StoreList />
      <Navbar to={"/store/create"} />
    </Responsive>
  );
};
export default StoreListPage;
