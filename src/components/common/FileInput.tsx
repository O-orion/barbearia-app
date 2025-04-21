/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";
import { useState } from "react";

interface FileInputProps {
    name: string;
    register: any;
    error?: string;
  }
  
  const FileInputWrapper = styled.div`
    position: relative;
    margin-bottom: ${theme.spacing.lg};
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const StyledFileInput = styled(motion.input)`
    display: none;
  `;
  
  const FileLabel = styled(motion.label)`
   background: rgba(24, 23, 23, 0.09);
    border: 1px solid ${theme.colors.softGray};
    border-radius: 8px;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-family: ${theme.fonts.body};
    font-size: 16px;
    color: ${theme.colors.softBlack};
    cursor: pointer;
    text-align: center;
    width: 100%;
    transition: all 0.3s ease;
  
    &:hover {
      border-color: ${theme.colors.pastelBlue};
      box-shadow: 0 0 10px rgba(163, 191, 250, 0.3);
    }
  `;
  
  const PreviewImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: ${theme.spacing.sm};
    border: 2px solid ${theme.colors.pastelBlue};
  `;
  
  const ErrorMessage = styled(motion.span)`
    color: ${theme.colors.pastelRed};
    font-size: 12px;
    position: absolute;
    bottom: -20px;
    left: 0;
  `;

export default function FileInput({  name, register, error }: FileInputProps) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
    
    return (
        <FileInputWrapper>
          <StyledFileInput
            type="file"
            id={name}
            accept="image/*"
            {...register(name, { onChange: handleFileChange })}
          />
          <FileLabel htmlFor={name} whileHover={{ scale: 1.02 }}>
            Escolher Foto de Perfil
          </FileLabel>
          {preview && <PreviewImage src={preview} alt="Preview" />}
          {error && (
            <ErrorMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </ErrorMessage>
          )}
        </FileInputWrapper>
      );

}
