import React, { useEffect } from "react";
import { DetailBodyDiv } from "../common/Divs";
import SpotifyPlayer from "react-spotify-web-playback";
import { Button } from "../loginRegister/LoginComponents";
import { Link } from "react-router-dom";

const StoreDetailDiv = ({ token, id }) => {
  const spotifyToken = token;
  const url = `http://localhost:8888?id=${id}`;
  useEffect(() => console.log(token));

  return (
    <DetailBodyDiv>
      {token ? (
        <SpotifyPlayer
          token={token}
          uris={["spotify:album:6Z1zv6Hw9bdvSoxI5uYk2h"]}
          styles={{
            activeColor: "#fff",
            bgColor: "#333",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
        />
      ) : (
        <Link to={url}>
          <Button>스포티파이 로그인하기</Button>
        </Link>
      )}
    </DetailBodyDiv>
  );
};

export default StoreDetailDiv;
