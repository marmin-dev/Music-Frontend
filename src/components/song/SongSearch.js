import { useState } from "react";
import {
  SearchBtn,
  SearchDiv,
  SearchH2,
  SearchInput,
  SearchInputDiv,
  SearchListDiv,
  SearchListItemDiv,
  SearchP,
} from "./SongStyle";
import { getPathSearch, getSearch, getSearchByKey } from "../../api/search";
import SongList from "./SongList";

function SongSearch({ type, setPage }) {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [modal, setModal] = useState(false);
  const [songs, setSongs] = useState([]);
  // -------------------------------------------
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const searchReq = async () => {
    // 과거 검색 내역 불러오기
    const res = await getSearch();
    console.log(res.data);
    setSearchList(res.data);
    setModal(true);
  };
  const searchPath = async (search) => {
    // 과거 검색 내역으로 검색하기
    setModal(false);
    const res2 = await getSearchByKey(search);
    const res = await getPathSearch(search);
    // console.log(res);
    // console.log(res2)
    setSongs(res2.data);
  };

  const searchByKeword = async () => {
    // 키워드로 검색하기
    if (search) {
      const res = await getSearchByKey(search);
      const res2 = await getPathSearch(search);
      setModal(false);
      // console.log(res.data);
      // console.log(res2);
      setSongs(res.data);
    }
  };

  // -------------------------------------------
  return (
    <SearchDiv>
      <SearchH2>원하는 음악을 찾아보세요</SearchH2>
      <SearchInputDiv>
        <SearchInput
          placeholder="무엇을 찾을까요?"
          onChange={onChange}
          value={search}
          onClick={searchReq}
        />
        <SearchBtn type="button" onClick={() => searchByKeword()}>
          검색
        </SearchBtn>
      </SearchInputDiv>
      {modal ? (
        <SearchListDiv>
          {searchList.map((sear) => (
            <SearchListItemDiv
              onClick={() => searchPath(sear.search)}
              key={sear.id}
            >
              <SearchP>{sear.search}</SearchP>
              <SearchP style={{ color: "gray" }}>
                {sear.saveAt.substring(0, 10)}
              </SearchP>
            </SearchListItemDiv>
          ))}
        </SearchListDiv>
      ) : null}
      <SongList songs={songs} type={type} setPage={setPage} />
    </SearchDiv>
  );
}

export default SongSearch;
