import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import Colors from "../Colors/index";

// const colorHeroH1 = "#fff";
// const colorHeroP = "#fff";
// const colorHeroP2 = "#fff";
// const colorVideoBg = "#232a34";
// const colorHeroContainer = "#0c0c0c";

const colorHeroH1 = Colors.color2nd;
const colorHeroP = Colors.color2nd;
const colorHeroP2 = Colors.color2nd;
const colorVideoBg = Colors.colorHeroBg;
const colorHeroContainer = Colors.color4th;

export const HeroContainer = styled.div`
  background: ${colorHeroContainer};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  height: 80rem;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colorVideoBg};
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: ${colorHeroH1};
  font-size: 5.8rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const HeroP = styled.p`
  /* margin-top: 2.4rem; */
  margin-top: 3rem;
  color: ${colorHeroP};
  /* font-size: 2.4rem; */
  font-size: 3.6rem;
  text-align: center;
  max-width: 60rem;

  @media screen and (max-width: 768px) {
    /* font-size: 2.4rem; */
    font-size: 2.8rem;
  }

  @media screen and (max-width: 480px) {
    /* font-size: 1.8rem; */
    font-size: 2rem;
  }
`;

export const HeroP2 = styled.p`
  margin-top: 2.2rem;
  color: ${colorHeroP2};
  font-size: 1.6rem;
  text-align: center;
  max-width: 60rem;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.8rem;
  font-size: 2rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.8rem;
  font-size: 2rem;
`;
