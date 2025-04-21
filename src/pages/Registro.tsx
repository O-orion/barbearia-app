// src/pages/Register.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AuthSplitContainer from '../components/ui/AuthCard';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Textarea from '../components/common/TextArea';
import FileInput from '../components/common/FileInput';
import Button from '../components/common/Button';
import { registerSchema } from '../utils/Validations';
import { theme } from '../styles/theme';
import { RegisterForm } from '../types/Auth';

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const FormTitle = styled(motion.h2)`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.pastelBlue};
  font-size: 28px;
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

const LinkText = styled(Link)`
  color: ${theme.colors.pastelBlue};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  text-align: center;
  margin-top: ${theme.spacing.md};

  &:hover {
    text-decoration: underline;
  }
`;

const ProgressBar = styled(motion.div)<{ progress: number }>`
  height: 4px;
  background: linear-gradient(
    to right,
    ${theme.colors.pastelBlue} ${({ progress }) => progress}%,
    ${theme.colors.softGray} ${({ progress }) => progress}%
  );
  border-radius: 2px;
  margin-bottom: ${theme.spacing.md};
`;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      genero: '',
      dataNasci: '',
      bio: '',
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    console.log('Cadastro:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula API
  };

  // Calcular progresso do formulário
  const watchedFields = watch(['name', 'email', 'genero', 'dataNasci']);
  const filledFields = watchedFields.filter((field) => field && field.length > 0).length;
  const progress = (filledFields / 4) * 100; // 4 campos obrigatórios

  const genderOptions = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outro', label: 'Outro' },
  ];

  return (
    <AuthSplitContainer title="Cadastrar">
      <FormTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Criar Conta
      </FormTitle>
      <ProgressBar progress={progress} animate={{ width: `${progress}%` }} />
      <Form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          placeholder="Nome completo"
          name="name"
          register={register}
          error={errors.name?.message}
          icon="user"
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          register={register}
          error={errors.email?.message}
          icon="envelope"
        />
        <Select
          name="genero"
          options={genderOptions}
          register={register}
          error={errors.genero?.message}
          placeholder="Selecione seu gênero"
        />
        <Input
          type="date"
          placeholder="Data de nascimento"
          name="dataNasci"
          register={register}
          error={errors.dataNasci?.message}
        />
        <Textarea
          name="bio"
          placeholder="Conte um pouco sobre você (opcional)"
          register={register}
          error={errors.bio?.message}
        />
        <FileInput
          name="profilePicture"
          register={register}
          error={errors.profilePicture?.message}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </Form>

      <LinkText to="/login">Já tem conta? Faça login</LinkText>
      
    </AuthSplitContainer>
  );
};

export default Register;