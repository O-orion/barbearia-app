// src/utils/validation.ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido').nonempty('E-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export const registerSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('E-mail inválido').nonempty('E-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});