import { Responsive } from "../components/Responsive";
import Header from "../components/common/HeadBar";
import Navbar from "../components/common/Navbar";
import SongSearch from "../components/song/SongSearch";

function SongPage() {
  return (
    <Responsive>
      <Header content={"노래 둘러보기"} />
      <div style={{ height: "80%", width: "100%" }}>
        <SongSearch type={false} />
      </div>
      <Navbar />
    </Responsive>
  );
}

export default SongPage;