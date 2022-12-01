import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: ${props => props.height-75}px;
`;

const Container = (props) => {
  console.log(props)
  return (
    <Wrapper height={props.windowSize}>
      {props.children}
    </Wrapper>
  )
}

export default Container