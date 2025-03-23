import {
  HeroPic1,
  HeroPic2,
  swiperPic3,
  swiperPic4,
  swiperPic5,
} from "../../assets";

export function getRandomPrice(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

export interface NFTItem {
  index: number;
  image: string;
  title: string;
  price: number;
}

export const getNftData = (): NFTItem[] => [
  {
    index: 1,
    image: HeroPic2,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 2,
    image: HeroPic1,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 3,
    image: swiperPic3,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 4,
    image: swiperPic4,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 5,
    image: swiperPic5,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
];
