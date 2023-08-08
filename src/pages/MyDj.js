import { useEffect, useState } from "react";
import { BodyDiv } from "../components/common/Divs";
import Navbar from "../components/common/Navbar";
import { getStoreListByUser } from "../api/store";
import HeaderPlus from "../components/common/HeaderPlus";

import StoreRefItem2 from "../components/store/StoreRefItem2";

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
    <div className="ResponsiveBackground">
      <HeaderPlus content={"내 DJ부스"} type={true} />
      <BodyDiv>
        {items.map((item) => (
          <StoreRefItem2 store={item} key={item.id} />
        ))}
      </BodyDiv>
      <Navbar to={"/store/create"} />
    </div>
  );
};

export default MyDj;
