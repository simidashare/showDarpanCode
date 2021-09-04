import styled from "styled-components";
import Colors from "../Colors/index.js";

// const colorContainerBg = `#010606`;
// const colorCardBg = `#fff`;
// const colorFont = "#fff";

const colorContainerBg = Colors.color5th;
const colorCardBg = Colors.color2nd;
const colorFont = Colors.color2nd;

export const BroadcastingContainer = styled.div`
  height: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colorContainerBg};

  @media screen and (max-width: 768px) {
    height: 110rem;
  }
  @media screen and (max-width: 768px) {
    height: 130rem;
  }
`;

export const BroadcastingWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1.6rem;
  padding: 0 5rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;
export const BroadcastingCard = styled.div`
  background: ${colorCardBg};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  max-height: 340px;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    /* transition: all 0.2s ease-in-out; */
    cursor: pointer;
  }
`;

export const BroadcastingIcon = styled.img`
  height: 16rem;
  width: 16rem;
  margin-bottom: 1rem;
`;

export const BroadcastingH1 = styled.h1`
  font-size: 4rem;
  color: ${colorFont};
  margin-bottom: 6.4rem;

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;
export const BroadcastingH2 = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const BroadcastingP = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;
