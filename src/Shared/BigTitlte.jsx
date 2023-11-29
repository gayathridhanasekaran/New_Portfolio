import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: fixed;
color: rgba(213, 255, 24 ,0.2);
font-size: calc(5rem + 5vw);
z-index:0;
margin: 0;
text-align: right;
@media (max-width: 561px) {
font-size: calc(3rem + 5vw);
    
}

`


const BigTitle = (props) => {
    return (
        <Text >
            {props.text}
        </Text>
    )
}

export default BigTitle
