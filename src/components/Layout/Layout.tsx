import { useRouter } from 'next/router';
import { FC } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.Layout}>
      <Header isCloseIcon={router.route === '/settings'} />
      {children}
    </div>
  );
};

export default Layout;
