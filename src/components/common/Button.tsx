import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const StyledButton = styled(motion.button)`
  background: linear-gradient(45deg, ${theme.colors.pastelRed}, ${theme.colors.pastelBlue});
  color: ${theme.colors.pastelWhite};
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: 16px;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  }

  &:disabled {
    background: ${theme.colors.softGray};
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

function Button ({ children, type = 'button', disabled }: ButtonProps) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;