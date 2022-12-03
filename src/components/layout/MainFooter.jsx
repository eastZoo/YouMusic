import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  margin-top: 15px;
`;
const Copy = styled.div`
  width: 1600px;
  margin: 0 auto;
  text-align: right;
  @media screen and (max-width: 960px) {
    width: 960px;
  }
  @media screen and (max-width: 1536px) {
    width: 1330px;
  }
`;
const MainFooter = () => {
  return (
    <Footer>
      <Copy>copyright &copy; by eastzoo All Right Reserves</Copy>
    </Footer>
  );
};

export default MainFooter;
