import nft1 from "../../assets/images/Rectangle1.1.png";
import nft2 from "../../assets/images/Rectangle 2.1.png";
import dotSmall from "../../assets/images/dotSmall.png";
import dotPhone from "../../assets/images/DotPhone.png";
import Arrow from "../../assets/icons/Arrow 01.svg";
import dot from "../../assets/icons/Dot Ornament.svg";

import ButtonMoreHero from "./ButtonMoreHero";
import ButtonCreateNftHero from "./ButtonCreateNftHero";

import {
  Bonus,
  ButtonGroup,
  ContentSection,
  CreatorsLabel,
  Description,
  DotPattern,
  HeroContainer,
  HorizontalLine,
  ImageSection,
  ImgFirst,
  ImgSecond,
  MainImage,
  SecondaryImage,
  StatItem,
  StatLabel,
  StatsGroup,
  StatValue,
  Title,
  Wave,
} from "./hero.styled";

export function Hero() {
  return (
    <HeroContainer>
      <ContentSection>
        <HorizontalLine />
        <CreatorsLabel>OVER 1M CREATORS</CreatorsLabel>
        <Title>Discover And Create NFTs</Title>
        <Description>
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a <Bonus>$20 bonus</Bonus>.
        </Description>
        <ButtonGroup>
          <ButtonMoreHero text="EXPLORE MORE" />
          <ButtonCreateNftHero text="CREATE NFT" />
        </ButtonGroup>
        <StatsGroup>
          <StatItem>
            <StatValue>430K+</StatValue>
            <StatLabel>Art Works</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>159K+</StatValue>
            <StatLabel>Creators</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>87K+</StatValue>
            <StatLabel>Collections</StatLabel>
          </StatItem>
        </StatsGroup>
      </ContentSection>
      <ImageSection>
        <Wave>
          <img src={Arrow} alt="" />
        </Wave>
        <MainImage>
          <ImgFirst>
            <img className="image-left" src={nft1} alt="Featured NFT" />
          </ImgFirst>
          <ImgSecond>
            <img
              className="image-left blur-nft"
              src={nft1}
              alt="Secondary NFT"
            />
          </ImgSecond>
        </MainImage>
        <SecondaryImage>
          <ImgFirst>
            <img className="image-right" src={nft2} alt="Featured NFT" />
          </ImgFirst>
          <ImgSecond>
            <img
              className="image-right blur-nft"
              src={nft2}
              alt="Secondary NFT"
            />
          </ImgSecond>
        </SecondaryImage>
        <DotPattern>
          <picture>
            <source media="(max-width: 1024px)" srcSet={dotPhone} />
            <source media="(max-width: 1440px)" srcSet={dotSmall} />
            <img className="image-left" src={dot} alt="" />
          </picture>
          <picture>
            <source media="(max-width: 1024px)" srcSet={dotPhone} />
            <source media="(max-width: 1440px)" srcSet={dotSmall} />
            <img className="image-left" src={dot} alt="" />
          </picture>
        </DotPattern>
      </ImageSection>
    </HeroContainer>
  );
}

export default Hero;
