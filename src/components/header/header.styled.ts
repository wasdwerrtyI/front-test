import { styled } from "styled-components";

const COLORS = {
  background: {
    primary: "#FFFFFF",
    transparent: "transparent",
  },
  text: {
    primary: "#000000",
    secondary: "#606060",
  },
  border: {
    light: "#CBCBCB",
    lighter: "#EEE",
  },
  hover: "#C3C3C3",
};

const BREAKPOINTS = {
  values: {
    mobile: 1023,
    tablet: 1439,
    desktop: 1920,
    largeDesktop: 2560,
  },
  up: {
    tablet: "(min-width: 1024px)",
    desktop: "(min-width: 1920px)",
    largeDesktop: "(min-width: 2560px)",
  },
  down: {
    mobile: "(max-width: 1023px)",
    tablet: "(max-width: 1439px)",
  },
  between: {
    tabletAndDesktop: "(min-width: 1024px) and (max-width: 1439px)",
  },
};

const SIZES = {
  container: {
    maxWidth: "1920px",
    tablet: "890px",
    desktop: "1245px",
  },
  logo: {
    default: "53px",
    tablet: "38px",
    mobile: "46px",
  },
  padding: {
    mobile: "21px 30px",
    tablet: "20px 67px",
    desktop: "45px 97px",
    default: "25px 97px",
  },
};

const FONTS = {
  primary: '"Inter", sans-serif',
  weights: {
    medium: 500,
    semiBold: 600,
  },
};

const flexCenter = `
  display: flex;
  align-items: center;
`;

const buttonReset = `
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const rotateAnimation = `
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;

export const HeaderInner = styled.div<{ isScrolled: boolean; isOpen: boolean }>`
  width: 100%;
  max-width: 100%;
  background: ${({ isScrolled }) =>
    isScrolled ? COLORS.background.primary : COLORS.background.transparent};
  border-bottom-right-radius: ${({ isScrolled }) =>
    isScrolled ? "1.25rem" : "0"};
  border-bottom-left-radius: ${({ isScrolled }) =>
    isScrolled ? "1.25rem" : "0"};
  margin: 0 auto;
  will-change: transform;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.05)" : "none"};

  @media ${BREAKPOINTS.down.mobile} {
    height: ${({ isOpen }) => (isOpen ? "100vh" : "auto")};
  }
`;

export const HeaderContainer = styled.header`
  ${flexCenter}
  justify-content: space-between;
  padding: ${SIZES.padding.default};
  font-family: ${FONTS.primary};
  margin: 0 auto;
  width: 100%;
  max-width: ${SIZES.container.maxWidth};

  @media ${BREAKPOINTS.between.tabletAndDesktop} {
    min-width: ${SIZES.container.tablet};
    padding: ${SIZES.padding.tablet};
  }

  @media ${BREAKPOINTS.up.desktop} {
    transform: scale(1.25);
    width: 80%;
    min-width: ${SIZES.container.desktop};
    padding: ${SIZES.padding.desktop};
  }

  @media ${BREAKPOINTS.up.largeDesktop} {
    transform: scale(1.5);
    width: 66.67%;
  }

  @media ${BREAKPOINTS.down.mobile} {
    padding: ${SIZES.padding.mobile};
  }
`;

export const Logo = styled.div`
  width: ${SIZES.logo.default};
  height: ${SIZES.logo.default};
  font-size: 24px;
  cursor: pointer;
  flex-shrink: 0;

  @media ${BREAKPOINTS.between.tabletAndDesktop} {
    width: ${SIZES.logo.tablet};
    height: ${SIZES.logo.tablet};
  }

  @media ${BREAKPOINTS.down.mobile} {
    width: ${SIZES.logo.mobile};
    height: ${SIZES.logo.mobile};
  }
`;

export const LogoText = styled.div`
  display: none;

  @media ${BREAKPOINTS.down.mobile} {
    font-family: ${FONTS.primary};
    font-weight: ${FONTS.weights.semiBold};
    font-size: 22px;
    line-height: 24px;
    display: block;
  }
`;

export const LogoContainer = styled.div`
  ${flexCenter}
  gap: 7px;
`;

export const Nav = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  gap: 50px;
  font-family: ${FONTS.primary};
  font-weight: ${FONTS.weights.medium};
  font-size: 18px;
  line-height: 24px;

  @media ${BREAKPOINTS.between.tabletAndDesktop} {
    gap: 32px;
    font-size: 14px;
    line-height: 16px;
  }

  @media ${BREAKPOINTS.down.mobile} {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: fixed;
    height: ${({ $isOpen }) => ($isOpen ? "100vh" : "")};
    top: 107px;
    left: 0;
    right: 0;
    width: 101%;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    background-color: ${COLORS.background.primary};
    padding: 44px 0px 44px 33px;
    z-index: 100;
    border-bottom: 1px solid ${COLORS.border.lighter};

    button {
      font-size: 40px;
      line-height: 42px;
      color: ${COLORS.text.secondary};
    }
  }
`;

export const NavLink = styled.button`
  ${buttonReset}
  color: ${COLORS.text.primary};

  &:hover {
    border-radius: 10px;
    background-color: ${COLORS.hover};
  }

  @media ${BREAKPOINTS.down.mobile} {
    font-size: 16px;
    padding: 8px 0;
  }
`;

export const IconAndNavContainer = styled.div`
  width: auto;
  ${flexCenter}
  justify-content: space-between;
  gap: 30px;

  @media ${BREAKPOINTS.down.mobile} {
    width: 100%;
    justify-content: flex-start;
    padding-bottom: 30px;
    border-bottom: 0.5px solid ${COLORS.border.light};
  }
`;

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  ${buttonReset}
  display: none;
  position: relative;
  transition: all 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "scale(1.1)" : "scale(1)")};

  &:hover {
    transform: ${({ $isOpen }) => ($isOpen ? "scale(1.15)" : "scale(1.1)")};
  }

  @media ${BREAKPOINTS.down.mobile} {
    display: block;
    margin-left: auto;
  }

  img {
    width: 40px;
    height: 40px;
    ${rotateAnimation}
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const ButtonContainer = styled.div`
  @media ${BREAKPOINTS.down.mobile} {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  display: none;

  @media ${BREAKPOINTS.down.mobile} {
    ${flexCenter}
    gap: 40px;
    margin-top: 20px;

    img {
      width: 24px;
      height: 24px;
      filter: invert(33%) sepia(0%) saturate(0%) hue-rotate(246deg)
        brightness(96%) contrast(92%);
    }
  }
`;

export const FixedButtonContainer = styled.div`
  display: none;

  @media ${BREAKPOINTS.down.mobile} {
    position: fixed;
    bottom: 40px;
    left: 0;
    right: 0;
    ${flexCenter}
    justify-content: center;
    z-index: 1000;
    padding: 0 30px;
    pointer-events: none;
    > button {
      pointer-events: auto;
      max-width: 400px;
      width: 100%;
    }
  }
`;
