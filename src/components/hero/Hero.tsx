import {
  arrowHero,
  dotOrnament,
  dotPhone,
  dotSmall,
  HeroPic1,
  HeroPic2,
} from "../../assets";

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
          <ButtonMoreHero>EXPLORE MORE</ButtonMoreHero>
          <ButtonCreateNftHero>CREATE NFT </ButtonCreateNftHero>
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
          <img src={arrowHero} alt="" />
        </Wave>
        <MainImage>
          <ImgFirst>
            <img className="image-left" src={HeroPic1} alt="Featured NFT" />
          </ImgFirst>
          <ImgSecond>
            <img
              className="image-left blur-nft"
              src={HeroPic1}
              alt="Secondary NFT"
            />
          </ImgSecond>
        </MainImage>
        <SecondaryImage>
          <ImgFirst>
            <img className="image-right" src={HeroPic2} alt="Featured NFT" />
          </ImgFirst>
          <ImgSecond>
            <img
              className="image-right blur-nft"
              src={HeroPic2}
              alt="Secondary NFT"
            />
          </ImgSecond>
        </SecondaryImage>
        <DotPattern>
          <picture>
            <source media="(max-width: 1024px)" srcSet={dotPhone} />
            <source media="(max-width: 1439px)" srcSet={dotSmall} />
            <img className="image-left" src={dotOrnament} alt="" />
          </picture>
          <picture>
            <source media="(max-width: 1024px)" srcSet={dotPhone} />
            <source media="(max-width: 1439px)" srcSet={dotSmall} />
            <img className="image-left" src={dotOrnament} alt="" />
          </picture>
        </DotPattern>
      </ImageSection>
    </HeroContainer>
  );
}

export default Hero;
