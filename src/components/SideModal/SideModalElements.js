import styled from "styled-components";
import Colors from "../Colors/index";
import { FaTimes } from "react-icons/fa";

const colorIcon = Colors.color2nd;
const colorBgMain = Colors.color9th;
const colorBgAlt = Colors.color10th;
const colorTextAlt = Colors.color2nd;
const colorTextMain = Colors.colorMain;

export const SideModalContainer = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  position: fixed;
  height: 100%;
  width: 35rem;
  top: 0;
  left: 0;
  /* padding: 0.6rem; */
  z-index: 999;
  background: ${colorBgMain};
  transition: 0.5s ease-in-out;
  /* padding-top: 1.4rem; */
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const SideModalItemWrapper = styled.ul`
  /* height: auto;
  width: 100%; */

  background: ${colorBgMain};
  list-style: disc outside none;
  /* padding: 1.6rem 0rem; */
  padding-left: 1rem;
`;

export const SideModalItem = styled.li`
  width: 100%;
  height: calc(90vh / 14);
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
  color: ${colorTextAlt};
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${colorTextMain};
    background: ${colorBgAlt};
    transition: all 0.2s ease-in-out;
  }

  &.active {
    background: ${colorBgAlt};
  }
`;

export const IconWrapper = styled.div`
  flex: 15%;
  display: grid;
  place-items: start;
`;

export const TextWrapper = styled.p`
  flex: 85%; ;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 777;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const CloseIcon = styled(FaTimes)`
  color: ${colorIcon};
`;

export const Icon = styled.div`
  /* position: absolute; */
  /* top: 1.8rem;
  right: 2.4rem; */
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
    margin-bottom: 0.5rem;
    background: transparent;
    font-size: 3.2rem;
    cursor: pointer;
    outline: none;
  }
`;
