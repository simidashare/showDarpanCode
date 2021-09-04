import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

import { ScrollButton } from "../ScrollButton/ScrollButtonElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to,
  isShown,
}) => {
  const scrollBtn = isShown && (
    <ScrollButton
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
      primary={primary ? 1 : 0}
      dark={dark ? 1 : 0}
      dark2={dark2 ? 1 : 0}>
      {buttonLabel}
    </ScrollButton>
  );
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>{scrollBtn}</BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

/**
 *  For the <ScrollButton />
 *  I used the react-scroll properties.
      smooth = enable smooth scroll
      duration = scroll in 500ms
      spy = must be true, to tell scroll add the active class to this button component 
      exact= "true" 
      offset= is to revert the "margin : -8rem" of the <NavContainer/> 
              and make the hover looks normal after the Herosection.
      primary ? 1 : 0  = use 1 and 0 to replace "true" and "false", save some wrtting time
 */
