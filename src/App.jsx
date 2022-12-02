import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import './App.css';
import Container from './components/Container';
import MainFooter from './components/layout/MainFooter';
import MainHeader from './components/layout/MainHeader';
import Mainplayer from './components/Mainplayer';
import Sidebar from './components/Sidebar';

const App = () => {
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
        <Mainplayer windowSize={windowSize} />
        <Sidebar windowSize={windowSize}/>
      </Container>
      <MainFooter />
    </div>
  );
}

export default App;
