import {
  BroadcastingContainer,
  BroadcastingH1,
  BroadcastingWrapper,
  BroadcastingCard,
  BroadcastingIcon,
  BroadcastingH2,
  BroadcastingP,
} from "./BroadcastingElements";

import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";

const Broadcasting = () => {
  return (
    <>
      <BroadcastingContainer>
        <BroadcastingH1>test</BroadcastingH1>
        <BroadcastingWrapper>
          <BroadcastingCard>
            <BroadcastingIcon src={Icon1} />
            <BroadcastingH2>test2</BroadcastingH2>
            <BroadcastingP>test3</BroadcastingP>
          </BroadcastingCard>
          <BroadcastingCard>
            <BroadcastingIcon src={Icon2} />
            <BroadcastingH2>test2</BroadcastingH2>
            <BroadcastingP>test3</BroadcastingP>
          </BroadcastingCard>
          <BroadcastingCard>
            <BroadcastingIcon src={Icon3} />
            <BroadcastingH2>test2</BroadcastingH2>
            <BroadcastingP>test3</BroadcastingP>
          </BroadcastingCard>
        </BroadcastingWrapper>
      </BroadcastingContainer>
    </>
  );
};

export default Broadcasting;
