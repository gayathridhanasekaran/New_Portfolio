import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NextazyImg from "../Assets/Image/Nextazy.png";
import BlockchainImg from "../Assets/Image/Blockchain.png";
import NexfolioImg from "../Assets/Image/Nexfolio.png";
import linkIcon from "../Assets/Svg/link.svg";
import UptozImg from "../Assets/Image/Uptoz.png";
import ImagicaImg from "../Assets/Image/Imagica.png";
import CurebayImg from "../Assets/Image/Curebay.png";
import SocialImg from "../Assets/Image/Social.png";

gsap.registerPlugin(ScrollTrigger);

const WorkData = () => {
  useEffect(() => {
    const dude = document.querySelector(".dude");
    const head = dude.querySelector(".head");
    const legs = Array.from(dude.querySelectorAll(".leg"));
    const arms = Array.from(dude.querySelectorAll(".arm"));
    const legBottoms = Array.from(dude.querySelectorAll(".leg-bottom"));
    const armBottoms = Array.from(dude.querySelectorAll(".arm-bottom"));

    const content = document.querySelector(".content");
    const arrowEl = document.querySelector(".arrow-animated");

    gsap.set(arms, {
      svgOrigin: "180 58",
    });
    gsap.set(head, {
      svgOrigin: "200 45",
    });
    gsap.set(armBottoms, {
      svgOrigin: "178 118",
    });
    gsap.set(legs, {
      svgOrigin: "177 145",
    });
    gsap.set(legBottoms, {
      svgOrigin: "171 220",
    });

    const halfBodyTimeline = (leg, arm) => {
      const legBottom = leg.querySelector(".leg-bottom");
      const armBottom = arm.querySelector(".arm-bottom");

      return gsap
        .timeline({
          repeat: -1,
          paused: true,
        })
        .fromTo(
          leg,
          {
            rotation: -25,
          },
          {
            duration: 0.5,
            rotation: 15,
            ease: "sine.inOut",
          },
          0
        )
        .to(
          leg,
          {
            duration: 0.25,
            rotation: -25,
            ease: "sine.in",
          },
          ">"
        )
        .to(
          legBottom,
          {
            duration: 0.25,
            rotation: 15,
            ease: "sine.inOut",
          },
          0.25
        )
        .to(
          legBottom,
          {
            duration: 0.25,
            rotation: 80,
            ease: "sine.in",
          },
          ">"
        )
        .to(
          legBottom,
          {
            duration: 0.25,
            rotation: 0,
            ease: "sine.out",
          },
          ">"
        )
        .fromTo(
          arm,
          {
            rotation: -12,
          },
          {
            duration: 0.5,
            rotation: 12,
            ease: "sine.inOut",
            yoyo: true,
            repeat: 1,
          },
          0
        )
        .fromTo(
          armBottom,
          {
            rotation: -15,
          },
          {
            duration: 0.5,
            rotation: 10,
            ease: "sine.inOut",
            yoyo: true,
            repeat: 1,
          },
          0
        );
    };

    const backCycle = halfBodyTimeline(legs[0], arms[1]);
    const frontCycle = halfBodyTimeline(legs[1], arms[0]);

    const bodyTimeline = gsap
      .timeline({
        paused: true,
      })
      .to(
        dude,
        {
          duration: 0.25,
          y: "-=10",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        0
      )
      .fromTo(
        head,
        {
          rotation: -25,
        },
        {
          duration: 0.25,
          rotation: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        0
      );

    const numberOfCycles = Math.ceil(
      (3 * window.innerWidth) / window.innerHeight
    );
    // Use media query to check the window width
    const isSmallScreen = window.innerWidth < 768;

    // Set xPercent based on the screen size
    const xPercentValue = isSmallScreen ? 0 : -77;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page",
          scrub: true,
          start: "0% 0%",
          end: "100% 100%",
        },
      })
      .to(
        arrowEl,
        {
          duration: 0.05,
          opacity: 0,
        },
        0
      )
      .fromTo(
        content,
        {
          xPercent: 0,
        },
        {
          xPercent: xPercentValue,
          easy: "none",
        },
        0
      )

      .fromTo(
        bodyTimeline,
        {
          time: 0.7,
        },
        {
          time: 0.75 + numberOfCycles,
          ease: "power1.inOut",
          x: "50%",
        },
        0
      )
      .fromTo(
        backCycle,
        {
          time: 0.7,
        },
        {
          time: 0.75 + numberOfCycles,
          ease: "power1.inOut",
          x: "50%",
        },
        0
      )
      .fromTo(
        frontCycle,
        {
          time: 0.2,
        },
        {
          time: 0.25 + numberOfCycles,
          ease: "power1.inOut",
          x: "50%",
        },
        0
      );

    // const timeline = gsap.timeline({});
    // timeline.to(window, {
    //   duration: 1.75,
    //   scrollTo: 0.32 * window.innerHeight,
    //   ease: "power1.inOut"
    // }, 0.3);

    // const timeline = gsap.timeline({});
    // timeline.to({}, {
    //   duration: 1.75,
    //   scrollTo: 0.32 * window.innerHeight,
    //   ease: "power1.inOut"
    // }, 0.3);

  }, []);

  return (
    <>
      <div className="page"></div>

      <div className="content">
        <div className="content-section">
          <div>
            <div className="workTitle">
              <svg viewBox="0 0 800 300">
                <text x="50%" y="50%" textAnchor="middle">
                  Work
                </text>
              </svg>
            </div>
            <p className="paracontent">I'm proud to share the highlights of my work in UI/UX design, UI development, and graphic & web design from my experiences over the past four years at different companies. In the ever-changing world of digital design and development, my role has evolved, and I continue to learn and gain new skills every day.</p>
            <p className="arrow-animated">↓</p>
          </div>
        </div>
        <div className="content-section">
          <div>
            <div className="flex-between">
              <div className="workImg">
                <img src={BlockchainImg} alt="work" />
                <a href="https://blockchainfirm.io/" target="_blank" className="linkicon" rel="noopener noreferrer">
                  <img src={linkIcon} alt="icon" />
                </a>
              </div>
              <div className="WorkContent">
                <h1>Blockchain Platform</h1>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Synopsis :</b> I played a crucial role in the development of <i style={{color: '#d5ff18'}}>blockchainfirm.io</i>, a platform dedicated to blockchain technology. My responsibilities encompassed the entire website design and development process, ensuring a user-friendly and visually appealing interface for clients. From conceptualizing the layout and user flow to coding the website's functionalities, I was instrumental in bringing this project to life and helping Blockchain Firm solidify its presence in the blockchain space.</p>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Tools :</b> PHP, Angular JS, Bootstrap, Ant Framework </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div>
            <div className="flex-between">
              <div className="workImg">
                <img src={NextazyImg} alt="work" />
                <a href="https://www.nextazy.com/" target="_blank" className="linkicon" rel="noopener noreferrer">
                  <img src={linkIcon} alt="icon" />
                </a>
              </div>
              <div className="WorkContent">
                <h1>Trading Platform</h1>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Synopsis :</b> The project involved building a secure, user-friendly platform for buying, selling, and trading cryptocurrencies. I implemented advanced features for charting, technical analysis, and portfolio management, ensuring a seamless and intuitive user experience. The platform was built with scalability in mind, allowing for future growth and expansion.</p>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Tools :</b>HTML, SCSS, Angular JS, Bootstrap, Ant Framework </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div>
            <div className="flex-between">
              <div className="workImg">
                <img src={CurebayImg} alt="work" />
                <a href="https://curebay.com/" target="_blank" className="linkicon" rel="noopener noreferrer">
                  <img src={linkIcon} alt="icon" />
                </a>
              </div>
              <div className="WorkContent">
                <h1>Healthcare Platform</h1>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Synopsis :</b> From the scratch and with creative ideas I designed the UI for the crypto platform which is single platform that connects the banks and crypto holders together.</p>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Tools :</b> HTML, SCSS, React JS, Ant Framework, Tailwind CSS </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div>
            <div className="flex-between">
              <div className="workImg">
                <img src={NexfolioImg} alt="work" />
              </div>
              <div className="WorkContent">
                <h1>Nexfolio</h1>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Synopsis :</b> Driven and passionate software developer with extensive experience in web development. I spearheaded the design and development of Nexfolio, a comprehensive crypto trading platform. My expertise in user interface/user experience (UI/UX) and backend development resulted in a user-friendly platform optimized for efficient crypto trading. My dedication to innovation and excellence ensures I deliver high-quality, secure, and scalable solutions.</p>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Tools :</b> HTML, SCSS, Angular JS, Ant Framework </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div>
            <div className="flex-between">
              <div className="workImg">
                <img src={UptozImg} alt="work" />
                <a href="https://uptoztech.in/" target="_blank" className="linkicon" rel="noopener noreferrer">
                  <img src={linkIcon} alt="icon" />
                </a>
              </div>
              <div className="WorkContent">
                <h1>Uptoz Technology</h1>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Synopsis :</b> I am proud to have designed and developed the website for UptoZ Technologies, a startup IT solutions and services company. Utilizing my expertise in web design and development, I created a user-friendly and visually appealing platform that effectively showcases UptoZ's offerings and enhances their online presence.</p>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Tools :</b> HTML, SCSS, React JS, Tailwind CSS </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div>
            <div className="flex-between">
              <div className="workImg">
                <img src={ImagicaImg} alt="work" />
                <a href="https://imagicainterior.in/" target="_blank" className="linkicon" rel="noopener noreferrer">
                  <img src={linkIcon} alt="icon" />
                </a>
              </div>
              <div className="WorkContent">
                <h1>Imagica</h1>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Synopsis :</b> I was the driving force behind the creation of a user-friendly and aesthetically pleasing website for "Imagicainterior," a respected interior construction firm. From initial concept to final launch, I handled the website's design and development, ensuring a seamless user experience that showcased "Imagicainterior's" impressive portfolio and expertise.</p>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Tools :</b> HTML, CSS, Bootstrap, Javascript </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="content-section">
          <div>
            <div className="flex-between">
              <div className="workImg">
                <img src={SocialImg} alt="work" />
                <a href="https://socihoads.com/" target="_blank" className="linkicon" rel="noopener noreferrer">
                  <img src={linkIcon} alt="icon" />
                </a>
              </div>
              <div className="WorkContent">
                <h1>SocihoAds</h1>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Synopsis :</b> I designed and developed a user-friendly and visually appealing website for "Socihoads," a burgeoning startup in the digital marketing space. My efforts ensured a seamless user experience, effectively showcased the company's services, and contributed to their online presence and brand awareness.</p>
                <p className="paracontent" style={{fontSize: '18px'}}> <b style={{color: '#d5ff18'}}>Tools :</b> HTML, CSS, Bootstrap, Javascript </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section"></div>
      </div>

      <div className="animation-container">
        <svg viewBox="0 -10 315 350">
          <g
            className="dude"
            stroke="#d5ff18"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <g className="leg">
              <path
                className="leg-bottom"
                d="M182,317l-10.4-2.8c-2.7-0.7-4.5-3.2-4.4-6c1.7-13,3-27,3.7-42.1c0.8-16.5,0.7-32,0.1-46.1"
              />
              <path d="M171,220l6-60" />
            </g>
            <g className="leg">
              <path
                className="leg-bottom"
                d="M182,317l-10.2-2.7c-2.8-0.8-4.7-3.4-4.6-6.3c-0.8-13.9-1-29.2-0.2-45.8c0.7-15.2,2.1-29.4,4-42.2"
              />
              <path d="M171,222c0.3-10,4.3-42,5.3-48" />
            </g>

            <g className="arm">
              <path d="M175,75c-0.6,8.7-0.6,18.9,0.8,30.1c0.6,4.6,1.3,8.9,2.2,12.9" />
              <path
                className="arm-bottom"
                d="M186,175c-0.2-3.1-0.4-6.2-0.7-9.3c-1.5-16.9-4.1-32.9-7.3-47.7"
              />
            </g>
            <g className="arm">
              <path d="M178.8,82.2c-1.9,13.1-1.8,25.2-0.8,35.8" />
              <path
                className="arm-bottom"
                d="M186,175c-2.4-7.6-4.7-16.8-6.3-27.2c-1.6-11.3-2-21.3-1.7-29.8"
              />
            </g>
            <path
              className="head"
              d="M195,14.8c-10.8-5.7-23.9,1.3-28.2,12.4c-4.9,13,6.3,28.4,17.8,29.1c13.2,0.8,22.2-16.1,19.5-26.7c-1.6-6.5-5.2-7.1-5.2-7.1"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default WorkData;
