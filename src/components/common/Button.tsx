/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const StyledButton = styled.button`
    background-color: ${ theme.colors.agedGold };
    color: ${ theme.colors.white };
    font-family: ${ theme.fonts.body }
    font-weight: 600;
    padding: ${ theme.spacing.md } ${ theme.spacing.lg };
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: ${ theme.colors.darkGreen };
        transform: scale(-2px);
    }

    &:disabled {
        background-color: ${ theme.colors.darkGray };
        cursor: not-allowed;

    }
    
    `;

export default function Button({ children, onClick, type = "button", disabled = false }: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}