/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

interface SelectProps {
    name: string;
    options: { value: string; label: string }[];
    register: any;
    error?: string;
    placeholder?: string;
}

const SelectWrapper = styled.div`
    position: relative;
    margin-bottom: ${theme.spacing.lg};
`

const StyledSelect = styled(motion.select)`
    background: rgba(24, 23, 23, 0.09);
    border: 1px solid ${theme.colors.softGray};
    border-radius: 8px;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-family: ${theme.fonts.body};
    font-size: 16px;
    color: ${theme.colors.softBlack};
    width: 100%;
    outline: none;
    transition: all 0.3s ease;
    appearance: none;

    &:focus {
        border-color: ${theme.colors.pastelBlue};
        box-shadow: 0 0 10px rgba(163,191,250,0.3);

    }

    option {
        color: ${theme.colors.softBlack};
    }
`;

const SelectIcon = styled.span`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.pastelRed};
    font-size: 16px;

`

const ErrorMessage = styled(motion.span)`
  color: ${theme.colors.pastelRed};
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 0;
`;

export default function Select({ name, options, register, error, placeholder }: SelectProps) {

    return (
        <SelectWrapper>
          <StyledSelect
            {...register(name)}
            whileFocus={{ scale: 1.02 }}
          >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelect>
          <SelectIcon className="fas fa-chevron-down" />
          {error && (
            <ErrorMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </ErrorMessage>
          )}
        </SelectWrapper>
      );
}
