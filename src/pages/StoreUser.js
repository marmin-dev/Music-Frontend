import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Header from "../components/common/HeadBar";
import { getUserRef } from "../api/user";
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
import { styled } from "styled-components";

const TextP = styled.p`
  color: lightgray;
`;

function StoreUser() {
  const id = useParams("id");
  const [storeData, setStoreData] = useState([]);
  const username = localStorage.getItem("username");
  const [userData, setUserData] = useState([]);
  const [store, setStore] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const call = async () => {
      const res = await getUserRef();
      const resp = await getStoreEmotion(id.id);
      console.log(id);
      const response = await getStoreDetail(id.id);
      //   setUserData(res);
      //   //   console.log(res);
      //   setStoreData(resp);
      setStore(response.data);
      console.log(response);
      const countByEmotion = {};
      res.forEach((item) => {
        const { emotion, count } = item;
        countByEmotion[emotion] = count;
      });

      // 두 번째 배열을 순회하면서 countByEmotion에 저장된 값을 이용해 countB를 추가합니다.
      const result = resp.map((item) => {
        const { emotion, count } = item;
        const countB = countByEmotion[emotion] || 0; // 해당 emotion이 없는 경우 0으로 초기화
        return {
          ...item,
          countB,
        };
      });
      setData(result);
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
        data={data}
      >
        <PolarGrid stroke="#757575" />
        <PolarAngleAxis dataKey="emotion" stroke="#757575" />
        <PolarRadiusAxis stroke="#757575" />
        <Radar
          name={username}
          dataKey="countB"
          stroke="rgba(26, 227, 204, 1)"
          fill="rgba(26, 227, 204, 1)"
          fillOpacity={0.6}
        />
        <Radar
          name={store.storeName}
          dataKey="count"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
      <TextP>
        민트색: {username}님 분석, 빨간색: {store.storeName} 부스 분석
      </TextP>
      <Button onClick={() => (window.location.href = `/store/${id.id}`)}>
        DJ부스로 이동하기
      </Button>
      <Navbar to={"/store/create"} />
    </div>
  );
}

export default StoreUser;
