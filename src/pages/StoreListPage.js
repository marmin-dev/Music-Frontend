import React from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import StoreList from "../components/store/StoreList";

const StoreListPage = () => {
  return (
    <Responsive>
      <Header content={"가게목록"} />
      <StoreList />
      <Navbar />
    </Responsive>
  );
};
export default StoreListPage;
