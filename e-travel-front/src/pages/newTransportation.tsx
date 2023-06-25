import Header from '../components/Header/Header';
import styles from '../styles/pages/NewTransportation.module.scss';
import Image from 'next/image';

const NewTransportationPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.loader}>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.card}>
              <h2>Your Card Content</h2>
              <p>Additional details or description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTransportationPage;
