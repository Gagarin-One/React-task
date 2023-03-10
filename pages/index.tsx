import AuthForm from '@/components/authForm'
import { MainLayout } from '@/components/MainLayout'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.formWrapper}>
        <AuthForm />
      </div>
    </MainLayout>
  )
}
