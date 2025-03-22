import { useState, useEffect } from "react";
import ButtonHeader from "./ButtonHeader";

import burgerIcon from "../../assets/icons/burger.svg";
import crossIcon from "../../assets/icons/cross.svg";
import WaveHeader from "../../assets/icons/WaveHeader.svg";
import instagramIcon from "../../assets/icons/social/instagram.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import facebookIcon from "../../assets/icons/social/facebook.svg";
import insIcon from "../../assets/icons/social/in.svg";

import {
  ButtonContainer,
  FixedButtonContainer,
  HeaderContainer,
  HeaderInner,
  IconAndNavContainer,
  IconsContainer,
  Logo,
  LogoContainer,
  LogoText,
  MobileMenuButton,
  Nav,
  NavLink,
} from "./header.styled";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderInner isScrolled={isScrolled} isOpen={isMenuOpen}>
        <HeaderContainer>
          <IconAndNavContainer>
            <LogoContainer>
              <Logo>
                <img src={WaveHeader} alt="WaveHeader" />
              </Logo>
              <LogoText>DiveSea</LogoText>
            </LogoContainer>
            <Nav $isOpen={isMenuOpen}>
              <NavLink>DISCOVER</NavLink>
              <NavLink>CREATORS</NavLink>
              <NavLink>SELL</NavLink>
              <NavLink>STATS</NavLink>
              <IconsContainer>
                <img src={instagramIcon} alt="instagramIcon" />
                <img src={insIcon} alt="insIcon" />
                <img src={facebookIcon} alt="facebookIcon" />
                <img src={twitterIcon} alt="twitterIcon" />
              </IconsContainer>
            </Nav>

            <MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
              <img src={isMenuOpen ? crossIcon : burgerIcon} alt="Menu" />
            </MobileMenuButton>
          </IconAndNavContainer>
          <ButtonContainer>
            <ButtonHeader text="CONNECT WALLET" />
          </ButtonContainer>
        </HeaderContainer>
      </HeaderInner>

      <FixedButtonContainer>
        <ButtonHeader text="CONNECT WALLET" />
      </FixedButtonContainer>
    </>
  );
}

export default Header;
