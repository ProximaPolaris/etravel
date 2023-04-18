import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/components/Header.module.scss';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className={styles.div}>
      <div>
        <Image className={styles.logo} src={logo} alt="Logo" />
      </div>
      <div className={styles.text}>
        <h2>E-Travel</h2>
      </div>
      <div className={styles.action_button}>
        <a href="/" className={styles.signIn} id="sign-in-button">
          <span>Sign In</span>
          <i></i>
        </a>
        <a href="/" className={styles.signUp} id="sign-up-button">
          <span>Sign Up</span>
          <i></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
