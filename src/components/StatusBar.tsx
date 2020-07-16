import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function StatusBar (): JSX.Element {
  const [dimentions, setDimentions] = useState([
    window.innerHeight,
    window.innerWidth
  ])

  useEffect(() => {
    window.addEventListener('resize', () =>
      setDimentions([window.innerHeight, window.innerWidth])
    )
  })

  return (
    <StyledStatusBar>
      <Status>transform</Status>
      <StatusInfo>
        100% {dimentions[1]}l {dimentions[0]}h
      </StatusInfo>
    </StyledStatusBar>
  )
}

const Status = styled.span``

const StatusInfo = styled.span`
  flex: 2;
  text-align: end;
  white-space: nowrap;
  color: #4e4e4e;
`

const StyledStatusBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #8d8d8d;
  padding: 5px 15px;
`
