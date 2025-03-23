import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function ButtonMoreHero({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button.attrs({ type: "button" })`
  background-color: #000000;
  color: #ffffff;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  line-height: 100%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    border: 1.5px solid #000000;
    background-color: #222222;
  }

  &:active {
    background-color: #444444;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
    border-radius: 9px;
    padding: 12.5px 22px;
  }
  @media (max-width: 1024px) {
    font-size: 11px;
    padding: 15px 21px;
    border-radius: 10px;
  }
`;
export default ButtonMoreHero;
