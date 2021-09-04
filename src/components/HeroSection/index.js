import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroP2,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video2.mp4";
import { ScrollButton } from "../ScrollButton/ScrollButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome To Darpan Radio</HeroH1>
        <HeroP>FM 98.5 MHz</HeroP>
        <HeroP2>Presented By Raj Batra</HeroP2>
        <HeroBtnWrapper>
          <ScrollButton
            to="introduction"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true">
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ScrollButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
