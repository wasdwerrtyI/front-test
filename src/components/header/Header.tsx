import { useState, useEffect } from "react";
import ButtonHeader from "./ButtonHeader";

import {
  burger,
  cross,
  facebookIcon,
  inIcon,
  instagrammIcon,
  twitter,
  waveHeader,
} from "../../assets";

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
                <img src={waveHeader} alt="WaveHeader" />
              </Logo>
              <LogoText>DiveSea</LogoText>
            </LogoContainer>
            <Nav $isOpen={isMenuOpen}>
              <NavLink>DISCOVER</NavLink>
              <NavLink>CREATORS</NavLink>
              <NavLink>SELL</NavLink>
              <NavLink>STATS</NavLink>
              <IconsContainer>
                <img src={instagrammIcon} alt="instagramIcon" />
                <img src={inIcon} alt="insIcon" />
                <img src={facebookIcon} alt="facebookIcon" />
                <img src={twitter} alt="twitterIcon" />
              </IconsContainer>
            </Nav>

            <MobileMenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
              <img src={isMenuOpen ? cross : burger} alt="Menu" />
            </MobileMenuButton>
          </IconAndNavContainer>
          <ButtonContainer>
            <ButtonHeader>CONNECT WALLET</ButtonHeader>
          </ButtonContainer>
        </HeaderContainer>
      </HeaderInner>

      <FixedButtonContainer>
        <ButtonHeader>CONNECT WALLET</ButtonHeader>
      </FixedButtonContainer>
    </>
  );
}

export default Header;
