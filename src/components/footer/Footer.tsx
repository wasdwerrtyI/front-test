import React from "react";

import WaveIcon from "../../assets/icons/WaveFooter.svg";
import InstagramIcon from "../../assets/icons/social/instagram.svg";
import LinkedInIcon from "../../assets/icons/social/in.svg";
import FacebookIcon from "../../assets/icons/social/facebook.svg";
import TwitterIcon from "../../assets/icons/social/twitter.svg";

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
              <img src={WaveIcon} alt="DiveSea Logo" />
              DiveSea
            </Logo>
            <MobileSocialLinks>
              <SocialIcon href="#" aria-label="Instagram">
                <img src={InstagramIcon} alt="Instagram" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Facebook">
                <img src={FacebookIcon} alt="Facebook" />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <img src={TwitterIcon} alt="Twitter" />
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
              <img src={InstagramIcon} alt="Instagram" />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" />
            </SocialIcon>
          </DesktopSocialLinks>
        </RightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
