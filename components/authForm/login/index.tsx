import { useForm } from 'react-hook-form';
import { loginFormSchema, loginFormData } from '../schemas';
import s from '../form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginDto } from '../../../api/types';
import { userApi } from '../../../api/index';
import { setCookie } from 'nookies';
import { useState } from 'react';

const LoginForm = () => {
const [formErr, setFormErr] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async (dto: loginDto) => {
    try {
      const data = await userApi.login(dto);
      setCookie(null, 'authToken', data.access_token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
      console.log(data);
      setFormErr('')
    } catch (err:any) {
      setFormErr(err.response.data.message)
    }
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <p>ЭЛ.ПОЧТА</p>
        <input className={s.input} {...register('email')} />
        <b className={s.error}>{errors.email?.message}</b>
        <p>ПАРОЛЬ</p>
        <input className={s.input} {...register('password')} />
        <b className={s.error}>{errors.password?.message}</b>
        <b className={s.error}>{formErr}</b>
        <input className={s.submitBtn} disabled={isSubmitting} type="submit" value="ВОЙТИ" />
      </form>
    </div>
  );
};

export default LoginForm;
