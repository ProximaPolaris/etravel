import Header from '../components/Header/Header';
import styles from '@import/styles/pages/Index.module.scss'
import git from '../img/icons8-github.svg';
import Image from 'next/image';
import Footer from '@import/components/Footer/Footer';

const IndexPage = () => {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.content}>
        <h1>test</h1>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
