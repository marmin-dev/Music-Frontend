import {
  ImgDiv,
  ItemDesc,
  ItemDiv,
  ItemImg,
  ItemLink,
  ItemTextDiv,
} from "./StoreStyle";
import barImg from "../../img/bar.jpg";

const StoreRefItem2 = ({ store }) => {
  return (
    <ItemDiv>
      <ImgDiv>
        <ItemImg src={barImg} />
      </ImgDiv>
      <ItemTextDiv>
        <ItemLink to={`/mystore/data/${store.id}`}>{store.storeName}</ItemLink>
        <ItemDesc>{store.username}</ItemDesc>
      </ItemTextDiv>
    </ItemDiv>
  );
};

export default StoreRefItem2;
