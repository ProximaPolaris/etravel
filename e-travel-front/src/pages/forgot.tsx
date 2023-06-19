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
          <h1>Le saviez-vous ?</h1>
          <span>
            Marco Polo, le premier explorateur née au 13e siècle, 
            a vécu une incroyable aventure en Asie, découvrant des palais, 
            rencontrant des empereurs et rapportant des récits de dragons 
            et de merveilles exotiques. <br />
            Son voyage légendaire continue de nous inspirer à explorer le monde et à nourrir 
            notre imagination. <br/>
          </span>
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
