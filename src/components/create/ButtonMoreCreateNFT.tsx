import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function ButtonMoreCreateNFT({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
const StyledButton = styled.button.attrs({ type: "button" })`
  background-color: #ffffff;
  color: #141416;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 21px;
  font-weight: 600;
  font-family: "Outfit", sans-serif;
  line-height: 130%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f2f2f2;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 16px;
    padding: 15px 18px;
    border-radius: 9px;
  }
  @media (max-width: 1024px) {
    font-size: 10px;
    padding: 10px 13px;
    border-radius: 6px;
  }
`;

export default ButtonMoreCreateNFT;
