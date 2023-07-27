import { SongsDiv } from "./SongStyle";

import SongItem from "./SongItem";

function SongList({ songs, type, setPage }) {
  //   const loggedIn = localStorage.getItem("SPOTIFY");

  return (
    <SongsDiv>
      {songs.map((song) => (
        <SongItem song={song} type={type} setPage={setPage} key={song.id} />
      ))}
    </SongsDiv>
  );
}

export default SongList;
