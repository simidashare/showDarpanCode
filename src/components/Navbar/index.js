//once installed es7 react snippet, just type "rafce"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksR,
  NavBtn,
  NavBtnLink,
  Img,
  TheFaBars,
} from "./NavbarElements";
// import { FaBars } from "react-icons/fa";

import { NavItemData } from "./Data";
import Context from "../../store/index";
import React, { useState, useEffect, useContext } from "react";
// import { useLocation } from "react-router-dom";

import { IconContext } from "react-icons/lib";

import { animateScroll } from "react-scroll";
import Colors from "../Colors";

const Navbar = ({
  // toggle,
  isMain,
  introduction,
  history,
  aimsAndObjectives,
  structure,
  signin,
  detailOne,
  detailTwo,
  detailThree,
  detailFour,
  detailFive,
}) => {
  const [scrollNav, setScrollNav] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const [pageIsMain, setPageIsMain] = useState(false);
  // const location = useLocation();
  // const checkLocation = () => {
  //   console.log(location);
  //   return location.pathname === "/"
  //     ? setPageIsMain(true)
  //     : setPageIsMain(false);
  // };
  // useEffect(() => {
  //   window.addEventListener(`load`, checkLocation);
  // });

  const ctx = useContext(Context);

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, changeNav);
    return () => window.removeEventListener(`scroll`, changeNav);
  }, []);

  const toggleHome = () => {
    if (ctx.placeHolder === "home") {
      return animateScroll.scrollToTop();
      //this is react-scroll function
    }
    ctx.updateLinks(null, "home");
    ctx.confirmClose();
  };
  const toggle = () => ctx.toggle();

  const navItemList = NavItemData.filter((item) => item.id === ctx.placeHolder);
  const showNavLink = navItemList[0].isShow;
  const navItem = navItemList[0].data.map((item) => (
    <NavItem key={item.to + Math.random()}>
      {showNavLink && (
        <NavLinks
          to={item.to}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}>
          {item.description}
        </NavLinks>
      )}
    </NavItem>
  ));

  const main = (
    <>
      <IconContext.Provider value={{ color: Colors.colorIcon }}>
        {/* this give our burger icon style, try to check with "red" */}
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <Img
                src={require("../../images/DarpanLogo.gif").default}
                alt="Darpan Radio Logo"
              />
            </NavLogo>
            <NavMenu>
              {/* <NavItem>
                <NavLinks
                  to={introduction}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  {detailOne}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={history}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  {detailTwo}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to={aimsAndObjectives}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  {detailThree}
                </NavLinks>
              </NavItem> 
               <NavItem>
                <NavLinks
                  to={structure}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  {detailFour}
                </NavLinks>
              </NavItem> */}
              {navItem}
            </NavMenu>
            {/* <NavBtn>
              <NavBtnLink to={signin}>{detailFive}</NavBtnLink>
            </NavBtn> */}
            <MobileIcon onClick={toggle}>
              {/* <FaBars /> */}
              <TheFaBars />
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
  // const notMain = (
  //   <>
  //     <IconContext.Provider value={{ color: "#fff" }}>
  //       <Nav scrollNav={scrollNav}>
  //         <NavbarContainer>
  //           <NavLogo to="/" onClick={toggleHome}>
  //             <Img
  //               src={require("../../images/DarpanLogo.gif").default}
  //               alt="Darpan Radio"
  //             />
  //           </NavLogo>

  //           <NavMenu>
  //             <NavItem>
  //               <NavLinksR to={introduction}>{detailOne}</NavLinksR>
  //             </NavItem>
  //           </NavMenu>
  //           {/* <NavBtn>
  //             <NavBtnLink to={signin}>{detailFive}</NavBtnLink>
  //           </NavBtn> */}
  //           <MobileIcon onClick={toggle}>
  //             {/* <FaBars /> */}
  //             <TheFaBars />
  //           </MobileIcon>
  //         </NavbarContainer>
  //       </Nav>
  //     </IconContext.Provider>
  //   </>
  // );

  // let renderItem = isMain ? main : notMain;

  // return renderItem;

  return main;
};

export default Navbar;
