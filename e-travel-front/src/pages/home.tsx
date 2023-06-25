import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Home.module.scss';
import { FaTrash } from 'react-icons/fa';
import { RiPencilLine } from 'react-icons/ri';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const HomePage = () => {
    // const [expanded, setExpanded] = useState(false);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.content}>
                    <div className={styles.section_action_button}>
                        <Link href="/newTravel" id="newtravel-button">
                            <button>Nouveau Travel</button>
                        </Link>
                        <button>
                            <FaTrash />
                        </button>
                    </div>
                    <div className={styles.section_travel}>
                        <div className={styles.title}>
                            <h1>Mes Travels</h1>
                        </div>
                        <div className={styles.card} id='1'>
                            <div className={styles.info}>
                            <p>Date</p>
                            </div>
                            <div className={styles.info}>
                            <p>Pays</p>
                            </div>
                            <div className={styles.info}>
                            <p>Information 1</p>
                            </div>
                            <div className={`${styles.info} ${styles.information2}`}>
                            <p>Information 2</p>
                            </div>
                            <div className={styles.button}>
                                <button>
                                    <RiPencilLine size={27}/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <h1>Mes anciens Travels</h1>
                        </div>
                        <div className={styles.card} id='3'>
                            <div className={styles.info}>
                            <p>Date</p>
                            </div>
                            <div className={styles.info}>
                            <p>Pays</p>
                            </div>
                            <div className={styles.info}>
                            <p>Information 1</p>
                            </div>
                            <div className={`${styles.info} ${styles.information2}`}>
                            <p>Information 2</p>
                            </div>
                            <div className={styles.button}>
                                <button>
                                    <RiPencilLine size={27}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default HomePage;