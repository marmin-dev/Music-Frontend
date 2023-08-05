import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/HeadBar";
import { getUserRef } from "../api/user";
import { getRefStore } from "../api/store";
import { BodyDiv } from "../components/common/Divs";
import StoreListItem from "../components/store/StoreListItem";
import StoreRefItem from "../components/store/StoreRefItem";

function RefStorePage() {
  const [like, setLike] = useState("");
  const username = localStorage.getItem("username");
  const [data, setData] = useState([]);
  //   const [emotion, setEmotion] = useState("");
  const [storeList, setStoreList] = useState([]);
  useEffect(() => {
    const call = async () => {
      const res = await getUserRef();
      setData(res);
      console.log(res);
      let maxCount = 0;
      let maxEmotion = "";

      res.forEach((item) => {
        if (item.count > maxCount) {
          maxCount = item.count;
          maxEmotion = item.emotion;
          setLike(maxEmotion);
        }
      });
    };
    call();
  }, []);

  useEffect(() => {
    const getRef = async () => {
      if (like === "신남") {
        const response = await getRefStore("joy");
        setStoreList(response);
      } else if (like === "화남") {
        const response = await getRefStore("anger");
        setStoreList(response);
      } else if (like === "슬픔") {
        const response = await getRefStore("sadness");
        setStoreList(response);
      } else if (like === "평온") {
        const response = await getRefStore("pleasure");
        setStoreList(response);
      }
    };
    getRef();
  }, [like]);

  return (
    <div className="ResponsiveBackground">
      <Header content={"DJ부스 추천받기"} />
      <BodyDiv>
        {storeList.map((item) => (
          <StoreRefItem store={item} key={item.id} />
        ))}
      </BodyDiv>
      <Navbar to={"/store/create"} />
    </div>
  );
}

export default RefStorePage;
