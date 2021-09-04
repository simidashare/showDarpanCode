import styled from "styled-components";
import Colors from "../Colors";
import { AiFillPlusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const colorContainerFont = Colors.color2nd;
const colorMain = Colors.colorMain;
const colorLightBg1 = Colors.color7th;
const colorLightBg2 = Colors.color5th;
const colorLightText1 = Colors.color8th;
const colorLightText2 = Colors.color5th;

export const ContentContainer = styled.div`
  color: ${colorContainerFont};
  background: ${({ lightBg }) => (lightBg ? colorLightBg2 : colorLightBg1)};
  /* margin-top: 8rem; */
  @media screen and (max-width: 768px) {
    padding: 10rem 0;
    margin-top: 0;
  }
`;

export const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 110rem;
  min-height: 50rem;
  /* display: flex;
  z-index: 1;
  width: 100%;
  max-width: 110rem;
  min-height: 86rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 2.4rem; */
`;

export const LinkListWrapper = styled.ul`
  /* display: flex;
  align-items: center;
  text-align: center;
  margin-right: -22px;
  list-style: none; */
  list-style: disc outside none;
  margin-left: 4rem;
`;

export const LinkItemList = styled.li`
  display: flex;
  padding-top: 0.5rem;
  margin-bottom: 2.5rem;
  text-decoration: none;
  font-size: 2rem;
  line-height: 1.3;
  align-items: center;
  border: 1px solid #ccc;
`;

export const LinkItem = styled.a`
  /* flex: 85%; */
  padding: 0 1.6rem;
  height: 100%;
  text-decoration: none;
  color: ${colorLightText2};
  cursor: pointer;

  &:hover {
    /* border-bottom: 3px solid ${colorMain}; */
    /* color: ${colorLightText1}; */
  }
`;
export const IconWrapper = styled.div`
  /* display: grid;
  place-items: start; */
  font-size: 3.2rem;
`;

export const CloseIcon = styled(AiFillPlusSquare)`
  color: ${colorMain};
  &:hover {
    color: red;
  }
`;

export const OpenIcon = styled(AiOutlinePlusSquare)`
  color: ${colorMain};
  &:hover {
    color: blue;
  }
`;
