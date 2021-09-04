import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Colors from "../Colors/index.js";

// const colorIcon = "#fff";
// const colorSidebarWrapperFont = "#fff";
// const colorSidebarLinkFontMain = "#fff";
// const colorSidebarLinkFontAlt = "#01bf71";
// const colorSidebarRouteBgMain = "#01bf71";
// const colorSidebarRouteFont = "#010606";
// const colorSidebarRouteBgAlt = "#fff";

const colorIcon = Colors.color2nd;
const colorSidebarWrapperFont = Colors.color2nd;
const colorSidebarLinkFontMain = Colors.color2nd;
const colorSidebarLinkFontAlt = Colors.colorMain;
const colorSidebarRouteBgMain = Colors.colorMain;
const colorBgAlt = Colors.color10th;
const colorSidebarRouteFont = Colors.color5th;
const colorSidebarRouteBgAlt = Colors.color2nd;

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  /* top:0; */
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${colorIcon};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 2.4rem;
  background: transparent;
  font-size: 3.2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${colorSidebarWrapperFont};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 8rem);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 6rem);
  } ;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${colorSidebarLinkFontMain};
  cursor: pointer;

  &:hover {
    color: ${colorSidebarLinkFontAlt};
    transition: 0.2s ease-in-out;
    background: ${colorBgAlt};
  }
`;

export const SidebarLinkR = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${colorSidebarLinkFontMain};
  cursor: pointer;

  &:hover {
    color: ${colorSidebarLinkFontAlt};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 5rem;
  background: ${colorSidebarRouteBgMain};
  white-space: nowrap;
  padding: 1.6rem 6.4rem;
  color: ${colorSidebarRouteFont};
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    background: ${colorSidebarRouteBgAlt};
  }
`;
