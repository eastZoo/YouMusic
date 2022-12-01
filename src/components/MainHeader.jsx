import React from 'react'
import styled from 'styled-components'

// Themes
const themes = [
  {white: '#bbb', gray: '#0f0f0f', black: '#222'}
]
const theme = themes[0]

const PlayerList = styled.div`
  background-color: ${theme.gray};
  position: relative;
  height: 55px;
  display: flex;
  box-sizing: border-box;
  padding: 0 30px
  ;
`

const MainHeader = ({ width }) => {
  console.log(width)
  return (
    <PlayerList width={width}>
      <img src="img/youmusic-logo.png" style={{ width: "230px" }} alt="" />
    </PlayerList>
  );
}

export default MainHeader