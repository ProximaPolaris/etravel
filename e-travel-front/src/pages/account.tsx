import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Account.module.scss';
import { FiUser } from 'react-icons/fi';
import Footer from '@import/components/Footer/Footer';
import Link from 'next/link';

const AccountPage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleModifyClick = () => {
    setIsEditable(true);
    setIsSaving(false);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
    setIsSaving(true);
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.sidebar}>
            <div className={styles.userIcon}>
              <FiUser size={300} />
            </div>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.title}>
              <h1>Account Information</h1>
            </div>
            <form className={styles.form}>
              <div className={styles.leftForm}>
                <div className={styles.formField}>
                  <label>Last Name</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>First Name</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Birth Date</label>
                  <input type='date' disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Gender</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
              </div>
              <div className={styles.rightForm}>
                <div className={styles.formField}>
                  <label>Adress</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Zip Code</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>City</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Country</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Email</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
              </div>
            </form>
            <div className={styles.action_button}>
              <a href="/home">
                <button className={styles.retourButton}>Retour</button>
              </a>
              <button
                className={styles.modifyButton}
                onClick={isEditable ? handleSaveClick : handleModifyClick}
              >
                {isEditable ? 'Save' : 'Update'}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AccountPage;
