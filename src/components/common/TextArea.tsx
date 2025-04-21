/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { styled } from "styled-components";

interface TextareaProps {
    name: string;
    placeholder: string;
    register: any;
    error?: string;
  }
  
  const TextareaWrapper = styled.div`
    position: relative;
    margin-bottom: ${theme.spacing.lg};
  `;
  
  const StyledTextarea = styled(motion.textarea)`
    background: rgba(24, 23, 23, 0.09);
    border: 1px solid ${theme.colors.softGray};
    border-radius: 8px;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-family: ${theme.fonts.body};
    font-size: 16px;
    color: ${theme.colors.softBlack};
    width: 100%;
    outline: none;
    resize: vertical;
    min-height: 100px;
    transition: all 0.3s ease;

  
    &:focus {
      border-color: ${theme.colors.pastelBlue};
      box-shadow: 0 0 10px rgba(163, 191, 250, 0.3);
    }
  
    &::placeholder {
      color: ${theme.colors.softBlack};
    }
  `;
  
  const ErrorMessage = styled(motion.span)`
    color: ${theme.colors.pastelRed};
    font-size: 12px;
    position: absolute;
    bottom: -20px;
    left: 0;
  `;

export default function TextArea({  name, placeholder, register, error }: TextareaProps) {

    return (
        <TextareaWrapper>
          <StyledTextarea
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
        </TextareaWrapper>
      );

}