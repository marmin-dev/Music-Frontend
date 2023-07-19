import { useEffect, useState } from "react";
import { Responsive } from "../components/Responsive";
import { BodyDiv } from "../components/common/Divs";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import { getStoreListByUser } from "../api/store";
import StoreListItem from "../components/store/StoreListItem";

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
      <Header content={"내 DJ부스"} />
      <BodyDiv>
        {items.map((item) => (
          <StoreListItem store={item} key={item.id} />
        ))}
      </BodyDiv>
      <Navbar />
    </Responsive>
  );
};

export default MyDj;
