import React from 'react'
import styled from 'styled-components'
import { SaveFilled } from "@ant-design/icons";

const SideWrapper = styled.div`
  background: #0f0f0f;
`;

const Inner = styled.div`
  width: 550px;
  height: 840px;
  background-color: #222;
  border-radius: 20px;
  margin: 0 25px;
  @media screen and (max-width: 958px) {
    width: 270px;
  };
  /* PC (해상도 1024px)*/ 
  @media screen and (max-width:1024px) {
    width: 290px;
  } 
`;

const Header = styled.div`
position: relative;
  height: 100px;
  background-color: #141414;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  justify-content : center;
  align-items : center;
`;

const SaveBtn = styled.div`
  text-align: right;
`;

const Title = styled.div`
  font-size: 35px;
  text-align: center;
  padding: 24px;
`;

const Sidebar = ({windowSize}) => {
  
  // const saveList = () => {
  //   window.localStorage.setItem('liston', JSON.stringify(playList));
  // }
  console.log(windowSize)
  return (
    <SideWrapper windowSize={windowSize}>
      <Inner>
        <Header>
          <Title>MY MUSIC</Title>
          <SaveBtn >
            플레이 리스트 저장하기
            <SaveFilled/>
          </SaveBtn>
        </Header>
      </Inner>
    </SideWrapper>
  );
}

export default Sidebar