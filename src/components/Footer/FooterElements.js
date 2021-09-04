import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../Colors";

// const colorFooterBg = "#101522";
// const colorFooterLinksItems = "#fff";
// const colorFooterLink = "#fff";
// const colorFooterLinkHover ="#01bf71;
// const colorSocialLogo = "#fff";
// const colorWebsiteRights = "#fff";
// const colorSocialIconLink = "#fff";

const colorFooterBg = Colors.color9th;
const colorFooterLinkItems = Colors.color2nd;
const colorFooterLink = Colors.color2nd;
const colorFooterLinkHover = Colors.colorMain;
const colorSocialLogo = Colors.color2nd;
const colorWebsiteRights = Colors.color2nd;
const colorSocialIconLink = Colors.color2nd;

export const FooterContainer = styled.footer`
  background: ${colorFooterBg};
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.8rem 2.4rem;
  max-width: 110rem;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 3.2rem;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.6rem;
  text-align: left;
  width: 16rem;
  color: ${colorFooterLinkItems};
  /* box-sizing:border-box; */

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 1rem;
    width: 100%;
  }
`;
export const FooterLinksTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;
export const FooterLink = styled(Link)`
  color: ${colorFooterLink};
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  transition: all 0.3s ease-out;

  &:hover {
    color: ${colorFooterLinkHover};
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 100rem;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110rem;
  margin: 4rem auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  color: ${colorSocialLogo};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  margin: 1.6rem;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24rem;
`;
export const SocialIconLink = styled.a`
  font-size: 2.4rem;
  color: ${colorSocialIconLink};
`;

export const WebsiteRights = styled.small`
  color: ${colorWebsiteRights};
  margin-bottom: 1.6rem;
`;
