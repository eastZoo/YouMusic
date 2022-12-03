import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  margin: 0 auto;
  width: 1500px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    width: 850px;
    display: block;
  }
  @media screen and (max-width: 1536px) {
    width: 1330px;
  }
`;
const Container = (props) => {
  console.log(props.windowSize);
  return (
    <Wrapper height={props.windowSize.y}>
      <Inner>{props.children}</Inner>
    </Wrapper>
  );
};

export default Container;
