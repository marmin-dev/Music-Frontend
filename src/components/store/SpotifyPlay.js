import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { Button } from "../loginRegister/LoginComponents";
import { SpotifyDiv, SpotifyLink } from "./StoreStyle";
// import { spotifyApi } from "../../api/spotifyApi";

const SpotifyPlay = ({ token, id, playList, username }) => {
  //   const spotifyToken = token;
  const url = `https://auth.sumsumai.click`;
  // const url = "http://localhost:8888";

  const locUser = localStorage.getItem("username");

  useEffect(() => {
    // console.log(playList);
    // console.log(username);
    // console.log(locUser);
    // const fetch = async () => {
    //   spotifyApi.setAccessToken(token);
    //   const response = await spotifyApi.getMyCurrentPlayingTrack();
    // };
  }, []);

  return (
    <SpotifyDiv>
      {token ? null : (
        <SpotifyLink to={url}>
          <Button>스포티파이 로그인하기</Button>
        </SpotifyLink>
      )}
      {username === locUser && locUser && localStorage.getItem("SPOTIFY") ? (
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
      ) : null}
    </SpotifyDiv>
  );
};

export default SpotifyPlay;
