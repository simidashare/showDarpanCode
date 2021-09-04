import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Colors from "../Colors/index.js";
import { FaBars } from "react-icons/fa";

// const colorTheMain = "#01bf71";
// const colorBG = "#000";
// const colorLogo = "#fff";
// const colorIcon = "#fff";
// const colorLink = "#fff";
// const colorBtnBg = "#fff";
// const colorBtnBgFont = "#010606";
// const colorNavBtnLink = " #fff";

const colorTheMain = Colors.colorMain;
const colorBG = Colors.color6th;
const colorLogo = Colors.color2nd;
// const colorIcon = Colors.color2nd;
const colorLink = Colors.color2nd;
const colorBtnBg = Colors.color2nd;
const colorBtnBgFont = Colors.color5th;
const colorNavBtnLink = Colors.color9th;

const bump = keyframes` 

  1% {
    border-radius: none;
  }
   /* 10% {
    box-shadow: 0px 0px 0px;
   } */
 99% {
    box-shadow: 0px 0px 100px rgba(255, 255, 255);
  }
  /* 99% {
    box-shadow: 0px 0px 0px;
   } */
`;

export const Nav = styled.nav`
  background: ${colorBG};
  /* margin-top: ${({ pageIsMain }) => (pageIsMain ? "-8rem" : `0`)}; */
  /* background: ${({ scrollNav }) => (scrollNav ? colorBG : `transparent`)}; */
  /* margin-top: -8rem; */
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
  /* @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 8rem;
  z-index: 1;
  width: 100%;
  padding: 0 2rem;
  max-width: 1100px;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
    padding: 0;
  }
`;
export const NavLogo = styled(LinkR)`
  /* display: flex;
  align-self: center; */
  /*Temp solution due to original logo size issue */
  margin-top: 1rem;
  /* margin-left: 1.4rem; */
  /* justify-self: center;
  align-items: center; */
  cursor: pointer;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: bold;
  color: ${colorLogo};
  @media screen and (max-width: 480px) {
    transform: translateX(-60%) scale(0.9);
    margin-left: 4.8rem;
  }
`;

// export const MobileIcon = styled.div`
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 3.2rem;
//     cursor: pointer;
//     color: ${colorIcon};
//   }
// `;

export const MobileIcon = styled.div`
  /* display: block; */
  /*  position: absolute;
  top: 0;
  right: 0; */
  margin-left: 7rem;
  height: 100%;
  display: flex;
  align-items: center;
  transform: translateX(100%) scale(1.1);
  font-size: 3.6rem;
  cursor: pointer;

  /* &:hover {
    color: ${colorTheMain};
    animation-name: ${bump};
    animation-duration: 2s;
  } */

  @media screen and (max-width: 480px) {
    transform: translateX(80%) scale(1.5);
    /* padding-left: 1.6rem; */
    font-size: 2.8rem;
  }
`;

export const TheFaBars = styled(FaBars)`
  @media screen and (min-width: 900px) {
    &:hover {
      color: ${colorTheMain};
      animation-name: ${bump};
      animation-duration: 0.3s;
      border: 1px solid transparent;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: -22px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 8rem;
`;

export const NavLinks = styled(LinkS)`
  padding: 0 1.6rem;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colorLink};
  cursor: pointer;

  &:hover {
    color: ${colorTheMain};
  }

  &.active {
    border-bottom: 3px solid ${colorTheMain};
  }
  /*by using this "&.active" , we no longer need to add the
  " activeClass='active' "  that required by the  "react-scroll" 
  that going to set to the  "NavLinks" component */
`;

export const NavLinksR = styled(LinkR)`
  padding: 0 1.6rem;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colorLink};
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${colorTheMain};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 5rem;
  background: ${colorTheMain};
  white-space: nowrap;
  padding: 1rem 2.2rem;
  color: ${colorNavBtnLink};
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colorBtnBg};
    color: ${colorBtnBgFont};
  }
`;

export const Img = styled.img`
  width: 60%;
  margin: 0 0 1rem 0;
  padding-right: 0;
`;
