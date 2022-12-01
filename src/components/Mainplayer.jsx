import { YoutubeFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoInfo = styled.div`
  display: flex;
  background: #0f0f0f;
  height:150px;
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
  width: ${props => props.width-80}px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 40px;
`;


const Mainplayer = ({windowSize}) => {
  const [repeat, setRepeat] = useState(false)
  const playListTemplate = [
    // {title: 'YENA (최예나) - SMILEY (Feat. BIBI) MV', author: 'Stone Music Entertainment', provider: 'YouTube', url: 'https://youtu.be/y9kkXTucnLU' , thumbnail: 'https://i.ytimg.com/vi/y9kkXTucnLU/hqdefault.jpg'},
    {title: '수능 끝났다곡 - 일주일 중에 네가 제일 지쳐있을 오늘 - 목요일 밤 COVER [징버거, 릴파, 뢴트게늄, 풍신]', author: '왁타버스 WAKTAVERSE', provider: 'YouTube', url: 'https://www.youtube.com/watch?v=7wubxhtPKQE', thumbnail: 'https://i.ytimg.com/vi/7wubxhtPKQE/hqdefault.jpg'},
    {title: 'ShowDown(쇼다운) - (비밀소녀, 곽춘식, 이덕수할아바이)(ft.아이네) - 고멤가요제 밴틀니', author: '왁타버스 WAKTAVERSE', provider: 'YouTube', url: 'https://www.youtube.com/watch?v=YZ0xA3LUzNQ', thumbnail: 'https://i.ytimg.com/vi/YZ0xA3LUzNQ/hqdefault.jpg'},
    {title: 'TRUE LOVER (트루러버) - (해루석, 히키킹, 권민)(ft.행주) - 고멤가요제 이세계오빠들', author: '왁타버스 WAKTAVERSE', provider: 'YouTube', url: 'https://www.youtube.com/watch?v=l8e1Byk1Dx0', thumbnail: 'https://i.ytimg.com/vi/l8e1Byk1Dx0/hqdefault.jpg'},
    {title: 'STARLIGHT(스타라이트) - (왁파고, 하쿠0089 , 카르나르융터르)(ft.주르르) - 고멤가요제 하와유', author: '왁타버스 WAKTAVERSE', provider: 'YouTube', url: 'https://www.youtube.com/watch?v=YwQkPlFlOJQ', thumbnail: 'https://i.ytimg.com/vi/YwQkPlFlOJQ/hqdefault.jpg'},
    {title: '피날레 - (비즈니스킴, 단답벌레, 독고혜지)(ft.릴파) - 고멤가요제 레이디버그', author: '왁타버스 WAKTAVERSE', provider: 'YouTube', url: 'https://www.youtube.com/watch?v=IzrIYIqlBnA', thumbnail: 'https://i.ytimg.com/vi/IzrIYIqlBnA/hqdefault.jpg'},
    {title: '맘가는대로 - (새우튀김, 캘리칼리데이비슨, 프리터)(ft.고세구) - 고멤가요제 세새한캘리퍼스', author: '왁타버스 WAKTAVERSE', provider: 'YouTube', url: 'https://youtu.be/5ePKBm4spBg', thumbnail: 'https://i.ytimg.com/vi/5ePKBm4spBg/hqdefault.jpg'},
  ]

  const [playList, setPlayList] = useState(
    window.localStorage.getItem('mylist') !== null
    ? JSON.parse(window.localStorage.getItem('mylist'))
    : playListTemplate
  );

  const [playNumber, setPlayNumber] = useState(0)
  console.log("windowSize.xPlay", windowSize.xPlay)
  return (
    <div>
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
          <YoutubeFilled style={{ fontSize: '35px', color: '#f1f1f1' }}/>
          <Title>
            <div>{playList[playNumber].title}</div>
            {playList[playNumber].author}
          </Title>
        </InfoCard>
      </VideoInfo>
    </div>
  );
}

export default Mainplayer