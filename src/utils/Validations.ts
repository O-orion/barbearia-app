// src/utils/validation.ts
import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres').nonempty('Nome é obrigatório'),
  email: z.string().email('E-mail inválido').nonempty('E-mail é obrigatório'),
  genero: z.string().nonempty('Gênero é obrigatório'),
  dataNasci: z.string().refine(
    (date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 13;
      }
      return age >= 13;
    },
    { message: 'Você deve ter pelo menos 13 anos' }
  ),
  bio: z.string().max(200, 'A bio deve ter no máximo 200 caracteres').optional(),
  profilePicture: z
    .instanceof(FileList)
    .refine((files) => files.length === 0 || ['image/jpeg', 'image/png'].includes(files[0]?.type), {
      message: 'Apenas imagens JPG ou PNG são permitidas',
    })
    .refine((files) => files.length === 0 || files[0]?.size <= 5 * 1024 * 1024, {
      message: 'A imagem deve ter no máximo 5MB',
    })
    .optional(),
});

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido').nonempty('E-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').nonempty('Senha é obrigatória'),
});