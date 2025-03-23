import React, { useEffect, useState } from "react";
import { formatTime } from "../../shared/utils";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

import { getNftData, NFTItem } from "./nftData";

import {
  BidContainer,
  BidInfo,
  BidLabel,
  CardContent,
  CardTitle,
  NavButton,
  NFTImage,
  PlaceBidButton,
  Price,
  SliderControlWrapper,
  Stick,
  StyledSwiperSlide,
  Timer,
  Title,
  WeeklyContainer,
} from "./weekly.styled";
import { arrowSliderLeft, arrowSliderRight, mdiEthereum } from "../../assets";

const TIME_EXPIRATION = 7 * 60 * 60 + 9 * 60 + 12;

const WeeklyNFT: React.FC = () => {
  const [displayCards, setDisplayCards] = useState<NFTItem[]>(getNftData());
  const [timeLeft, setTimeLeft] = useState(TIME_EXPIRATION);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!displayCards.length) return null;

  return (
    <WeeklyContainer>
      <Title>Weekly - Top NFT</Title>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {displayCards.map((nft) => (
          <StyledSwiperSlide key={nft.index}>
            <NFTImage>
              <img src={nft.image} alt={nft.title} />
              <Timer>{formatTime(timeLeft)}</Timer>
            </NFTImage>
            <CardContent>
              <CardTitle>{nft.title}</CardTitle>
              <BidContainer>
                <BidInfo>
                  <BidLabel>Current bid</BidLabel>
                  <Price>
                    <img src={mdiEthereum} alt="ETH" />
                    {nft.price}
                  </Price>
                </BidInfo>
                <PlaceBidButton>PLACE BID</PlaceBidButton>
              </BidContainer>
            </CardContent>
          </StyledSwiperSlide>
        ))}
      </Swiper>
      <SliderControlWrapper>
        <NavButton className="custom-prev">
          <img src={arrowSliderLeft} alt="Previous" />
        </NavButton>
        <Stick />
        <NavButton className="custom-next">
          <img src={arrowSliderRight} alt="Next" />
        </NavButton>
      </SliderControlWrapper>
    </WeeklyContainer>
  );
};

export default WeeklyNFT;
