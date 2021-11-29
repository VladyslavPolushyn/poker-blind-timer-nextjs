import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  isCloseIcon: boolean;
};

const Header = (props: HeaderProps) => {
  const { isCloseIcon } = props;
  const icon = isCloseIcon ? (
    <Link href="/">
      <a className={styles.Settings__link}>
        <Image src="/close.svg" alt="Close" width={25} height={25} />
      </a>
    </Link>
  ) : (
    <Link href="/settings">
      <a className={styles.Settings__link}>
        <span className={styles.Settings__text}>Settings</span>
        <Image src="/settings.svg" alt="Logo" width={30} height={30} />
      </a>
    </Link>
  );

  return (
    <header className={styles.Header}>
      <div className={`${styles.Header__container} container`}>
        <div className={styles.Header__logo}>
          <Link href="/">
            <a className={`${styles.Header__homelink} ${styles.Homelink}`}>
              <Image src="/clock.svg" alt="Logo" width={30} height={30} />
              <span className={styles.Homelink__text}>Poker Blind Timer</span>
            </a>
          </Link>
        </div>
        <div className={`${styles.Header__settings} ${styles.Settings}`}>
          {icon}
        </div>
      </div>
    </header>
  );
};

export default Header;
