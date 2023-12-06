import React from 'react'
// import { DarkTheme } from '../components/Themes'
import LogoImg from '../Assets/Svg/logo.svg'
import styled from 'styled-components'

const LogoIcon = styled.div`
position: fixed;
top: 2.5rem;
@media (max-width: 561px) {
  position: relative;
  top: 0
 }
`
const LogoComponent = () => {
  return (
    <LogoIcon>
      <img src={LogoImg} alt='Logo' width={80}/>
    </LogoIcon>
  )
}

export default LogoComponent
