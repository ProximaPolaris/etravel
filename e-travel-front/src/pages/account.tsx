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
    // Ajoutez ici la logique pour enregistrer les modifications
    // Par exemple, vous pouvez envoyer les données modifiées au serveur
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
              <h1>Information du compte</h1>
            </div>
            <form className={styles.form}>
              <div className={styles.leftForm}>
                <div className={styles.formField}>
                  <label>Nom</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Prenom</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Date de naissance</label>
                  <input type='date' disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Sexe</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
              </div>
              <div className={styles.rightForm}>
                <div className={styles.formField}>
                  <label>Adresse</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Code Postal</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Ville</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Pays</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
                <div className={styles.formField}>
                  <label>Email</label>
                  <input type='text' defaultValue="test" disabled={!isEditable} />
                </div>
              </div>
            </form>
            <div>
              <a href="/home">
                <button className={styles.retourButton}>Retour</button>
              </a>
              <button
                className={styles.modifyButton}
                onClick={isEditable ? handleSaveClick : handleModifyClick}
              >
                {isEditable ? 'Enregistrer' : 'Modifier'}
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
