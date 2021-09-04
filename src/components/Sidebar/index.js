import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrapper,
  SidebarRoute,
  SidebarLinkR,
} from "./SidebarElements";

const Sidebar = ({
  isOpen,
  toggle,
  introduction,
  history,
  aimsAndObjectives,
  structure,
  signin,
  isMain,
  detailOne,
  detailTwo,
  detailThree,
  detailFour,
  detailFive,
}) => {
  const main = (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to={introduction} onClick={toggle}>
              {detailOne}
            </SidebarLink>
            <SidebarLink to={history} onClick={toggle}>
              {detailTwo}
            </SidebarLink>
            <SidebarLink to={aimsAndObjectives} onClick={toggle}>
              {detailThree}
            </SidebarLink>
            <SidebarLink to={structure} onClick={toggle}>
              {detailFour}
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrapper>
            <SidebarRoute to={signin}>{detailFive}</SidebarRoute>
          </SideBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );

  const notMain = (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLinkR to={introduction} onClick={toggle}>
              {detailOne}
            </SidebarLinkR>
            <SidebarLinkR to={history} onClick={toggle}>
              {detailTwo}
            </SidebarLinkR>
            <SidebarLinkR to={aimsAndObjectives} onClick={toggle}>
              {detailThree}
            </SidebarLinkR>
            <SidebarLinkR to={structure} onClick={toggle}>
              {detailFour}
            </SidebarLinkR>
          </SidebarMenu>
          <SideBtnWrapper>
            <SidebarRoute to={signin}>{detailFive}</SidebarRoute>
          </SideBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );

  let renderItem = isMain ? main : notMain;

  return renderItem;
};

export default Sidebar;
