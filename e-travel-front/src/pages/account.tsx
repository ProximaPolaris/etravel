import React from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Account.module.scss';
import { FiUser } from 'react-icons/fi';
import Footer from '@import/components/Footer/Footer';

const AccountPage = () => {
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
                                    <input type='text' value="test" disabled />
                                </div>
                                <div className={styles.formField}>
                                    <label>Prenom</label>
                                    <input type='text' value="test" disabled />
                                </div>
                                <div className={styles.formField}>
                                    <label>Date de naissance</label>
                                    <input type='date' disabled />
                                </div>
                                <div className={styles.formField}>
                                    <label>Sexe</label>
                                    <input type='text' value="test" disabled />
                                </div>
                            </div>
                            <div className={styles.rightForm}>
                                <div className={styles.formField}>
                                    <label>Adresse</label>
                                    <input type='text' value="test" disabled />
                                </div>
                                <div className={styles.formField}>
                                    <label>Code Postal</label>
                                    <input type='text' value="test" disabled />
                                </div>
                                <div className={styles.formField}>
                                    <label>Ville</label>
                                    <input type='text' value="test" disabled />
                                </div>
                                <div className={styles.formField}>
                                    <label>Pays</label>
                                    <input type='text' value="test" disabled />
                                </div>
                                <div className={styles.formField}>
                                    <label>Email</label>
                                    <input type='text' value="test" disabled />
                                </div>
                            </div>
                        </form>
                        <button className={styles.modifyButton}>Modifier</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
export default AccountPage;