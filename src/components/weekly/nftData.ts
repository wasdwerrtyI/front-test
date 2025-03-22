import Image1 from "../../assets/images/Rectangle 2.1.png";
import Image2 from "../../assets/images/Rectangle1.1.png";
import Image3 from "../../assets/images/Rectangle 85.png";
import Image4 from "../../assets/images/image (1).png";
import Image5 from "../../assets/images/image (2).png";

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
    image: Image1,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 2,
    image: Image2,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 3,
    image: Image3,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 4,
    image: Image4,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
  {
    index: 5,
    image: Image5,
    title: "Sun-Glass",
    price: getRandomPrice(1, 100),
  },
];
