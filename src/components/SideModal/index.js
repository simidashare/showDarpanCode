import { useContext, useState } from "react";
import {
  SideModalContainer,
  SideModalItemWrapper,
  IconWrapper,
  TextWrapper,
  SideModalItem,
  Backdrop,
  Icon,
  CloseIcon,
} from "./SideModalElements";
import { SideModalObjOne, SideModalObjTwo } from "./Data";
import ReactDOM from "react-dom";
import Context from "../../store/index";
import UsefulLinksSection from "../UsefulLinksSection/index";

const ModalOverlay = ({
  onToggle,
  onLink,
  onToggleUsefulLinks,
  onToggleDropdown,
}) => {
  const navigationHandler = (link, placeHolder) => onLink(link, placeHolder);
  // return (window.location.pathname = link);

  return (
    <SideModalContainer>
      <SideModalItemWrapper>
        <Icon onClick={onToggle}>
          <CloseIcon />
        </Icon>
        {SideModalObjOne.map(({ title, icon, link, placeHolder }, i) => {
          return (
            <SideModalItem
              key={i}
              // onClick={() => (window.location.pathname = link)}
              onClick={navigationHandler.bind(null, link, placeHolder)}>
              <IconWrapper>{icon}</IconWrapper>
              <TextWrapper>{title}</TextWrapper>
            </SideModalItem>
          );
        })}
        <SideModalItem
          key={SideModalObjTwo.placeHolder}
          // onClick={navigationHandler.bind(
          //   null,
          //   SideModalObjTwo.link,
          //   SideModalObjTwo.placeHolder
          // )}
          onClick={onToggleUsefulLinks}>
          <IconWrapper>{SideModalObjTwo.icon}</IconWrapper>
          <TextWrapper>{SideModalObjTwo.title}</TextWrapper>
        </SideModalItem>
        {/* <SideModalItem>
          {onToggleDropdown && <UsefulLinksSection />}
        </SideModalItem> */}
      </SideModalItemWrapper>
    </SideModalContainer>
  );
};

const portalElement = document.getElementById("overlays");
const SideModal = () => {
  const ctx = useContext(Context);
  const [showUsefulLinks, setShowUsefulLinks] = useState(false);

  const toggleUsefulLinksHandler = () => {
    setShowUsefulLinks(!showUsefulLinks);
  };

  const confirmCloseHandler = () => {
    setTimeout(() => {
      ctx.confirmClose();
    }, 200);
  };

  const updateLinkHandler = (link, placeHolder) =>
    ctx.updateLinks(link, placeHolder);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          onToggle={confirmCloseHandler}
          onLink={updateLinkHandler}
          onToggleUsefulLinks={toggleUsefulLinksHandler}
          onToggleDropdown={showUsefulLinks}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Backdrop onClick={confirmCloseHandler} />,
        portalElement
      )}
    </>
  );
};

export default SideModal;
