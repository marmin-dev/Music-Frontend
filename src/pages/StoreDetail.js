import React, { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { getStoreDetail } from "../api/store";
import { useParams } from "react-router-dom";
import StoreDetailDiv from "../components/store/StoreDetailDiv";

const StoreDetail = () => {
  const id = useParams("id");
  const [storeName, setStoreName] = useState("Loadiing...");
  const token = localStorage.getItem("SPOTIFY");
  useEffect(() => {
    // console.log(id);
    const fetch = async () => {
      const response = await getStoreDetail(id.id);
      setStoreName(response.data.storeName);
    };
    fetch();
  });

  return (
    <Responsive>
      <Header content={storeName} />
      <StoreDetailDiv id={id.id} token={token} />
      <Navbar />
    </Responsive>
  );
};

export default StoreDetail;
