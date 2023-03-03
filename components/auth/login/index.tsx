import { useForm } from 'react-hook-form';
import { loginFormSchema, FormData } from '../schemas';
import s from './login.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
