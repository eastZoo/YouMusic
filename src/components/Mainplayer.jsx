import { YoutubeFilled } from "@ant-design/icons";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Slider from "react-slick";

const VideoInfo = styled.div`
  display: flex;
  background: #0f0f0f;
  height: 150px;
`;

const Title = styled.div`
  color: #f1f1f1;
  font-size: 20px;
  padding: 0 20px;
`;

const InfoCard = styled.div`
  background: #272727;
  border-radius: 15px;
  margin: auto;
  width: ${(props) => props.width - 80}px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 40px;
`;

const PlayerThumbnail = styled.div`
  padding: 10px;
  display: grid;
  background: #272727;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  & div {
    filter: grayscale(1);
  }
  & div:nth-child(${(props) => props.playNumber + 1}) {
    filter: grayscale(0);
  }

`;

// IMG BUTTON
const Button = styled.div`
  cursor: pointer;
`;

const Main = styled.div`
  
`;

const Mainplayer = ({ windowSize, playList }) => {
  const [repeat, setRepeat] = useState(false);

  const [playNumber, setPlayNumber] = useState(0);
  console.log("windowSize.xPlay", windowSize.xPlay);
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
        width={windowSize.xPlay}
        height={windowSize.yPlay}
      ></ReactPlayer>
      {/* 하단 동영상 정보창 */}
      <VideoInfo width={windowSize.x}>
        <InfoCard width={windowSize.xPlay}>
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
              height="64px"
            />
          </Button>
        ))}
      </PlayerThumbnail>
    </Main>
  );
};

export default Mainplayer;
