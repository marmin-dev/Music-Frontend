import { useEffect, useRef } from "react";
import StoreListItem from "./StoreListItem";
import { BodyDiv } from "../common/Divs";
import { useDispatch, useSelector } from "react-redux";
import {
  getStoreList,
  increasePage,
  initializePage,
} from "../../modules/store";

const StoreList = () => {
  const dispatch = useDispatch();
  const { page, stores } = useSelector((state) => state.store);
  const containerRef = useRef(null);

  const handleScroll = () => {
    // 스크롤이 끝에 도달했을 때 페이지를 증가시킵니다.
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 50 // 스크롤이 끝에서 50px 이전에 도달하면 페이지를 증가시킵니다.
    ) {
      dispatch(increasePage());
    }
  };

  useEffect(() => {
    // 페이지가 증가할 때마다 데이터를 추가로 불러옵니다.
    const fetchData = async () => {
      await dispatch(getStoreList(page));
    };
    fetchData();
  }, [page, dispatch]);

  useEffect(() => {
    dispatch(initializePage());
    console.log(stores);
  }, []);

  return (
    <BodyDiv ref={containerRef} onScroll={handleScroll}>
      {stores.map((store) => (
        <StoreListItem store={store} key={store} />
      ))}
    </BodyDiv>
  );
};

export default StoreList;
