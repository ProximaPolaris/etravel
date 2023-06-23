import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Home.module.scss';

const HomePage = () => {

    return (
        <>
            <div className={styles.container}>
                <Header />
            </div>
        </>
    );
};

export default HomePage;