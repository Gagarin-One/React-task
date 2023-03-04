import { useForm } from 'react-hook-form';
import { registrationFormSchema, registrationFormData } from '../schemas';
import s from '../form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registrationFormData>({
    resolver: yupResolver(registrationFormSchema),
  });

  const onSubmit = (data: registrationFormData) => console.log(data);

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <p>ЭЛ.ПОЧТА</p>
        <input className={s.input} {...register('email')} />
        <b className={s.error}>{errors.email?.message}</b>
        <p>ПАРОЛЬ</p>
        <input className={s.input} {...register('password1')} />
        <b className={s.error}>{errors.password1?.message}</b>
        <p>ПОВТОРИТЕ ПАРОЛЬ</p>
        <input className={s.input} {...register('password2')} />
        <b className={s.error}>{errors.password2?.message}</b>
        <input className={s.submitBtn} type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ"/>
      </form>
    </div>
  );
};

export default RegistrationForm;