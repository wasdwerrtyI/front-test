import styled, { keyframes } from "styled-components";

const COLORS = {
  text: {
    primary: "#141416",
    secondary: "#676767",
    tertiary: "#848586",
    dark: "#23262F",
    light: "#201f1f",
    black: "#000000",
    white: "#ffffff",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F1F1F1",
    dots: "#E6E8EC",
    fcfcfd: "#FCFCFD",
  },
};

const BREAKPOINTS = {
  desktop: "(min-width: 1024px) and (max-width: 1439px)",
  mobile: "(max-width: 1024px)",
  minDesktop: "(min-width: 1024px)",
};

const FONTS = {
  poppins: '"Poppins", sans-serif',
  inter: '"Inter", sans-serif',
  publicSans: '"Public Sans", sans-serif',
};

const SIZES = {
  padding: {
    desktop: {
      top: "215px",
      left: "100px",
      bottom: "170px",
    },
    tablet: {
      top: "152px",
      left: "67px",
      bottom: "115px",
    },
    mobile: {
      vertical: "180px",
      horizontal: "20px",
      bottom: "175px",
    },
  },
  borderRadius: {
    large: "24px",
    medium: "18px",
    small: "14px",
    xsmall: "12px",
  },
  images: {
    desktop: {
      main: "360px",
      secondary: "360px",
    },
    tablet: {
      main: "240px",
      secondary: "230px",
    },
    mobile: {
      main: "210px",
      secondary: "170px",
    },
  },
};

const smoothText = `
  -webkit-font-smoothing: antialiased;
  backface-visibility: hidden;
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(120%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInArrow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeroContainer = styled.div`
  padding-top: ${SIZES.padding.desktop.top};
  padding-left: ${SIZES.padding.desktop.left};
  padding-bottom: ${SIZES.padding.desktop.bottom};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-out;

  @media ${BREAKPOINTS.desktop} {
    padding-top: ${SIZES.padding.tablet.top};
    padding-left: ${SIZES.padding.tablet.left};
    padding-bottom: ${SIZES.padding.tablet.bottom};
  }

  @media ${BREAKPOINTS.mobile} {
    flex-direction: column;
    padding: ${SIZES.padding.mobile.vertical} ${SIZES.padding.mobile.horizontal};
    ${SIZES.padding.mobile.bottom};
    align-items: center;
  }
`;

export const Wave = styled.div`
  position: absolute;
  top: 50px;
  right: 190px;
  z-index: 3;

  transition: transform 0.3s ease;
  animation: ${fadeInArrow} 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1300ms backwards;

  img {
    width: 100%;
    height: 100%;

    path {
      transition: stroke 0.3s ease;
    }
  }
  @media ${BREAKPOINTS.desktop} {
    top: 30px;
    right: 95px;
    img {
      width: 70%;
    }
  }

  @media ${BREAKPOINTS.mobile} {
    top: 30px;
    right: -30px;
    img {
      width: 45%;
    }
  }
`;

export const ContentSection = styled.div`
  position: relative;
  padding-right: 50px;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;

  @media ${BREAKPOINTS.mobile} {
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  font-family: ${FONTS.poppins};
  font-style: normal;
  font-weight: 600;
  font-size: 76px;
  line-height: 84px;
  letter-spacing: -3px;
  color: ${COLORS.text.primary};
  margin: 0 0 24px 0;
  animation: ${fadeIn} 1s ease-out 0.2s backwards;
  position: relative;
  display: inline-block;
  ${smoothText}

  @media ${BREAKPOINTS.desktop} {
    margin: 0 0 15px 0;
    letter-spacing: -2px;
    font-size: 54px;
    line-height: 62px;
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -2px;
    margin: 0 0 16px 0;
    text-align: center;
  }
`;

export const CreatorsLabel = styled.div`
  font-size: 10px;
  font-weight: 600;
  font-family: ${FONTS.poppins};
  line-height: 12px;
  color: ${COLORS.text.light};
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0.6;

  @media ${BREAKPOINTS.minDesktop} {
    display: none;
  }

  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background-color: ${COLORS.text.light};
    opacity: 0.6;
  }
`;

export const HorizontalLine = styled.div`
  width: 195px;
  height: 1px;
  background-color: ${COLORS.text.light};
  margin-bottom: 10px;

  @media ${BREAKPOINTS.desktop} {
    width: 140px;
  }

  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

export const Description = styled.p`
  font-family: ${FONTS.inter};
  font-size: 18px;
  line-height: 28px;
  color: ${COLORS.text.secondary};
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 44px;
  max-width: 490px;
  transition: color 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.4s forwards;
  ${smoothText}

  &:hover {
    color: ${COLORS.text.dark};
  }

  @media ${BREAKPOINTS.desktop} {
    margin-bottom: 36px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 11px;
    line-height: 18px;
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: 100px;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.6s forwards;
  ${smoothText}

  @media ${BREAKPOINTS.desktop} {
    margin-bottom: 58px;
  }

  @media ${BREAKPOINTS.mobile} {
    gap: 17px;
    margin-bottom: 40px;
    width: 100%;
    justify-content: center;
  }
`;

export const StatsGroup = styled.div`
  display: flex;
  gap: 60px;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out 0.8s forwards;
  ${smoothText}

  @media ${BREAKPOINTS.desktop} {
    gap: 40px;
  }

  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

export const StatItem = styled.div`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatValue = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${COLORS.text.primary};
  line-height: 42px;
  font-family: ${FONTS.publicSans};
  transition: color 0.3s ease;

  @media ${BREAKPOINTS.desktop} {
    font-size: 26px;
    line-height: 30px;
  }
`;

export const StatLabel = styled.div`
  font-family: ${FONTS.inter};
  font-weight: 500;
  font-size: 12px;
  color: ${COLORS.text.tertiary};
  margin-top: 10px;
  line-height: 16px;
  transition: color 0.3s ease;

  @media ${BREAKPOINTS.desktop} {
    font-size: 9px;
    line-height: 13px;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  min-width: 720px;
  max-width: 720px;
  animation: ${fadeIn} 1s ease-out 0.8s backwards;

  @media ${BREAKPOINTS.desktop} {
    min-width: 485px;
    max-width: 485px;
  }

  @media ${BREAKPOINTS.mobile} {
    min-width: auto;
    max-width: 100%;
    width: 100%;
    justify-content: flex-end;
    margin-top: 20px;
    position: relative;
  }
`;

export const MainImage = styled.div`
  border-radius: ${SIZES.borderRadius.large};
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  animation: ${slideInFromRight} 1s cubic-bezier(0.4, 0, 0.2, 1) 200ms backwards;

  .blur-nft {
    display: flex;
    position: absolute;
    filter: blur(44px);
    opacity: 0.7;
  }

  .image-left {
    width: ${SIZES.images.desktop.main};
    height: auto;
    border-radius: ${SIZES.borderRadius.large};
    transition: filter 0.3s ease;
  }

  @media ${BREAKPOINTS.desktop} {
    .image-left {
      width: ${SIZES.images.tablet.main};
    }
  }

  @media ${BREAKPOINTS.mobile} {
    left: 60px;
    .image-left {
      border-radius: ${SIZES.borderRadius.small};
      width: ${SIZES.images.mobile.main};
    }
  }
`;

export const SecondaryImage = styled.div`
  border-radius: ${SIZES.borderRadius.large};
  position: absolute;
  bottom: -80px;
  right: -20px;
  z-index: 1;
  transition: transform 0.3s ease;

  animation: ${slideInFromRight} 1s cubic-bezier(0.4, 0, 0.2, 1) 400ms backwards;
  top: 185px;

  .image-right {
    width: ${SIZES.images.desktop.secondary};
    height: auto;
    border-radius: ${SIZES.borderRadius.large};
    transition: filter 0.3s ease;
  }

  .blur-nft {
    display: flex;
    position: absolute;
    filter: blur(44px);
    opacity: 0.7;
  }

  @media ${BREAKPOINTS.desktop} {
    bottom: 0px;
    top: 130px;
    .image-right {
      width: ${SIZES.images.tablet.secondary};
    }
  }

  @media ${BREAKPOINTS.mobile} {
    position: relative;
    top: 95px;
    right: -70px;
    .image-right {
      border-radius: ${SIZES.borderRadius.xsmall};
      width: ${SIZES.images.mobile.secondary};
    }
  }
`;

export const DotPattern = styled.div`
  position: absolute;
  top: -12px;
  right: -53px;
  width: 170px;
  height: 190px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 16px 16px;
  opacity: 0.5;

  @media ${BREAKPOINTS.desktop} {
    gap: 6px;
    right: -85px;
  }

  @media ${BREAKPOINTS.mobile} {
    width: 120px;
    height: 140px;
    right: -90px;
    gap: 8px;
  }
`;

export const ImgFirst = styled.div`
  position: relative;
`;

export const ImgSecond = styled.div`
  position: absolute;
  left: 0px;
  top: 24px;
  opacity: 0.8;

  @media ${BREAKPOINTS.desktop} {
    img {
      width: 230px;
    }
  }
`;

export const Bonus = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${COLORS.text.black};
  transition: color 0.3s ease;

  @media ${BREAKPOINTS.desktop} {
    letter-spacing: 0px;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 11px;
    line-height: 18px;
  }
`;
