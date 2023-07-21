import { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import { BodyDiv } from "../components/common/Divs";
import Navbar from "../components/common/Navbar";
import { getStoreListByUser } from "../api/store";
import StoreListItem from "../components/store/StoreListItem";
import HeaderPlus from "../components/common/HeaderPlus";

const MyDj = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getStoreListByUser();
      setItems(response);
      console.log(response);
    };
    fetchData();
  }, []);
  return (
    <Responsive>
      <HeaderPlus content={"내 DJ부스"} type={true} />
      <BodyDiv>
        {items.map((item) => (
          <StoreListItem store={item} key={item.id} />
        ))}
      </BodyDiv>
      <Navbar to={"/store/create"} />
    </Responsive>
  );
};

export default MyDj;
