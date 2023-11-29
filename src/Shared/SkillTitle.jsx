import React from 'react'
import styled, {keyframes} from 'styled-components'
import codeImage from "../Assets/Images/codeimage.jpg"

const float = keyframes`
0% {  background-position: left 0px top 10px; }
40% { background-position: left 800px top 10px; }
`;

const Text = styled.h1`
font-size: 150px;
color: rgba(213, 255, 24, .1);
background-image: url(${codeImage});
background-repeat: repeat-x;
background-position: bottom;
background-size: contain;
-webkit-background-clip:text;
animation: ${float} 15s linear infinite;
text-align: center;
margin-top: 17%;
text-transform: uppercase;
font-weight: 900;
-webkit-text-stroke-width: 3px;
-webkit-text-stroke-color: #dcdcdc;

// position: fixed;
// color: rgba(213, 255, 24 ,0.2);
// font-size: calc(5rem + 5vw);
// z-index:0;
// margin: 0;
// text-align: right

`


const SkillTitlte = (props) => {
    return (
        <Text >
            {props.text}
        </Text>
    )
}

export default SkillTitlte
