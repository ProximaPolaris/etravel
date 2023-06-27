import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Login.module.scss';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          <div className={styles.card}>
            <div className={styles.form}>
              <form>
                <h2>Sign in</h2>
                <div className={styles.inputCard}>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <span>Email</span>
                  <i></i>
                </div>
                <div className={styles.inputCard}>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span>Password</span>
                  <i></i>
                </div>
                <div className={styles.linksCard}>
                  <a href="forgot">Forgot Password</a>
                  <a href="signup">Sign Up</a>
                </div>
                <input
                  type="submit"
                  className={styles.buttonCard}
                  onClick={handleSubmit}
                  value="Submit"
                />
              </form>
            </div>
          </div>
          <div className={styles.action_button}>
            <a href="/">
              <button>Back</button>
            </a>
          </div>
        </div>
        <div className={styles.image} />
      </div>
    </>
  );
};

export default LoginPage;
