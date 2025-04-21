/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  error?: string | undefined;
  register: any;
  icon?: string;
}

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.lg};
`;

const StyledInput = styled(motion.input)`
  background: rgba(255, 255, 255, 0.1); /* Glassmorphism */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  padding-left: 40px; /* Espaço para ícone */
  font-family: ${theme.fonts.body};
  font-size: 16px;
  color: ${theme.colors.white};
  width: 100%;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${theme.colors.vibrantGold};
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.vibrantGold};
  font-size: 20px;
`;

const ErrorMessage = styled(motion.span)`
  color: ${theme.colors.neonRed};
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 0;
`;

function Input ({ type, placeholder, name, error, register, icon }: InputProps)  {
  return (
    <InputWrapper>
      {icon && <Icon className={`fas fa-${icon}`} />}
      <StyledInput
        type={type}
        placeholder={placeholder}
        {...register(name)}
        whileFocus={{ scale: 1.02 }}
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