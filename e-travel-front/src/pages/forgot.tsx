import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Forgot.module.scss';

const ForgotPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          <div className={styles.card}>
            <div className={styles.form}>
              <h2>Forgot Password</h2>
              <div className={styles.inputCard}>
                <label>Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input type="submit" className={styles.buttonCard} onClick={handleSubmit} />
            </div>
          </div>
          <div className={styles.action_button}>
            <a href="/">
              <button>Back</button>
            </a>
          </div>
        </div>
        <div className={styles.right_part}>
          <h1>Did you know ?</h1>
          <span>
            Marco Polo, the first explorer born in the 13th century,
            embarked upon an extraordinary adventure in Asia, 
            where he discovered palaces, encountered emperors, 
            and brought back tales of dragons and exotic wonders. <br />
            His legendary journey continues to inspire us to explore the world and fuel our imagination. <br/>
          </span>
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
