import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { Button } from "../loginRegister/LoginComponents";
import { SpotifyDiv, SpotifyLink } from "./StoreStyle";
import SpotifyWebApi from "spotify-web-api-js";

const SpotifyPlay = ({ token, id, playList }) => {
  //   const spotifyToken = token;
  const url = `http://localhost:8888?id=${id}`;
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

export const spotifyApi = new SpotifyWebApi();

export default SpotifyPlay;
