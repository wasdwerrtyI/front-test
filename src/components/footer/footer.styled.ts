import { styled } from "styled-components";

const COLORS = {
  background: "#141416",
  border: "rgba(255, 255, 255, 0.1)",
  divider: "#818181",
  text: {
    primary: "#FFFFFF",
    secondary: "#B9B9B9",
    tertiary: "#999999",
  },
};

const BREAKPOINTS = {
  desktop: "(min-width: 1024px) and (max-width: 1439px)",
  mobile: "(max-width: 1023px)",
};

const CONTAINER_WIDTHS = {
  desktop: "1120px",
  tablet: "890px",
};

const flexCenter = `
  display: flex;
  align-items: center;
`;

export const FooterContainer = styled.footer`
  background: ${COLORS.background};
  padding: 90px 0 0 0;
  border-top: 1px solid ${COLORS.border};
  position: relative;

  @media ${BREAKPOINTS.desktop} {
    padding: 60px 0 0 0;
  }

  @media ${BREAKPOINTS.mobile} {
    padding: 32px 0 0 0;

    &::after {
      content: "";
      position: absolute;
      bottom: 74px;
      left: 33px;
      width: 82%;
      height: 1px;
      background: ${COLORS.divider};
    }
  }
`;

export const FooterContent = styled.div`
  max-width: ${CONTAINER_WIDTHS.desktop};
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${BREAKPOINTS.desktop} {
    max-width: ${CONTAINER_WIDTHS.tablet};
    padding: 0 24px;
  }
`;

export const LogoSection = styled.div`
  ${flexCenter}

  @media ${BREAKPOINTS.mobile} {
    margin-bottom: 32px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  ${flexCenter}
  gap: 7px;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 130%;
  color: ${COLORS.text.primary};
  cursor: pointer;

  @media ${BREAKPOINTS.desktop} {
    font-size: 22px;
    img {
      width: 46px;
      height: 46px;
    }
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 24px;
    img {
      width: 46px;
      height: 46px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 70px;

  @media ${BREAKPOINTS.desktop} {
    gap: 50px;
  }

  @media ${BREAKPOINTS.mobile} {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
    text-align: center;
    align-items: self-start;
    position: relative;
  }
`;

export const NavLink = styled.a`
  color: ${COLORS.text.secondary};
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 27px;
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${COLORS.text.primary};
  }

  @media ${BREAKPOINTS.desktop} {
    font-size: 13px;
    line-height: 19px;
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  ${flexCenter}
  gap: 48px;
  margin-top: 100px;
  justify-content: space-between;
  padding-bottom: 24px;

  @media ${BREAKPOINTS.desktop} {
    margin-top: 60px;
  }

  @media ${BREAKPOINTS.mobile} {
    flex-direction: column-reverse;
    gap: 32px;
    margin-top: 0;
    align-items: center;
  }
`;

export const Copyright = styled.div`
  color: ${COLORS.text.tertiary};
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  white-space: nowrap;

  @media ${BREAKPOINTS.desktop} {
    font-size: 12px;
    line-height: 17px;
  }

  @media ${BREAKPOINTS.mobile} {
    padding-top: 26px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const baseSocialLinks = `
  display: flex;
  align-items: center;
`;

export const SocialLinks = styled.div`
  ${baseSocialLinks}
  gap: 40px;

  @media ${BREAKPOINTS.mobile} {
    gap: 32px;
  }
`;

export const MobileSocialLinks = styled(SocialLinks)`
  @media (min-width: 1024px) {
    display: none;
  }

  @media ${BREAKPOINTS.mobile} {
    gap: 10px;
  }
`;

export const DesktopSocialLinks = styled(SocialLinks)`
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

export const SocialIcon = styled.a`
  ${flexCenter}
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  img {
    width: 20px;
    height: 20px;

    @media ${BREAKPOINTS.desktop} {
      width: 17px;
      height: 17px;
    }

    @media ${BREAKPOINTS.mobile} {
      width: 16px;
      height: 16px;
    }
  }
`;

export const LogoAndNavContainer = styled.div`
  width: 100%;
  ${flexCenter}
  justify-content: space-between;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -25px;
    opacity: 0.25;
    width: 100%;
    height: 1px;
    background-color: ${COLORS.divider};
  }

  @media ${BREAKPOINTS.desktop} {
    &::after {
      bottom: -20px;
    }
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: ${COLORS.text.secondary};
    flex-direction: column;
    align-items: flex-start;

    &::after {
      display: none;
    }
  }
`;
export const MobileFooterText = styled.span`
  display: none;
  @media (max-width: 1024px) {
    display: inline;
  }
`;
