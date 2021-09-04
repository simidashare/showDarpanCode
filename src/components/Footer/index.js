import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import Context from "../../store/index";
import { useContext } from "react";

const Footer = () => {
  const ctx = useContext(Context);

  const toggleHome = () => {
    if (ctx.placeHolder === "home") {
      return animateScroll.scrollToTop();
      //this is react-scroll function
    }
    ctx.updateLinks(null, "home");
    ctx.confirmClose();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>Introduction</FooterLinksTitle>
              <FooterLink to="/signin">History</FooterLink>
              <FooterLink to="/signin">Aims and Objectives</FooterLink>
              <FooterLink to="/signin">Structure</FooterLink>
              <FooterLink to="/signin">Sign In</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Introduction</FooterLinksTitle>
              <FooterLink to="/signin">History</FooterLink>
              <FooterLink to="/signin">Aims and Objectives</FooterLink>
              <FooterLink to="/signin">Structure</FooterLink>
              <FooterLink to="/signin">Sign In</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinksTitle>Introduction</FooterLinksTitle>
              <FooterLink to="/signin">History</FooterLink>
              <FooterLink to="/signin">Aims and Objectives</FooterLink>
              <FooterLink to="/signin">Structure</FooterLink>
              <FooterLink to="/signin">Sign In</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinksTitle>Last</FooterLinksTitle>
              <FooterLink to="/signin">History</FooterLink>
              <FooterLink to="/signin">Aims and Objectives</FooterLink>
              <FooterLink to="/signin">Structure</FooterLink>
              <FooterLink to="/signin">Sign In</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Darpan Radio
            </SocialLogo>
            <WebsiteRights>
              Copyright &#169; {new Date().getFullYear()} Darpan Radio. All
              Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/pages/Darpan-Hindi-Radio/521649311190009"
                target="_blank"
                arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                arial-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                arial-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com"
                target="_blank"
                arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
