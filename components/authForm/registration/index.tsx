import { useForm } from 'react-hook-form';
import { registrationFormSchema, registrationFormData } from '../schemas';
import s from '../form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateUserDto } from '../../../api/types';
import { userApi } from '@/api';
import { setCookie } from 'nookies';

const RegistrationForm = () => {
  const [formErr, setFormErr] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registrationFormData>({
    resolver: yupResolver(registrationFormSchema),
  });

  const onSubmit = async (dto: registrationFormData) => {
    try {
      const data = await userApi.register({
        userName: dto.userName,
        email: dto.email,
        password: dto.password1,
      });
      setCookie(null, 'authToken', data.access_token, { maxAge: 30 * 24 * 60 * 60, path: '/' });
      console.log(data);
      setFormErr('')
    } catch (err) {
      setFormErr(err.response.data.message)
      console.warn(err);
    }
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <p>ИМЯ И ФАМИЛИЯ</p>
        <input className={s.input} {...register('userName')} />
        <b className={s.error}>{errors.userName?.message}</b>
        <p>ЭЛ.ПОЧТА</p>
        <input className={s.input} {...register('email')} />
        <b className={s.error}>{errors.email?.message}</b>
        <p>ПАРОЛЬ</p>
        <input className={s.input} {...register('password1')} />
        <b className={s.error}>{errors.password1?.message}</b>
        <p>ПОВТОРИТЕ ПАРОЛЬ</p>
        <input className={s.input} {...register('password2')} />
        <b className={s.error}>{errors.password2?.message}</b>
        <b className={s.error}>{formErr}</b>
        <input
          className={s.submitBtn}
          type="submit"
          disabled={isSubmitting}
          value="ЗАРЕГИСТРИРОВАТЬСЯ"
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
