import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// import Me from '../Assets/Svg/logo.svg'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 70vw;
height:55vh;
display: flex;


// background: linear-gradient(
//     to right,
//     ${props => props.theme.text} 50%,
//     transparent 50%) bottom,
//     linear-gradient(
//     to right,
//     ${props => props.theme.text} 50%,
//     transparent 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    // border-left: 2px solid ${props => props.theme.body};
    // border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 100%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 58%;
    transform: translate(-50%,0%);
    width: 80%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: #DCDCDC;
padding: 2rem;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: #DCDCDC;
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`

const Intro = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ['{ Web Developer }', '{ UI/UX Designer }'];

    useEffect(() => {
        const onAnimationIteration = () => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        };
    
        const intervalId = setInterval(() => {
          // Trigger animation by changing data-text
          setCurrentTextIndex((prevIndex) => prevIndex); 
        }, 6000);
    
        const changingTextElement = document.querySelector('.changing-text');
        changingTextElement.addEventListener('animationiteration', onAnimationIteration);
    
        return () => {
          clearInterval(intervalId);
          changingTextElement.removeEventListener('animationiteration', onAnimationIteration);
        };
      }, [texts.length]);
    
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm <span className=''>G</span>ayathri Dhanasekaran,</h3>
                    <h2 className="changing-text" data-text={texts[currentTextIndex]}>
                        {texts[currentTextIndex].replace(/\./g, '',)}
                    </h2>
                    <p className='paraColor mt-2'>I Design and Code for the web.</p>
                </Text>
            </SubBox>
            {/* <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox> */}
        </Box>
    )
}

export default Intro
