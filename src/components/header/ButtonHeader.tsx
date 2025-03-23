import React from "react";
import styled from "styled-components";

interface ButtonHeaderProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button.attrs({ type: "button" })`
  background: #000000;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #333333;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 300px;
    padding: 16px 24px;
    font-size: 18px;
  }
`;

export default ButtonHeader;
