// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from './AllSvgs'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #DCDCDC;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:99;
cursor: pointer;

@media (max-width: 561px) {
 right: 0;
 left: auto;
 position: absolute
}

&:hover{
    background-color: #D5FF18;
    box-shadow: 0 0 8px 6px #D5FF18;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <PowerBtn width={30} height={30} fill='currentColor' />
            </NavLink>
        </Power>
    )
}

export default PowerButton
