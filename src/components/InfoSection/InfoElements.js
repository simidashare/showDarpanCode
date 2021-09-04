import styled from "styled-components";
import Colors from "../Colors/index.js";

// const colorMain = "#01bf71";
// const colorLightBg1 = "#f9f9f9";
// const colorLightBg2 = "#010606";
// const colorLightText1 = "#f7f8fa";
// const colorLightText2 = "#010606";
// const colorDarkText1 = "#010606";
// const colorDarkText2 = "#fff";

const colorMain = Colors.colorMain;
const colorLightBg1 = Colors.color7th;
const colorLightBg2 = Colors.color5th;
const colorLightText1 = Colors.color8th;
const colorLightText2 = Colors.color5th;
const colorDarkText1 = Colors.color5th;
const colorDarkText2 = Colors.color2nd;

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? colorLightBg1 : colorLightBg2)};
  padding: 8rem 0;
  @media screen and (max-width: 768px) {
    padding: 10rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  /* grid-auto-columns: minmax(auto 1fr); */
  grid-auto-columns: minmax(auto 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 54rem;
  padding-top: 0;
  padding-bottom: 6rem;
`;

export const TopLine = styled.p`
  color: ${colorMain};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  font-weight: 600;
  margin-bottom: 2.4rem;
  line-height: 1.1;
  font-size: 4.8rem;
  color: ${({ lightText }) => (lightText ? colorLightText1 : colorLightText2)};

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 44rem;
  margin-bottom: 3.5rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ darkText }) => (darkText ? colorDarkText1 : colorDarkText2)};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  max-width: 55.5rem;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 1rem 0;
  padding-right: 0;
`;
