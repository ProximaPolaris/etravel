import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/components/Header.module.scss';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href="/">
          <Image className={styles.logo} src={logo} alt="Logo" />
        </a>
      </div>
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
      <div className={styles.action_button}>
        <Link href="/login" className={styles.signIn} id="sign-in-button">
            <span>Sign In</span>
            <i></i>
        </Link>
        <a href="/" className={styles.signUp} id="sign-up-button">
          <span>Sign Up</span>
          <i></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
