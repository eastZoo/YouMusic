import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-basis: 1;
  margin-right: auto;
  height: ${props => props.heigh}px;
  @media screen and (max-width: 1200px)  {
    height: 860px;
  }
  
`;
const Container = (props) => {
  console.log(props.windowSize)
  return (
    <Wrapper height={props.windowSize.y}>
      {props.children}
    </Wrapper>
  )
}

export default Container