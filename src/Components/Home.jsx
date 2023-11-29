import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../Shared/Logo";
import SocialIcons from "../Shared/SocialIcons";
// import { YinYang } from '../Shared/AllSvgs'
import Arrow from "../Assets/Svg/Arrow.svg";
import Intro from "./Intro";
import AnimatedCursor from "../Shared/CustomCursor";

const Heading = styled.h1`
  color: #dcdcdc;
  font-size: 170px;
  position: relative;
  z-index: 1;
  margin: 0;
  line-height: 8rem;
  @media (max-width: 561px) {
    font-size: 44px;
    line-height: 3rem;
  }
`;

const Subpara = styled.p`
  color: #dcdcdc;
  font-size: 70px;
  padding: 0 !important;
  text-align: left;
  @media (max-width: 561px) {
    font-size: 30px;
  }
`;

const MainContainer = styled.div`
  background: #000000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: #DCDCDC;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: #DCDCDC;
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 561px) {
    top: 66%;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: #DCDCDC;
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
color: #DCDCDC;
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button.attrs((props) => ({
    // Conditionally include the click prop only if it's truthy
    click: props.click ? 'true' : undefined,
}))`
    position: absolute;
    top: ${(props) => (props.click ? "85%" : "50%")};
    left: ${(props) => (props.click ? "92%" : "50%")};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 1s ease;
  
    & > :first-child {
      animation: ${rotate} infinite 1.5s linear;
    }
  
    & > :last-child {
      display: ${(props) => (props.click ? "none" : "inline-block")};
      padding-top: 1rem;
    }
  `;


const DarkDiv = styled.div.attrs((props) => ({
    // Conditionally include the click prop only if it's truthy
    click: props.click ? 'true' : undefined,
}))`
    position: absolute;
    top: 0;
    // background-color: #D5FF18;
    bottom: 0;
    right: 50%;
    width: ${(props) => (props.click ? "50%" : "0%")};
    height: ${(props) => (props.click ? "100%" : "0%")};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
  `;
const Svg = styled.svg`
  @media (max-width: 561px) {
    width: 80px;
    height: 80px;
  }
`;

const Home = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <MainContainer>
                <AnimatedCursor />
                <div id="stars-container">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
                <DarkDiv click={click ? "true" : undefined} />
                <Container>
                    <LogoComponent />
                    <SocialIcons />

                    <Center click={click ? "true" : undefined}>
                        <div></div>
                        {/* <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='#DCDCDC' /> */}
                        <div
                            style={{
                                right: click ? "auto" : "-6rem",
                                top: click ? "auto" : "-6rem",
                                position: click ? "relative" : "absolute",
                            }}
                            onClick={() => handleClick()}
                            className="badge"
                        >
                            <Svg
                                viewBox="0 0 300 300"
                                width={click ? 100 : 150}
                                height={click ? 100 : 150}
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0"
                                    />
                                </defs>

                                <g className="circleText">
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text fill="#D5FF18" fontFamily="Verdana" fontSize="39">
                                        <textPath xlinkHref="#circlePath">
                                            Click To Explore ★ Click To Explore ★
                                        </textPath>
                                    </text>
                                </g>
                                <g>
                                    <image x="120" y="120" href={Arrow} alt="arrow" width={70} />
                                </g>
                            </Svg>
                        </div>
                        <div>
                            <Heading>Portfolio</Heading>
                            <Subpara>2023</Subpara>
                        </div>
                    </Center>

                    <Contact target="_blank" href="mailto:gayathrid2905@gmail.com">
                        <motion.h2
                            initial={{
                                y: -200,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Say hi..
                        </motion.h2>
                    </Contact>
                    <WORK to="/work" click={click ? "true" : undefined}>
                        <motion.h2
                            initial={{
                                y: -200,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            animate={{
                                y: 0,
                                transition: { type: "spring", duration: 1.5, delay: 1 },
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Work
                        </motion.h2>
                    </WORK>
                    <BottomBar>
                        <ABOUT to="/about" click={click ? "true" : undefined}>
                            <motion.h2
                                initial={{
                                    y: 200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                About.
                            </motion.h2>
                        </ABOUT>
                        <SKILLS to="/myskills">
                            <motion.h2
                                initial={{
                                    y: 200,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                animate={{
                                    y: 0,
                                    transition: { type: "spring", duration: 1.5, delay: 1 },
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                My Skills.
                            </motion.h2>
                        </SKILLS>
                    </BottomBar>
                </Container>
                {click ? <Intro click={click ? "true" : undefined} /> : null}
            </MainContainer>
        </>
    );
};

export default Home;
