import React from "react";
import styled from "styled-components";

// Themes
const themes = [{ white: "#bbb", gray: "#0f0f0f", black: "#222" }];
const theme = themes[0];

const Headers = styled.div`
  background-color: ${theme.gray};
  width: 100%;
  height: 55px;
  @media all and (max-width: 1536px) {
    height: 55px;
  }
`;
const Inner = styled.div`
  margin: 0 auto;
  width: 1600px;
  position: relative;
  @media all and (max-width: 1536px) {
    width: 1330px;
  }
`;
const Img = styled.img`
  width: 230px;
  @media all and (max-width: 1536px) {
    height: 55px;
  }
`;

const MainHeader = () => {
  return (
    <Headers>
      <Inner>
        <Img src="img/youmusic-logo.png" />
      </Inner>
    </Headers>
  );
};

export default MainHeader;
