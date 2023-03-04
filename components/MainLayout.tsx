import s from './main.module.scss';

export const MainLayout = ({ children }: any) => {
  return (
    <div >
      <header>h44eader</header>
      <main>{children}</main>
    </div>
  );
};
