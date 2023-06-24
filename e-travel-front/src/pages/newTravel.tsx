import Header from '../components/Header/Header';
import styles from '../styles/pages/NewTravel.module.scss';
import Image from 'next/image';

import plane from '../img/etravel/plane.png';
import activity from '../img/etravel/activity.png';
import lodgement from '../img/etravel/lodgement.png';

const NewTravelPage = () => {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.section_country}>
                        <label>Choisir votre pays de destination</label>
                        <input type="text" />
                    </div>
                    <div className={styles.section_images_travel}>
                        <a href="#" className={`${styles['image-container']} ${styles.img}`}>
                            <Image src={plane} alt="Logo" />
                            <div className={styles.text}>Transport</div>
                        </a>
                        <a href="#" className={`${styles['image-container']} ${styles.img}`}>
                            <Image src={activity} alt="Logo" />
                            <div className={styles.text}>Activité</div>
                        </a>
                        <a href="#" className={`${styles['image-container']} ${styles.img}`}>
                            <Image src={lodgement} alt="Logo" />
                            <div className={styles.text}>Logement</div>
                        </a>
                    </div>
                    <div className={styles.section_input_travel}></div>
                    <div className={styles.section_action_button}></div>
                </div>
            </div>
        </>
    );
};

export default NewTravelPage;
