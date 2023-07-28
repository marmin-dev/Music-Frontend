import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { Button } from "../loginRegister/LoginComponents";
import { SpotifyDiv, SpotifyLink } from "./StoreStyle";

const SpotifyPlay = ({ token, id, playList }) => {
  //   const spotifyToken = token;
  const url = `https://auth.sumsumai.click`;
  useEffect(() => console.log(playList));

  return (
    <SpotifyDiv>
      {token ? (
        <SpotifyPlayer
          token={token}
          uris={playList}
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
        <SpotifyLink to={url}>
          <Button>스포티파이 로그인하기</Button>
        </SpotifyLink>
      )}
    </SpotifyDiv>
  );
};

export default SpotifyPlay;
