import { YoutubeFilled } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import PostContext from "../store/post";

const VideoInfo = styled.div`
  display: flex;
  background: #0f0f0f;
  height: 150px;
  max-width: 1200px;
  margin: 0 auto;
  @media all and (max-width: 1536px) {
    height: 100px;
  }
`;

const InfoCard = styled.div`
  background: #272727;
  border-radius: 15px;
  margin: auto;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 40px;
  @media all and (max-width: 1536px) {
    margin: 10px auto;
    height: 80px;
  }
  @media all and (max-width: 768px) {
    width: 420px;
    margin-left: 0;
  }
`;

const Title = styled.div`
  color: #f1f1f1;
  font-size: 20px;
  padding: 0 20px;
  @media all and (max-width: 1536px) {
    font-size: 16px;
  }
`;

const PlayerThumbnail = styled.div`
  padding: 10px;
  display: grid;
  border-radius: 15px;
  background: #272727;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  & div {
    filter: grayscale(1);
  }
  & div:nth-child(${(props) => props.playNumber + 1}) {
    filter: grayscale(0);
  }
  @media all and (max-width: 1536px) {
  }
  @media all and (max-width: 768px) {
    width: 500px;
    margin-left: 0;
  }
`;

// IMG BUTTON
const Button = styled.div`
  cursor: pointer;
`;

const Main = styled.div`
  width: 1150px;
  @media all and (max-width: 1536px) {
    width: 950px;
  }
  @media all and (max-width: 960px) {
    width: 100%;
    display: block;
  }
`;

const Mainplayer = ({ windowSize }) => {
  const { playList } = useContext(PostContext);
  const [width, setWidth] = useState(1150);

  const [repeat, setRepeat] = useState(false);
  const [playNumber, setPlayNumber] = useState(0);
  console.log("windowSize.xPlay", windowSize.xPlay);

  useEffect(() => {
    if (windowSize.x <= 960) {
      setWidth(840);
    } else if (windowSize.x <= 1560) {
      setWidth(950);
    } else {
      setWidth(1150);
    }
  }, [windowSize.x]);

  return (
    <Main>
      <ReactPlayer
        url={playList[playNumber].url}
        onEnded={() => {
          if (playNumber + 1 !== playList.length) {
            setPlayNumber((prev) => prev + 1);
          } else if (repeat) {
            setPlayNumber(0);
          }
        }}
        playing={true}
        controls={true}
        width={width}
        height={windowSize.yPlay}
      ></ReactPlayer>
      {/* 하단 동영상 정보창 */}
      <VideoInfo>
        <InfoCard>
          <YoutubeFilled style={{ fontSize: "35px", color: "#f1f1f1" }} />
          <Title>
            <div>{playList[playNumber].title}</div>
            {playList[playNumber].author}
          </Title>
        </InfoCard>
      </VideoInfo>
      <PlayerThumbnail playNumber={playNumber} windowSize={windowSize}>
        {playList.map(({ title, author, provider, url, thumbnail }, index) => (
          <Button>
            <img
              src={thumbnail}
              alt={title}
              title={title}
              onClick={() => setPlayNumber(index)}
              width="auto"
              height={width === 950 ? "50px" : "64px"}
            />
          </Button>
        ))}
      </PlayerThumbnail>
    </Main>
  );
};

export default Mainplayer;
