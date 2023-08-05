import React, { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { styled } from "styled-components";
import { getUserRef } from "../api/user";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const BodyDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextP = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

function MyInfo() {
  const [like, setLike] = useState("");
  const username = localStorage.getItem("username");
  const [data, setData] = useState([]);

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

  return (
    <div className="ResponsiveBackground">
      <Header content={"@" + username + "님의 취향"} />
      <BodyDiv>
        <TextP>{username}님의 음악 취향을 분석해보았습니다</TextP>
        <TextP>선호하는 음악 분위기는 {like}입니다</TextP>
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
            dataKey="count"
            stroke="rgba(26, 227, 204, 1)"
            fill="rgba(26, 227, 204, 1)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </BodyDiv>
      <Navbar to={"/store/create"} />
    </div>
  );
}

export default MyInfo;
