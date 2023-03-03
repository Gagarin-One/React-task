import * as yup from 'yup';

export type FormData = yup.InferType<typeof loginFormSchema>;

export const loginFormSchema = yup.object().shape({
  email: yup.string().email('Неправильно указана почта').required('Поле обязательно'),
  password: yup
    .string()
    .min(6, 'Длина пароля должна быть более 6 символов')
    .required('Поле обязательно'),
});
