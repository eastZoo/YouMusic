import React from 'react'
import styled from 'styled-components'

const SideWrapper = styled.div`
background: #0f0f0f;
`;

const Sidebar = ({windowSize}) => {
  console.log(windowSize)
  return (
    <SideWrapper>
      <div style={{ width: `${windowSize.x-windowSize.xPlay}px`, height: `${windowSize.y}`}}>
        Sidebar
      </div>
    </SideWrapper>
  )
}

export default Sidebar