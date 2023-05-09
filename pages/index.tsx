import { userApi } from '@/api';
import AuthForm from '@/components/authForm';
import { MainLayout } from '@/components/MainLayout';
import { useAppSelector } from '@/redux/hooks';
import { setUserData } from '@/redux/slices/user';
import { wrapper } from '@/redux/store/store';
import styles from '@/styles/Home.module.css';
import { parseCookies } from 'nookies';

export default function Home() {
  const dd = useAppSelector((state) => state.user.);
  console.log(dd);
  return (
    <MainLayout>
      <div className={styles.formWrapper}>
        <AuthForm />
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  try {
    const { authToken } = parseCookies(ctx);
    const userData = await userApi.getMe(authToken);
    console.log(userData);
    store.dispatch(setUserData(userData));
    return { props: {} };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
});
