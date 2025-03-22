import { styled } from "styled-components";

const COLORS = {
  background: "#141416",
  text: {
    primary: "#FFFFFF",
    secondary: "#D4D4D4",
  },
};

const BREAKPOINTS = {
  desktop: "(min-width: 1024px) and (max-width: 1439px)",
  mobile: "(max-width: 1024px)",
};

const SIZES = {
  container: {
    desktop: "1200px",
    tablet: "890px",
    mobile: "315px",
  },
  image: {
    desktop: {
      width: "390px",
      height: "250px",
    },
    tablet: {
      width: "280px",
      height: "186px",
    },
    mobile: {
      width: "263px",
      height: "130px",
    },
  },
};

const blurEffect = (size: number) => `
  position: absolute;
  filter: blur(${size}px);
  opacity: 0.7;
  display: flex;
`;

export const CreateSection = styled.div`
  background: ${COLORS.background};
  border-radius: 30px;
  position: relative;
  max-width: ${SIZES.container.desktop};
  margin: 120px auto;
  padding: 30px 30px 30px 66px;
  display: flex;
  justify-content: space-between;

  .blur-nft {
    ${blurEffect(52)}
    padding-top: 15px;
    width: ${SIZES.image.desktop.width};
    height: ${SIZES.image.desktop.height};
    right: 23px;
  }

  @media ${BREAKPOINTS.desktop} {
    max-width: ${SIZES.container.tablet};
    border-radius: 22px;
    padding: 23px 23px 23px 47px;
    margin: 90px auto 70px;

    .blur-nft {
      ${blurEffect(40)}
      padding-top: 15px;
      width: ${SIZES.image.tablet.width};
      height: ${SIZES.image.tablet.height};
    }
  }

  @media ${BREAKPOINTS.mobile} {
    max-width: ${SIZES.container.mobile};
    padding: 22px 30px 0 30px;
    height: 210px;
    margin: 70px auto 210px;

    .blur-nft {
      ${blurEffect(30)}
      width: ${SIZES.image.mobile.width};
      height: ${SIZES.image.mobile.height};
      left: 27px;
      bottom: -90px;
    }
  }
`;

export const ContentSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 45px;
  line-height: 48px;
  font-weight: 600;
  color: ${COLORS.text.primary};
  margin: 0 0 20px 0;

  @media ${BREAKPOINTS.desktop} {
    font-size: 34px;
    line-height: 36px;
    margin: 0 0 15px 0;
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 24px;
    line-height: 24px;
    margin: 0 0 9px 0;
  }
`;

export const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: ${COLORS.text.secondary};
  margin: 0 0 60px 0;

  @media ${BREAKPOINTS.desktop} {
    font-size: 15px;
    line-height: 16.5px;
    margin: 0 0 40px 0;
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 10px;
    line-height: 130%;
    margin: 0 0 22px 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;

  @media ${BREAKPOINTS.desktop} {
    gap: 18px;
  }
`;

export const ImageSide = styled.div`
  flex: 1;
  max-width: 370px;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${BREAKPOINTS.desktop} {
    max-width: 260px;
    height: 190px;
  }

  @media ${BREAKPOINTS.mobile} {
    position: absolute;
    left: 32px;
    bottom: -85px;
    width: 250px;
    height: 130px;

    img {
      width: 250px;
      height: 130px;
    }
  }
`;
