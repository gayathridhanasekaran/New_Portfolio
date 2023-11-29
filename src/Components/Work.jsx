import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../Shared/Themes";
import { motion } from "framer-motion";

import PowerButton from "../Shared/PowerButton";

import BigTitlte from "../Shared/BigTitlte";
import AnimatedCursor from "../Shared/CustomCursor";
import LogoComponent from "../Shared/Logo";
import SocialIcons from "../Shared/SocialIcons";
import WorkData from "../Data/WorkData";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 100vh;
  position: relative;
  // display: flex;
  // align-items: center;
`;

// const Main = styled(motion.ul)`
//   position: fixed;
//   top: 12rem;
//   left: calc(10rem + 15vw);
//   height: 40vh;
//   display: flex;

//   color: white;
// `;

const Container = styled.div`
  padding: 2rem;
`;

const Work = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Container>
          <AnimatedCursor/>
          <LogoComponent />
          <SocialIcons />
          <PowerButton />
          {/* <Main initial="hidden" animate="show"> */}
          <WorkData />
          {/* </Main> */}

          <BigTitlte text="WORK" top="10%" right="20%" />
        </Container>
        <div id="stars-container" className="workbg">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Work;
