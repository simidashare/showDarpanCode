import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import Colors from "../Colors/index.js";

// const colorBgMain = "#01bf71";
// const colorBgAlt = "#010606";
// const colorBgAlt2 = "#fff";
// const colorDarkMain = "#010606";
// const colorDarkAlt = "#fff";

const colorBgMain = Colors.colorMain;
const colorBgAlt = Colors.color5th;
const colorBgAlt2 = Colors.color2nd;
const colorDarkMain = Colors.color5th;
const colorDarkAlt = Colors.color2nd;

export const ScrollButton = styled(LinkS)`
  border-radius: 5rem;
  background: ${({ primary }) => (primary ? colorBgMain : colorBgAlt)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.4rem 4.8rem" : "1.2rem 3rem")};
  color: ${({ dark }) => (dark ? colorDarkMain : colorDarkAlt)};
  font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.6rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? colorBgAlt2 : colorBgMain)};
  }
`;
