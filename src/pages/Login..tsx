// src/pages/Login.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthSplitContainer from '../components/ui/AuthCard';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { loginSchema } from '../utils/Validations';
import { theme } from '../styles/theme';
import { LoginForm } from '../types/Auth';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const LinkText = styled(Link)`
  color: ${theme.colors.pastelBlue};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  text-align: center;
  margin-top: 30px;

  &:hover {
    text-decoration: underline;
  }
`;

const FormTitle = styled.h2`
  font-family: ${theme.fonts.title};
  color: ${theme.colors.pastelBlue};
  font-size: 28px;
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

function Login ()  {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log('Login:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula API
  };

  return (
    <AuthSplitContainer title="">
      <FormTitle>Entre e encontre sua barbearia</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          register={register}
          error={errors.email?.message}
          icon="envelope"
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          register={register}
          error={errors.password?.message}
          icon="lock"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
      </Form>
      <LinkText to="/cadastro">Não tem conta? Cadastre-se</LinkText>
    </AuthSplitContainer>
  );
};

export default Login;