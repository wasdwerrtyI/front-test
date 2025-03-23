import React from "react";

import {
  facebookIcon,
  inIcon,
  instagrammIcon,
  twitter,
  waveFooter,
} from "../../assets";

import {
  Copyright,
  DesktopSocialLinks,
  FooterContainer,
  Logo,
  LogoSection,
  MobileFooterText,
  MobileSocialLinks,
  Navigation,
  NavLink,
  RightSection,
  SocialIcon,
  FooterContent,
  LogoAndNavContainer,
} from "./footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoAndNavContainer>
          <LogoSection>
            <Logo>
              <img src={waveFooter} alt="DiveSea Logo" />
              DiveSea
            </Logo>
            <MobileSocialLinks>
              <SocialIcon href="#" aria-label="Instagram">
                <img src={instagrammIcon} alt="Instagram" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <img src={inIcon} alt="LinkedIn" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <img src={twitter} alt="Twitter" />
              </SocialIcon>
            </MobileSocialLinks>
          </LogoSection>

          <Navigation>
            <NavLink href="#">Privacy Policy</NavLink>
            <NavLink href="#">Term & Conditions</NavLink>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Contact</NavLink>
          </Navigation>
        </LogoAndNavContainer>

        <RightSection>
          <Copyright>
            &copy; 2023
            <MobileFooterText> DiveSea All Rights Reserved.</MobileFooterText>
          </Copyright>
          <DesktopSocialLinks>
            <SocialIcon href="#" aria-label="Instagram">
              <img src={instagrammIcon} alt="Instagram" />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <img src={inIcon} alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <img src={twitter} alt="Twitter" />
            </SocialIcon>
          </DesktopSocialLinks>
        </RightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
