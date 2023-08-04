import React, { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import Navbar from "../components/common/Navbar";
import { getStoreDetail } from "../api/store";
import { useParams } from "react-router-dom";
import { DetailBodyDiv } from "../components/common/Divs";
import SpotifyPlay from "../components/store/SpotifyPlay";
import HeaderPlus from "../components/common/HeaderPlus";
import { ModalBtn, UserDeleteModal } from "../components/mypage/MyPageStyle";
import { getStoryList } from "../api/story";
import StoryList from "../components/story/StoryList";
import { spotifyApi } from "../api/spotifyApi";

const StoreDetail = () => {
  const id = useParams("id");
  const [storeName, setStoreName] = useState("Loadiing...");
  const token = localStorage.getItem("SPOTIFY");
  const [modal, setModal] = useState(false);
  const [stories, setStories] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [username, setUsername] = useState("");
  const [shuffle, setShuffle] = useState(1);
  // -----------------------------------------------------
  useEffect(() => {
    // console.log(id);
    const fetch = async () => {
      const response = await getStoreDetail(id.id);
      setStoreName(response.data.storeName);
      setUsername(response.data.username);
    };
    const fetchListData = async () => {
      const response = await getStoryList(id.id);
      setStories(response);
      const newPlayList = response.map((song) => `spotify:track:${song.uri}`);
      setPlayList((prevPlayList) => prevPlayList.concat(newPlayList));
      setShuffle(response);
    };
    fetch();
    fetchListData();
  }, []);

  useEffect(() => {
    const shuffleThat = async () => {
      await shuffleList();
    };
    // console.log("일어난다");
    if (stories.length > 2) {
      // console.log("일어나지 않는다");
      shuffleThat();
    }
  }, [shuffle]);

  const clickMenu = () => {
    setModal(true);
  };
  // > ================= algorithm =============================
  function combineSubsets(subsets, distances) {
    const combinedSubset = [];
    subsets.forEach((subset, index) => {
      console.log(subset);
      const sortedSubset = [];
      if (subset.length > 1) {
        distances[index].forEach((distanceObj) => {
          sortedSubset.push(distanceObj.node1);
          sortedSubset.push(distanceObj.node2);
        });
      } else {
        sortedSubset.push(subset[0]);
      }

      combinedSubset.push(...sortedSubset);
    });

    // 중복 제거를 위해 Set을 사용하여 유니크한 노드만 남기고 다시 배열로 변환
    const uniqueCombinedSubset = Array.from(new Set(combinedSubset));
    // console.log(combinedSubset);
    // console.log(uniqueCombinedSubset);
    return uniqueCombinedSubset;
  }

  function euclideanDistance(node1, node2) {
    const keysToUse = [
      "energy",
      "valence",
      "key",
      "acousticness",
      "liveness",
      "loudness",
      "speechiness",
      "tempo",
      "danceability",
    ];

    const sumOfSquares = keysToUse.reduce((sum, key) => {
      return sum + Math.pow(node1[key] - node2[key], 2);
    }, 0);

    return Math.sqrt(sumOfSquares);
  }

  function getAllPairsDistances(nodes) {
    const distances = [];
    for (let i = 0; i < nodes.length + 1; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = euclideanDistance(nodes[i], nodes[j]);
        distances.push({
          node1: nodes[i],
          node2: nodes[j],
          distance: distance,
        });
      }
    }

    console.log(distances);
    return distances;
  }

  const shuffleList = async () => {
    const getResponse = async (song) => {
      const response = await spotifyApi.getAudioFeaturesForTrack(song.uri);
      // console.log(response);
      return {
        energy: response.energy,
        valence: response.valence,
        key: response.key,
        acousticness: response.acousticness,
        liveness: response.liveness,
        loudness: response.loudness,
        speechiness: response.speechiness,
        tempo: response.tempo,
        danceability: response.danceability,
      };
    };
    const updatedSongs = await Promise.all(
      stories.map((song) => getResponse(song))
    );

    // 응답을 원래 노래와 매핑하여 energy와 valence 속성을 추가
    const updatedSongsWithAttributes = updatedSongs.map((response, index) => {
      return {
        ...stories[index],
        energy: response.energy,
        valence: response.valence,
        key: response.key,
        acousticness: response.acousticness,
        liveness: response.liveness,
        loudness: response.loudness,
        speechiness: response.speechiness,
        tempo: response.tempo,
        danceability: response.danceability,
      };
    });

    const subsets = [];

    for (let i = 0; i < updatedSongsWithAttributes.length; i += 5) {
      const subset = updatedSongsWithAttributes.slice(i, i + 5);
      subsets.push(subset);
      console.log(subsets);
    }

    // 각 서브셋에 대해 모든 노드 간의 거리를 계산하여 distances 배열에 저장
    const distances = subsets.map((subset) => getAllPairsDistances(subset));

    // distances 배열을 거리를 기준으로 정렬
    distances.forEach((distanceArr) => {
      distanceArr.sort((a, b) => a.distance - b.distance);
    });
    // console.log(distances);

    // 최적화된 서브셋을 합쳐서 최종 결과를 얻음
    const optimizedSubset = combineSubsets(subsets, distances);

    // console.log(optimizedSubset);

    setStories(optimizedSubset);

    const newPlayList = optimizedSubset.map(
      (song) => `spotify:track:${song.uri}`
    );

    setPlayList((prevPlayList) => prevPlayList.concat(newPlayList));
  };

  // -----------------------------------------------------
  return (
    <div className="ResponsiveBackground">
      <HeaderPlus content={storeName} type={false} event={clickMenu} />
      <DetailBodyDiv>
        {/* <SpotifyPlay
          id={id.id}
          token={token}
          playList={playList}
          username={username}
        /> */}
        <div style={{ height: "20px" }} />
        <StoryList stories={stories} loggedIn={token} />
        <SpotifyPlay
          id={id.id}
          token={token}
          playList={playList}
          username={username}
        />
      </DetailBodyDiv>
      {modal ? (
        <UserDeleteModal>
          <ModalBtn
            onClick={() => (window.location.href = "http://localhost:8888")}
          >
            스포티파이 다시 로그인하기
          </ModalBtn>
          <ModalBtn onClick={() => window.location.reload()}>
            리스트 불러오기
          </ModalBtn>
          {/* <ModalBtn onClick={() => shuffleList()}>
            플레이리스트 재배치하기
          </ModalBtn> */}
          <ModalBtn onClick={() => setModal(false)}>취소</ModalBtn>
        </UserDeleteModal>
      ) : null}
      <Navbar to={`/story/create/${id.id}`} toSong={id.id} />
    </div>
  );
};

export default StoreDetail;
