import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/components/Header.module.scss';
import logo from '../../img/etravel/logo.png';
import { useState } from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi';

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const redirectToAccount = () => {
    router.push('/account');
  };

  const logout = () => {
    router.push('/logout');
  };
  
  return (
    <div className={styles.container}>
      <div>
        {/* Logo de l'application */}
        <a href="/">
          <Image className={styles.logo} src={logo} alt="Logo" />
        </a>
      </div>
      
      {/* Affichage du titre pour certaines routes */}
      {(
        router.pathname === '/' || 
        router.pathname === '/signup' || 
        router.pathname === '/home' || 
        router.pathname === '/account' || 
        router.pathname === '/newTravel' ||
        router.pathname === '/newTransportation' ||
        router.pathname === '/newActivity'
      ) && (
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
      )}
      
      {/* Affichage du titre pour les routes de connexion */}
      {(router.pathname === '/login'|| router.pathname === '/forgot') && (
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
      )}
      
      <div className={styles.action_button}>
        {/* Bouton "Sign In" pour certaines routes */}
        {(router.pathname === '/' || router.pathname === '/forgot' || router.pathname === '/signup') && (
          <Link href="/login" className={styles.signIn} id="sign-in-button">
            <span>Sign In</span>
            <i></i>
          </Link>
        )}
        
        {/* Bouton "Sign Up" pour certaines routes */}
        {(router.pathname === '/' || router.pathname === '/forgot' || router.pathname === '/login') && (
          <Link href="/signup" className={styles.signUp} id="sign-up-button">
            <span>Sign Up</span>
            <i></i>
          </Link>
        )}
        
        {/* Profil utilisateur pour certaines routes */}
        {(
          router.pathname === '/home' || 
          router.pathname === '/account' || 
          router.pathname === '/newTravel' ||
          router.pathname === '/newTransportation' ||
          router.pathname === '/newActivity'
        ) && (
          <div className={styles.userProfile}>
            <button className={styles.profileButton} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {/* Icône de profil utilisateur */}
              <FiUser className={styles.profileImage} />
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                <ul>
                  {/* Option "Account" du menu déroulant */}
                  <li onClick={redirectToAccount}>
                    <FiUser className={styles.icon} />
                    <p>Account</p>
                  </li>
                  {/* Option "Sign out" du menu déroulant */}
                  <li onClick={logout}>
                    <FiLogOut className={styles.icon} />
                    <p>Sign out</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
