import React, { useEffect, useMemo, useState } from "react";
import { formatTime } from "../../shared/utils";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

import { getNftData, NFTItem } from "./nftData";

import ArrowLeft from "../../assets/icons/ArrowSliderLeft.svg";
import ArrowRight from "../../assets/icons/ArrowSliderRight.svg";
import EthereumIcon from "../../assets/icons/mdi_ethereum.svg";

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

const WeeklyNFT: React.FC = () => {
  const [displayCards, setDisplayCards] = useState<NFTItem[]>([]);
  const [timeLeft, setTimeLeft] = useState(25632);

  const nfts = useMemo(() => getNftData(), []);

  useEffect(() => {
    setDisplayCards(nfts);
  }, [nfts]);

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
      {displayCards.length > 0 && (
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
                      <img src={EthereumIcon} alt="ETH" />
                      {nft.price}
                    </Price>
                  </BidInfo>
                  <PlaceBidButton>PLACE BID</PlaceBidButton>
                </BidContainer>
              </CardContent>
            </StyledSwiperSlide>
          ))}
        </Swiper>
      )}
      <SliderControlWrapper>
        <NavButton className="custom-prev">
          <img src={ArrowLeft} alt="Previous" />
        </NavButton>
        <Stick />
        <NavButton className="custom-next">
          <img src={ArrowRight} alt="Next" />
        </NavButton>
      </SliderControlWrapper>
    </WeeklyContainer>
  );
};

export default WeeklyNFT;
