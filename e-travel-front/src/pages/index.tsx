import Header from '../components/Header/Header';
import styles from '@import/styles/pages/Index.module.css'

const IndexPage = () => {
  return (
    <div className={styles.body}>
      <Header />
      <h1>Bienvenue sur la page d'accueil de mon site</h1>
      <p>...</p>
    </div>
  );
};

export default IndexPage;
