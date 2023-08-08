import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/HeadBar";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { Button } from "../components/loginRegister/LoginComponents";
import { getStoreDetail, getStoreEmotion } from "../api/store";
import { useParams } from "react-router-dom";

function StoreAnalistics() {
  const id = useParams("id");
  const [storeData, setStoreData] = useState([]);

  const [store, setStore] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const call = async () => {
      const resp = await getStoreEmotion(id.id);
      console.log(id);
      const response = await getStoreDetail(id.id);
      //   setUserData(res);
      //   //   console.log(res);
      setStoreData(resp);
      setStore(response.data);
      console.log(response);
    };
    call();
  }, []);
  return (
    <div className="ResponsiveBackground">
      <Header content="DJ부스 분석" />
      <h2>{store.storeName} 분석</h2>
      <RadarChart
        cx={200}
        cy={200}
        outerRadius={150}
        width={400}
        height={400}
        data={storeData}
      >
        <PolarGrid stroke="#757575" />
        <PolarAngleAxis dataKey="emotion" stroke="#757575" />
        <PolarRadiusAxis stroke="#757575" />

        <Radar
          name={store.storeName}
          dataKey="count"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
      <Button onClick={() => (window.location.href = `/store/${id.id}`)}>
        DJ부스로 이동하기
      </Button>
      <Navbar to={"/store/create"} />
    </div>
  );
}

export default StoreAnalistics;
