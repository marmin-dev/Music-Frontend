import { SongsDiv } from "./SongStyle";

import SongItem from "./SongItem";
import { useParams } from "react-router-dom";

function SongList({ songs, type, setPage }) {
  //   const loggedIn = localStorage.getItem("SPOTIFY");
  const storeId = useParams("id");

  return (
    <SongsDiv>
      {songs.map((song) => (
        <SongItem
          song={song}
          type={type}
          setPage={setPage}
          key={song.id}
          storeId={storeId.id}
        />
      ))}
    </SongsDiv>
  );
}

export default SongList;
