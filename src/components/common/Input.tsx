/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  error?: string;
  register: any;
  icon?: string;
}

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.lg};
`;

const StyledInput = styled(motion.input)<{ icon?: string }>`
  background: rgba(24, 23, 23, 0.09);
  border: 1px solid ${theme.colors.softGray};
  border-radius: 8px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  padding-left: ${({ icon }) => (icon ? '40px' : theme.spacing.md)};
  font-family: ${theme.fonts.body};
  font-size: 16px;
  color: ${theme.colors.softBlack};
  width: 100%;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${theme.colors.pastelBlue};
    box-shadow: 0 0 10px rgba(163, 191, 250, 0.3);
  }

  &::placeholder {
    color: ${theme.colors.softBlack};
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0.4;
  }

  /* Estilizar o ícone nativo do input type="date" */
  &::-webkit-calendar-picker-indicator {
    filter: invert(48%) sepia(13%) saturate(320%) hue-rotate(130deg) brightness(95%) contrast(80%);
    cursor: pointer;
    padding-right: ${theme.spacing.sm};
  }
`;

const Icon = styled(motion.span)`
  position: absolute;
  left: 10px;
  top: 35%;
  transform: translateY(-50%);
  color: ${theme.colors.pastelRed};
  font-size: 18px;
  pointer-events: none; /* Evita que o ícone interfira no input */
`;

const ErrorMessage = styled(motion.span)`
  color: ${theme.colors.pastelRed};
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 0;
`;



function Input ({ type, placeholder, name, error, register, icon }: InputProps)  {
// Não usar ícone decorativo para type="date"
const showIcon = icon && type !== 'date';

return (
  <InputWrapper>
    {showIcon && (
      <Icon
        className={`fas fa-${icon}`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      />
    )}
    <StyledInput
      type={type}
      placeholder={placeholder}
      {...register(name)}
      icon={showIcon ? icon : undefined}
      whileFocus={{ scale: 1.02, boxShadow: `0 0 12px ${theme.colors.pastelBlue}` }}
      aria-label={placeholder}
    />
    {error && (
      <ErrorMessage
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {error}
      </ErrorMessage>
    )}
  </InputWrapper>
);
};

export default Input;