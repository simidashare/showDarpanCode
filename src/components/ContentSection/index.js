import { ScrollButton } from "../ScrollButton/ScrollButtonElements";
import {
  ContentContainer,
  ContentWrapper,
  ContentRow,
  ContentColumn1,
  ContentColumn2,
  ContentTextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./ContentElements";

const ContentSection = ({
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
  style,
  to,
}) => {
  return (
    <>
      <ContentContainer lightBg={lightBg} id={id}>
        <ContentWrapper>
          <ContentRow imgStart={imgStart}>
            <ContentColumn1>
              <ContentTextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ScrollButton
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    style={style}>
                    {buttonLabel}
                  </ScrollButton>
                </BtnWrap>
              </ContentTextWrapper>
            </ContentColumn1>
            <ContentColumn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </ContentColumn2>
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </>
  );
};

export default ContentSection;
