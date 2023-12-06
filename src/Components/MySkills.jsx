import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../Shared/Themes';
import LogoComponent from '../Shared/Logo';
import SocialIcons from '../Shared/SocialIcons';
import PowerButton from '../Shared/PowerButton';
import AnimatedCursor from '../Shared/CustomCursor';
import SkillsNane from '../Shared/SkillsName';
import BigTitlte from '../Shared/BigTitlte';
import { Design, Develope } from '../Shared/AllSvgs';


const Box = styled.div`
// background-color: #000000;
width: 100vw;
height:100vh;
position: relative;
z-index: 99;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 561px) {
        overflow-x: hidden;
        overflow-y: auto;
        width:100%;
        height: 100%
    }
`;

const Container = styled.div`
padding: 2rem;
`;

const Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 4rem;
@media (max-width: 561px) {
    display: block;
    padding: 2rem
}
`

const Title = styled.h2`
font-size: calc(1em + 1vw);
color: #DCDCDC;
display: flex;
@media (max-width: 561px) {
    font-size: calc(2em + 1vw);

}
`

const Description = styled.div`
color: #DCDCDC;
font-size: calc(0.6em + 0.5vw);
padding: 0.5rem 0;
@media (max-width: 561px) {
    font-size: calc(1.2em + 0.5vw);

}
`

const Content = styled.div`
//   border: 2px solid #D5FF18;
  color: #DCDCDC;
  padding: 2rem;
  width: 45vw;
//   height: 40vh;
  z-index: 3;
  line-height: 1.5;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  font-style: italic;
  @media (max-width: 561px) {
    width: auto;
    padding: 0;
    padding-left: 2rem
}
`;

const MySkills = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box $click={false}>
                <Container>
                    <AnimatedCursor />
                    <LogoComponent />
                    <SocialIcons />
                    <PowerButton />
                    <BigTitlte text="SKILLS" top="10%" left="5%" />
                    <Main>
                        <Content>
                            <Title>
                                <Design fill="#fff" width={40} height={40} style={{ paddingRight: '2rem' }} /> Designer
                            </Title>
                            <Description>
                                UI/UX Designer with a passion for designing beautiful and functional ser experience.
                            </Description>
                            <p className="paracontent" style={{ fontSize: '18px'}}> <b style={{ color: '#d5ff18' }}>Design Tools :</b> Adobe Creative Suite (Illustrator, XD), Figma </p>

                            <br /> 
                            <Title>
                                <Develope fill="#fff" width={40} height={40} style={{ paddingRight: '2rem' }} /> Developer
                            </Title>
                            <Description>
                                Web Developer who focuses on writing clean, elegant and efficient code.
                            </Description>
                            <p className="paracontent" style={{ fontSize: '18px'}}> <b style={{ color: '#d5ff18' }}>Coding Languages :</b> HTML5, CSS, SCSS, Javascript (Basic), React, Angular </p>
                            <p className="paracontent" style={{ fontSize: '18px'}}> <b style={{ color: '#d5ff18' }}>Version Control :</b> Git, GitHub</p>
                        
                        </Content>
                        <SkillsNane />
                    </Main>
                </Container>
            </Box>
            <div className="stars"></div>
            <div className="twinkling"></div>

        </ThemeProvider>

    )
}

export default MySkills
