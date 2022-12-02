import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import './App.css';
import Container from './components/Container';
import MainFooter from './components/MainFooter';
import MainHeader from './components/MainHeader';
import Mainplayer from './components/Mainplayer';
import Sidebar from './components/Sidebar';

const App = () => {
  const playListTemplate = [
    // {title: 'YENA (최예나) - SMILEY (Feat. BIBI) MV', author: 'Stone Music Entertainment', provider: 'YouTube', url: 'https://youtu.be/y9kkXTucnLU' , thumbnail: 'https://i.ytimg.com/vi/y9kkXTucnLU/hqdefault.jpg'},
    {
      title:
        "수능 끝났다곡 - 일주일 중에 네가 제일 지쳐있을 오늘 - 목요일 밤 COVER [징버거, 릴파, 뢴트게늄, 풍신]",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=7wubxhtPKQE",
      thumbnail: "https://i.ytimg.com/vi/7wubxhtPKQE/hqdefault.jpg",
    },
    {
      title:
        "ShowDown(쇼다운) - (비밀소녀, 곽춘식, 이덕수할아바이)(ft.아이네) - 고멤가요제 밴틀니",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=YZ0xA3LUzNQ",
      thumbnail: "https://i.ytimg.com/vi/YZ0xA3LUzNQ/hqdefault.jpg",
    },
    {
      title:
        "TRUE LOVER (트루러버) - (해루석, 히키킹, 권민)(ft.행주) - 고멤가요제 이세계오빠들",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=l8e1Byk1Dx0",
      thumbnail: "https://i.ytimg.com/vi/l8e1Byk1Dx0/hqdefault.jpg",
    },
    {
      title:
        "STARLIGHT(스타라이트) - (왁파고, 하쿠0089 , 카르나르융터르)(ft.주르르) - 고멤가요제 하와유",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=YwQkPlFlOJQ",
      thumbnail: "https://i.ytimg.com/vi/YwQkPlFlOJQ/hqdefault.jpg",
    },
    {
      title:
        "피날레 - (비즈니스킴, 단답벌레, 독고혜지)(ft.릴파) - 고멤가요제 레이디버그",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=IzrIYIqlBnA",
      thumbnail: "https://i.ytimg.com/vi/IzrIYIqlBnA/hqdefault.jpg",
    },
    {
      title:
        "맘가는대로 - (새우튀김, 캘리칼리데이비슨, 프리터)(ft.고세구) - 고멤가요제 세새한캘리퍼스",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=YmELthNomns",
      thumbnail: "https://i.ytimg.com/vi/YmELthNomns/hqdefault.jpg",
    },
    {
      title:
        "수능 끝났다곡 - 일주일 중에 네가 제일 지쳐있을 오늘 - 목요일 밤 COVER [징버거, 릴파, 뢴트게늄, 풍신]",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=7wubxhtPKQE",
      thumbnail: "https://i.ytimg.com/vi/7wubxhtPKQE/hqdefault.jpg",
    },
    {
      title:
        "ShowDown(쇼다운) - (비밀소녀, 곽춘식, 이덕수할아바이)(ft.아이네) - 고멤가요제 밴틀니",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=YZ0xA3LUzNQ",
      thumbnail: "https://i.ytimg.com/vi/YZ0xA3LUzNQ/hqdefault.jpg",
    },
    {
      title:
        "TRUE LOVER (트루러버) - (해루석, 히키킹, 권민)(ft.행주) - 고멤가요제 이세계오빠들",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=l8e1Byk1Dx0",
      thumbnail: "https://i.ytimg.com/vi/l8e1Byk1Dx0/hqdefault.jpg",
    },
    {
      title:
        "STARLIGHT(스타라이트) - (왁파고, 하쿠0089 , 카르나르융터르)(ft.주르르) - 고멤가요제 하와유",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=YwQkPlFlOJQ",
      thumbnail: "https://i.ytimg.com/vi/YwQkPlFlOJQ/hqdefault.jpg",
    },
    {
      title:
        "피날레 - (비즈니스킴, 단답벌레, 독고혜지)(ft.릴파) - 고멤가요제 레이디버그",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=IzrIYIqlBnA",
      thumbnail: "https://i.ytimg.com/vi/IzrIYIqlBnA/hqdefault.jpg",
    },
    {
      title:
        "맘가는대로 - (새우튀김, 캘리칼리데이비슨, 프리터)(ft.고세구) - 고멤가요제 세새한캘리퍼스",
      author: "왁타버스 WAKTAVERSE",
      provider: "YouTube",
      url: "https://www.youtube.com/watch?v=YmELthNomns",
      thumbnail: "https://i.ytimg.com/vi/YmELthNomns/hqdefault.jpg",
    },
  ];

  const [playList, setPlayList] = useState(
    window.localStorage.getItem("mylist") !== null
      ? JSON.parse(window.localStorage.getItem("mylist"))
      : playListTemplate
  );

  // Window Size
  const [windowSize, setWindowSize] = useState({x: 1920, y: 930})
  const changeSizeTotal = () => {
    const x960 = document.documentElement.clientWidth < 1920 ? document.documentElement.clientWidth : 1920;
    console.log(x960);
    setWindowSize({
      x: x960, 
      y: window.innerHeight,
      xPlay: parseInt(x960 / 1.5),
      yPlay: parseInt(x960 / 3.2),
      xHalf: parseInt(x960 / 4),
    })
  }

  useEffect(() => {
    changeSizeTotal()
    window.addEventListener('resize', changeSizeTotal);
    window.addEventListener('orientationchange', changeSizeTotal);
  }, [])

  return (
    <div className="App">
      <MainHeader width={windowSize.x}/>
      <Container windowSize={windowSize.y}>
        <Mainplayer windowSize={windowSize} playList={playList}/>
        <Sidebar windowSize={windowSize} playList={playList} setPlayList={setPlayList}/>
      </Container>
      <MainFooter />
    </div>
  );
}

export default App;
