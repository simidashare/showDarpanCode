import styled from "styled-components";
import Colors from "../Colors";

// const colorContainerFont = Colors.color2nd;
// const colorMain = Colors.colorMain;
// const colorLightText1 = Colors.color8th;
// const colorLightText2 = Colors.color5th;
// const colorDarkText1 = Colors.color5th;
// const colorDarkText2 = Colors.color2nd;
// const colorLightBg1 = Colors.color7th;
// const colorLightBg2 = Colors.color5th;

export const IframeContainer = styled.div`
  display: flex;
  z-index: 1;
  /* width: 100%;*/
  min-height: 86rem;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Iframe = styled.iframe`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
