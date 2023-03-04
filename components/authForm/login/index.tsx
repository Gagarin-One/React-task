import { useForm } from 'react-hook-form';
import { loginFormSchema, loginFormData } from '../schemas';
import s from '../form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: loginFormData) => console.log(data);

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <p>ЭЛ.ПОЧТА</p>
        <input className={s.input} {...register('email')} />
        <b className={s.error}>
          {errors.email?.message }
        </b>
        <p>ПАРОЛЬ</p>
        <input className={s.input} {...register('password')} />
        <b className={s.error}>{errors.password?.message}</b>
        <input className={s.submitBtn} type="submit" value="ВОЙТИ" />
      </form>
    </div>
  );
};

export default LoginForm;
