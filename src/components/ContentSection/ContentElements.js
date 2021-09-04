import styled from "styled-components";
import Colors from "../Colors";

const colorContainerFont = Colors.color2nd;
const colorMain = Colors.colorMain;
const colorLightBg1 = Colors.color7th;
const colorLightBg2 = Colors.color5th;
const colorLightText1 = Colors.color8th;
const colorLightText2 = Colors.color5th;
const colorDarkText1 = Colors.color5th;
const colorDarkText2 = Colors.color2nd;

export const ContentContainer = styled.div`
  color: ${colorContainerFont};
  background: ${({ lightBg }) => (lightBg ? colorLightBg1 : colorLightBg2)};
  margin-top: 8rem;
  @media screen and (max-width: 768px) {
    padding: 10rem 0;
    margin-top: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 110rem;
  min-height: 86rem;
  justify-content: center;
  margin: 0 auto;
  padding: 0 2.4rem;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const ContentRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr auto);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col1 col1 col1 col2"` : `"col2 col1 col1 col1"`};
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col1 ' 'col2 col2'` : ` 'col2 col2' 'col1 col1'`};
  }
`;
export const ContentColumn1 = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
  grid-area: col1;
`;

export const ContentColumn2 = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
  grid-area: col2;
`;

export const ContentTextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 6rem;
`;
export const TopLine = styled.p`
  color: ${colorMain};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.6rem;
  letter-spacing: 0.14rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
`;
export const Heading = styled.h1`
  color: ${({ lightText }) => (lightText ? colorLightText1 : colorLightText2)};
  font-size: 4.8rem;
  font-weight: 600;
  margin-bottom: 2.4rem;
  line-height: 1.1;
  /* overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto; */

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;
// export const Subtitle = styled.p`
//   text-align: justify;
//   max-width: 65ch;
//   margin-bottom: 3.5rem;
//   font-size: 1.6rem;
//   line-height: 2.4rem;
//   color: ${({ darkText }) => (darkText ? colorDarkText1 : colorDarkText2)};

// `;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  max-width: 65ch;
  margin-bottom: 3.5rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ darkText }) => (darkText ? colorDarkText1 : colorDarkText2)};
  text-align: justify;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImgWrap = styled.div`
  max-width: 45.5rem;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 1rem 0;
  padding-right: 0;
`;
