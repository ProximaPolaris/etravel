import Header from '../components/Header/Header';
import styles from '../styles/pages/NewActivity.module.scss';

const NewActivityPage = () => {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.section_calendar}>

                    </div>
                    <div className={styles.section_choix_activite}>

                    </div>
                    <div className={styles.section_calendar}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NewActivityPage;