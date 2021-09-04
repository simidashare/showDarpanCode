import { IframeContainer, Iframe } from "./IframeSectionElements";

const IframeSection = ({ src }) => {
  return (
    <IframeContainer>
      <Iframe src={src} sandbox="" scrolling="auto" />
    </IframeContainer>
  );
};

export default IframeSection;
