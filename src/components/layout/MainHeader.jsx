import React from 'react'
import styled from 'styled-components'

// Themes
const themes = [
  {white: '#bbb', gray: '#0f0f0f', black: '#222'}
]
const theme = themes[0]

const Headers = styled.div`
  background-color: ${theme.gray};
  width: 100%;
  height: 55px;
  ;
`
const Inner = styled.div`
  margin: 0 auto;
  width: 1600px;
  position: relative;
`;

const MainHeader = () => {
  return (
    <Headers>
      <Inner>
        <img src="img/youmusic-logo.png" style={{ width: "230px" }} alt="" />
      </Inner>
    </Headers>
  );
}

export default MainHeader