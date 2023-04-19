import { useState } from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Login.module.scss';

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
// };

// const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
// };

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Code pour la validation de l'authentification
// };

const LoginPage = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <div className={styles.card}>
                    <div className={styles.form}>
                        <h2>Sign in</h2>
                        <div className={styles.inputCard}>
                            <input type="text" required/>
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div className={styles.inputCard}>
                            <input type="password" required/>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className={styles.linksCard}>
                            <a href="#">Forgot Password</a>
                            <a href="#">Sign Up</a>
                        </div>
                        <input type="submit" className={styles.buttonCard} />
                    </div>
                </div>
                <div className={styles.action_button}>
                    <button>Back</button>
                </div>
            </div>
            <div className={styles.image} />
        </div>
    </>
  );
};

export default LoginPage;
