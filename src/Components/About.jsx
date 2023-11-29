import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from '../Shared/Themes';
import LogoComponent from '../Shared/Logo';
import SocialIcons from '../Shared/SocialIcons';
import PowerButton from '../Shared/PowerButton';
import BigTitle from '../Shared/BigTitlte'
import AnimatedCursor from '../Shared/CustomCursor';

const Box = styled.div`
// background-color: #000;
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
z-index: 99;
@media (max-width: 561px) {
    overflow-y: auto   
    }
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`;
const Main = styled.div`
  border: 2px solid #D5FF18;
  color: #DCDCDC;
  padding: 2rem;
  width: 70vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 8rem;
  font-style: italic;

  @media (max-width: 561px) {
    width: auto;
    height: auto;
    left: calc(3rem + 5vw);
        
    }
`;

const Container = styled.div`
padding: 2rem;
`;


const About = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <Container>

                    <AnimatedCursor />
                    <LogoComponent />
                    <SocialIcons />
                    <PowerButton />

                    <Spaceman>
                        {/* <img src={astronaut} alt="spaceman" /> */}
                    </Spaceman>
                    <Main>
                        I'm a passionate and dedicated UX/UI Designer & Web Developer with 4 years of professional experience.
                        I find joy in transforming intricate problems into simple, elegant interface designs. My goal is to deliver clear,
                        efficient code that enhances the user experience.
                        <br /><br />
                        Throughout my journey, I've acquired the skills and knowledge necessary to ensure the success of your project.
                        I take pleasure in every aspect of the design process, from collaborative discussions to the final implementation.
                        <br /><br />
                        If you're looking for someone to contribute to the growth of your business, I'm all ears! Feel free to reach out,
                        and let's discuss how I can bring creativity and innovation to your projects.
                    </Main>

                    <BigTitle text="ABOUT" top="10%" left="5%" />

                </Container>

            </Box>
            <div className="stars"></div>
            <div className="twinkling"></div>
            {/* <div className="clouds"></div> */}
        </ThemeProvider>

    )
}

export default About
