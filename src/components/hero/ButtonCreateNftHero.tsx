import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const StyledButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 16px 24px;
  border-radius: 12px;
  border: 2px solid #000000;
  font-size: 16px;

  font-weight: 500;
  font-family: "Poppins", sans-serif;
  line-height: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    border: 1.5px solid #000000;
    background-color: #d7d7d7;
  }

  &:active {
    background-color: #444444;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 12px;
    border-radius: 9px;
    padding: 12.5px 16px;
  }
  @media (max-width: 1024px) {
    font-size: 11px;
    padding: 15px 15px;
    border-radius: 10px;
  }
`;

export function ButtonCreateNftHero({ text, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default ButtonCreateNftHero;
