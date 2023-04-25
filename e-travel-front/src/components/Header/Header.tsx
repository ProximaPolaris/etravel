import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../../styles/components/Header.module.scss';
import logo from '../../img/logo.png';

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div>
        <a href="/">
          <Image className={styles.logo} src={logo} alt="Logo" />
        </a>
      </div>
      {
        (router.pathname === '/' || router.pathname === '/signup')&& 
        <div className={styles.textIndex}>
          <h1>
            <span>E</span>
            <span>-</span>
            <span>T</span>
            <span>r</span>
            <span>a</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
          </h1>
        </div>
      }
      {
        router.pathname === '/login' && 
        <div className={styles.text}>
          <h1>
            <span>E</span>
            <span>-</span>
            <span>T</span>
            <span>r</span>
            <span>a</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
          </h1>
        </div>
      }
      <div className={styles.action_button}>
        {
          (router.pathname === '/' || router.pathname === '/signup') &&
          <Link href="/login" className={styles.signIn} id="sign-in-button">
            <span>Sign In</span>
            <i></i>
          </Link>
        }
        {
          (router.pathname === '/' || router.pathname === '/login') &&
          <Link href="/signup" className={styles.signUp} id="sign-up-button">
            <span>Sign Up</span>
            <i></i>
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;
