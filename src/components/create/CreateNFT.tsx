import React from "react";
import { nft1 } from "../../assets";

import ButtonMoreCreateNFT from "./ButtonMoreCreateNFT";
import ButtonMoreSellCreateNFT from "./ButtonSellCreateNFT";
import {
  ButtonGroup,
  ContentSide,
  CreateSection,
  ImageSide,
  Subtitle,
  Title,
} from "./create.styled";

const CreateNFT: React.FC = () => {
  return (
    <CreateSection>
      <ContentSide>
        <Title>Create and Sell NFTs</Title>
        <Subtitle>World's Largest NFT Place</Subtitle>
        <ButtonGroup>
          <ButtonMoreCreateNFT>Explore More</ButtonMoreCreateNFT>
          <ButtonMoreSellCreateNFT>Sell Artwork</ButtonMoreSellCreateNFT>
        </ButtonGroup>
      </ContentSide>
      <ImageSide>
        <img src={nft1} alt="NFT Creation" />
      </ImageSide>
      <img className="blur-nft" src={nft1} alt="NFT Creation" />
    </CreateSection>
  );
};

export default CreateNFT;
