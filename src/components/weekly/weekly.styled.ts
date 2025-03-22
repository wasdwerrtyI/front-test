import { styled } from "styled-components";
import { SwiperSlide } from "swiper/react";

const COLORS = {
  background: "#f1f1f1",
  card: {
    background: "#ffffff",
    title: "#23262f",
    buttonHover: "#141416",
    button: "#23262f",
  },
  text: {
    title: "#c5c5c5",
    bidLabel: "#94a3b8",
    price: "#141416",
    timer: "#ffffff",
    buttonText: "#ffffff",
  },
  timer: {
    background: "rgba(28, 28, 28, 0.35)",
    border: "rgba(28, 28, 28, 0.08)",
  },
  slider: {
    background: "#fcfcfd",
  },
  stick: "#e6e8ec",
};

const BREAKPOINTS = {
  tabletDesktop: "(min-width: 375px) and (max-width: 1440px)",
  desktop: "(min-width: 1024px) and (max-width: 1440px)",
  tablet: "(max-width: 1024px)",
};

const flexCenter = `
  display: flex;
  align-items: center;
`;

const flexBetween = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeeklyContainer = styled.div`
  padding: 70px 0px 70px 0px;
  background: ${COLORS.background};
  overflow: hidden;
  @media ${BREAKPOINTS.tabletDesktop} {
    padding: 50px 0px 50px 0px;
  }

  .swiper {
    position: relative;
    display: flex;
    gap: 40px;
    overflow-x: auto;
    padding: 70px 0;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    padding-left: calc(50% - 140px);
    padding-right: calc(50% - 140px);
    &::-webkit-scrollbar {
      display: none;
    }
    @media ${BREAKPOINTS.tabletDesktop} {
      padding: 50px 0;
      gap: 32px;
      padding-left: calc(50% - 105px);
      padding-right: calc(50% - 105px);
    }
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 46px;
  font-weight: 600;
  line-height: 48px;
  color: ${COLORS.text.title};
  text-align: center;
  margin: 0;
  @media ${BREAKPOINTS.desktop} {
    font-size: 32px;
    line-height: 36px;
  }
  @media ${BREAKPOINTS.tablet} {
    font-size: 30px;
    line-height: 30px;
  }
`;

export const NFTImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }
  @media ${BREAKPOINTS.tabletDesktop} {
    width: 190px;
    height: 190px;
    margin-bottom: 14px;
  }
`;

export const Timer = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
  background: ${COLORS.timer.background};
  backdrop-filter: blur(4.71px);
  border: 1px solid ${COLORS.timer.border};
  border-radius: 10px;
  padding: 10px 14px;
  color: ${COLORS.text.timer};
  font-size: 14.12px;
  line-height: 14.12px;
  font-weight: 500;
  ${flexCenter}
  justify-content: center;
  letter-spacing: -0.3px;
  font-family: "Poppins", sans-serif;
  @media ${BREAKPOINTS.tabletDesktop} {
    border-radius: 7.5px;
    top: 10px;
    right: 10px;
    padding: 7px 10px;
  }
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  line-height: 24px;
  font-weight: 600;
  color: ${COLORS.card.title};
  margin: 0 0 20px 0;
  @media ${BREAKPOINTS.tabletDesktop} {
    font-size: 16px;
    line-height: 18px;
    margin: 0 0 14px 0;
  }
`;

export const BidContainer = styled.div`
  ${flexBetween}
`;

export const BidInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media ${BREAKPOINTS.tabletDesktop} {
    gap: 7px;
  }
`;

export const BidLabel = styled.span`
  font-size: 12px;
  color: ${COLORS.text.bidLabel};
  font-weight: 400;
  line-height: 100%;
  @media ${BREAKPOINTS.tabletDesktop} {
    font-size: 11px;
  }
`;

export const Price = styled.div`
  ${flexCenter}
  gap: 4px;
  font-size: 16px;
  line-height: 14px;
  font-weight: 500;
  color: ${COLORS.text.price};

  img {
    width: 22px;
    height: 22px;
  }
  @media ${BREAKPOINTS.tabletDesktop} {
    gap: 3px;
    font-size: 12px;
  }
`;

export const PlaceBidButton = styled.button`
  padding: 12px 24px;
  background: ${COLORS.card.button};
  border: none;
  border-radius: 12px;
  color: ${COLORS.text.buttonText};
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: "Poppins", sans-serif;
  &:hover {
    background: ${COLORS.card.buttonHover};
  }
  @media ${BREAKPOINTS.tabletDesktop} {
    padding: 11px 18px;
    border-radius: 9px;
    font-size: 11px;
  }
`;

export const NavButton = styled.button`
  width: 18px;
  height: 18px;
  background: white;
  border: none;
  ${flexCenter}
  justify-content: center;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  img {
    width: 18px;
    height: 18px;
  }
`;

export const SliderControlWrapper = styled.div`
  position: relative;
  background: ${COLORS.slider.background};
  max-width: 160px;
  gap: 22px;
  margin: 0 auto;
  height: 60px;
  align-items: center;
  border-radius: 17.25px;
  box-shadow: 0px 45px 35px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  @media ${BREAKPOINTS.tabletDesktop} {
    max-width: 124px;
  }
`;

export const Stick = styled.div`
  background-color: ${COLORS.stick};
  width: 2px;
  height: 24px;
  @media ${BREAKPOINTS.tabletDesktop} {
    height: 18px;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  flex: 0 0 280px;
  background: ${COLORS.card.background};
  border-radius: 24px;
  overflow: hidden;
  padding: 14px;
  box-shadow: 38px 12px 60px #c7c7c799;
  user-select: none;

  @media ${BREAKPOINTS.tabletDesktop} {
    flex: 0 0 210px;
    padding: 10px;
    border-radius: 18px;
  }
`;
